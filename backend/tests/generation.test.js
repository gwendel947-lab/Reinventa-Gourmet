import test from "node:test";
import assert from "node:assert/strict";
import { requestContext, preferences, comparableQuantity, isCompatible, validateRecipe } from "../src/services/recipe-rules.js";
import { createGeminiProvider } from "../src/services/gemini.js";
import { aiConfig, generationKey, limits, reserve } from "../src/services/generation-usage.js";
import { createGenerationController } from "../src/controllers/geracao.controller.js";

const ingredient = { id: 1, nome: "Batata", classificacaoStatus: "VERIFICADO", dietasPermitidas: "ONIVORO,VEGANO", restricoes: "" };
const stock = [{ ingredienteId: 1, quantidade: 1, unidade: "kg", ingrediente: ingredient }];
const body = { ingredientIds: [1], servings: 2 };
const filters = { servings: 2, maxTime: 30, allowMissing: false };
const recipe = () => ({ titulo: "Batata assada", ingredientes: [{ ingredienteId: 1, quantidade: 500, unidade: "g" }], passos: ["Lave e descasque as batatas.", "Corte as batatas em pedaços uniformes.", "Tempere e distribua os pedaços em uma assadeira.", "Asse até dourar e verifique se estão macias ao centro."], tempoEstimado: 25, porcoes: 2 });
const config = { enabled: true, apiKey: "test", model: "test", timeout: 100, daily: 5, cooldown: 30, cache: 900, draft: 86400, minute: 10, globalDaily: 100 };
const res = () => ({ statusCode: 200, status(code) { this.statusCode = code; return this; }, set() { return this; }, json(body) { this.body = body; return this; } });

test("preferências vazias e atuais; restrições desconhecidas", () => {
  assert.deepEqual(preferences({ restricoes: [] }), { tipoDieta: "ONIVORO", restricoes: [] });
  assert.equal(requestContext({ ...body, preferencias: { tipoDieta: "Vegano", restricoes: [] } }, stock, { tipoDieta: "ONIVORO" }).profile.tipoDieta, "VEGANO");
  assert.throws(() => preferences({ restricoes: ["amendoim"] }), { code: "RESTRICAO_DESCONHECIDA" });
  assert.equal(isCompatible({ ...ingredient, classificacaoStatus: "NAO_VERIFICADO" }, "VEGANO", []), false);
  assert.equal(isCompatible(ingredient, "VEGANO", ["Sem Glúten"]), true);
  assert.equal(isCompatible({ ...ingredient, restricoes: "sem gluten" }, "ONIVORO", ["Sem Glúten"]), false);
});
test("valida entrada antes do provedor", () => {
  for (const invalid of [{ ingredientIds: [2] }, { ingredientIds: ["1"] }, { servings: 0 }, { servings: 51 }, { maxTime: -1 }, { allowMissing: "false" }, { preferencias: null }]) {
    assert.throws(() => requestContext({ ...body, ...invalid }, stock));
  }
  assert.throws(() => requestContext(body, [{ ...stock[0], quantidade: 0 }]));
});
test("estoque, conversões e estrutura", () => {
  assert.equal(comparableQuantity(1, "kg", "g"), 1000);
  assert.equal(comparableQuantity(1, "l", "ml"), 1000);
  assert.equal(comparableQuantity(1, "g", "ml"), null);
  assert.equal(validateRecipe(recipe(), stock, [ingredient], filters).ingredientes[0].situacao, "disponivel");
  for (const change of [{ passos: [] }, { passos: ["Asse as batatas."] }, { passos: [""] }, { porcoes: 3 }, { tempoEstimado: 31 }, { ingredientes: [{ ingredienteId: 99, quantidade: 1, unidade: "g" }] }, { ingredientes: [...recipe().ingredientes, ...recipe().ingredientes] }, { ingredientes: [{ ingredienteId: 1, quantidade: 1001, unidade: "g" }] }, { ingredientes: [{ ingredienteId: 1, quantidade: 1, unidade: "ml" }] }]) {
    assert.throws(() => validateRecipe({ ...recipe(), ...change }, stock, [ingredient], filters), { code: "RESPOSTA_INVALIDA" });
  }
});
test("modo flexível identifica complementos e limita adicionais", () => {
  const flexible = { ...filters, allowMissing: true };
  const parsed = recipe(); parsed.ingredientes[0].quantidade = 2000;
  const complement = { ...ingredient, id: 2, nome: "Cebola" };
  parsed.ingredientes.push({ ingredienteId: complement.id, quantidade: 1, unidade: "unidade" });
  assert.equal(validateRecipe(parsed, stock, [ingredient, complement], flexible).ingredientes[0].situacao, "faltante");
  parsed.ingredientes[0].unidade = "ml";
  assert.equal(validateRecipe(parsed, stock, [ingredient, complement], flexible).ingredientes[0].situacao, "unidade_incompativel");
  const extra = [2, 3, 4, 5].map((id) => ({ ...ingredient, id }));
  parsed.ingredientes.push(...extra.map(({ id }) => ({ ingredienteId: id, quantidade: 1, unidade: "g" })));
  assert.throws(() => validateRecipe(parsed, stock, [ingredient, ...extra], flexible));
});
test("provedor estruturado e erros sem repetição", async () => {
  let attempts = 0;
  const call = createGeminiProvider((options) => {
    assert.equal(options.httpOptions.retryOptions.attempts, 1);
    return { models: { generateContent: async (request) => {
      attempts++;
      assert.ok(request.config.abortSignal);
      assert.match(request.config.systemInstruction, /modo de preparo sempre detalhado/);
      assert.match(request.config.systemInstruction, /filtros\.allowMissing/);
      return { text: JSON.stringify(recipe()) };
    } } };
  });
  assert.equal((await call({ config, selected: stock, allowed: [ingredient], profile: preferences(), filters })).parsed.titulo, "Batata assada");
  assert.equal(attempts, 1);
  for (const [status, code] of [[429, "COTA_EXCEDIDA"], [403, "IA_CONFIGURACAO"], [500, "IA_INDISPONIVEL"]]) {
    const fail = createGeminiProvider(() => ({ models: { generateContent: async () => { throw { status }; } } }));
    await assert.rejects(() => fail({ config, selected: stock, allowed: [ingredient], profile: preferences(), filters }), { code });
  }
  const malformed = createGeminiProvider(() => ({ models: { generateContent: async () => ({ text: "not json" }) } }));
  await assert.rejects(() => malformed({ config, selected: stock, allowed: [ingredient], profile: preferences(), filters }), { code: "RESPOSTA_INVALIDA" });
  const slow = createGeminiProvider(() => ({ models: { generateContent: ({ config }) => new Promise((resolve, reject) => config.abortSignal.addEventListener("abort", () => reject(new Error("aborted")))) } }));
  await assert.rejects(() => slow({ config: { ...config, timeout: 5 }, selected: stock, allowed: [ingredient], profile: preferences(), filters }), { code: "TIMEOUT" });
});

// Transaction double models row serialization; real MySQL coverage is separately opt-in.
function fakeDb() {
  const records = [];
  const recipes = [];
  let tail = Promise.resolve();
  const matches = (row, where) => Object.entries(where).every(([key, value]) => {
    if (value?.gt) return row[key] > value.gt;
    if (value?.in) return value.in.includes(row[key]);
    return row[key] === value;
  });
  const db = {
    records, recipes,
    $queryRaw: async () => [{ id: 1 }],
    usuario: { findUnique: async () => ({ inventario: stock, perfil: null }) },
    ingrediente: { findMany: async () => [ingredient] },
    receitaGeracao: {
      findFirst: async ({ where }) => records.find((row) => matches(row, where)),
      findMany: async ({ where }) => records.filter((row) => matches(row, where)).sort((a, b) => b.criadaEm - a.criadaEm),
      count: async ({ where }) => records.filter((row) => matches(row, where)).length,
      create: async ({ data }) => { const row = { id: records.length + 1, criadaEm: new Date(), ...data }; records.push(row); return row; },
      update: async ({ where, data }) => Object.assign(records.find((row) => matches(row, where)), data),
      updateMany: async ({ where, data }) => { const rows = records.filter((row) => matches(row, where)); rows.forEach((row) => Object.assign(row, data)); return { count: rows.length }; }
    },
    receita: { create: async ({ data }) => { const row = { id: recipes.length + 1, ...data }; recipes.push(row); return row; }, findFirst: async ({ where }) => recipes.find((row) => matches(row, where)) },
    $transaction: async (callback) => { const previous = tail; let release; tail = new Promise((resolve) => { release = resolve; }); await previous; try { return await callback(db); } finally { release(); } }
  };
  return db;
}
test("configuração desativada sem limites e chave estável", () => {
  assert.equal(aiConfig({ GEMINI_ENABLED: "true", GEMINI_API_KEY: "x", GEMINI_MODEL: "test" }).enabled, false);
  const context = requestContext(body, stock);
  assert.equal(generationKey(context, [ingredient], "m"), generationKey(context, [ingredient], "m"));
  assert.notEqual(generationKey(context, [ingredient], "m"), generationKey({ ...context, filters }, [ingredient], "m"));
});
test("reserva simultânea, expiração e limites globais", async () => {
  const db = fakeDb();
  const outcomes = await Promise.allSettled([reserve(db, 1, "key", config), reserve(db, 1, "key", config)]);
  assert.equal(outcomes.filter((result) => result.status === "fulfilled").length, 1);
  assert.equal(db.records.length, 1);
  await assert.rejects(() => limits(db, 2, { ...config, minute: 1 }), { code: "LIMITE_GLOBAL" });
  db.records[0].reservaExpiraEm = new Date(0);
  db.records[0].criadaEm = new Date(Date.now() - 31000);
  await reserve(db, 1, "key", config);
  assert.equal(db.records.length, 2);
});
test("gerar, reutilizar cache sem cota e salvar simultaneamente", async () => {
  const db = fakeDb(); let calls = 0;
  const controller = createGenerationController(db, async () => { calls++; return { parsed: recipe() }; }, () => config);
  const req = { user: { id: 1 }, body };
  const first = res(); await controller.generate(req, first);
  assert.equal(first.statusCode, 200);
  assert.equal(first.body.geracao.receita.ingredientes[0].situacao, "disponivel");
  const second = res(); await controller.generate(req, second);
  assert.equal(second.body.geracao.reutilizada, true); assert.equal(calls, 1);
  const saveReq = { user: { id: 1 }, params: { id: "1" } };
  const responses = [res(), res()];
  await Promise.all(responses.map((response) => controller.save(saveReq, response)));
  assert.deepEqual(responses.map((response) => response.statusCode).sort(), [200, 201]);
  assert.equal(db.recipes.length, 1); assert.equal(db.recipes[0].publica, false);
  const unauthorized = res(); await controller.save({ ...saveReq, user: { id: 2 } }, unauthorized); assert.equal(unauthorized.statusCode, 404);
});
test("falha do provedor conta como tentativa; entrada inválida não conta", async () => {
  const db = fakeDb(); let calls = 0;
  const controller = createGenerationController(db, async () => { calls++; throw new Error("network"); }, () => config);
  const invalid = res(); await controller.generate({ user: { id: 1 }, body: { ...body, servings: 0 } }, invalid);
  assert.equal(invalid.statusCode, 400); assert.equal(calls, 0);
  const fail = res(); await controller.generate({ user: { id: 1 }, body }, fail);
  assert.equal(db.records[0].status, "ERRO"); assert.equal(calls, 1);
  const repeat = res(); await controller.generate({ user: { id: 1 }, body }, repeat);
  assert.equal(repeat.body.code, "COOLDOWN"); assert.equal(calls, 1);
});

test("limite diário, status desativado e expiração de rascunho", async () => {
  const db = fakeDb();
  const old = new Date(Date.now() - 60000);
  db.records.push(...Array.from({ length: 5 }, (_, index) => ({ id: index + 1, usuarioId: 1, status: "ERRO", criadaEm: old })));
  await assert.rejects(() => limits(db, 1, config), { code: "LIMITE_DIARIO" });
  const disabled = createGenerationController(db, null, () => ({ enabled: false }));
  const status = res(); await disabled.status({ user: { id: 1 } }, status);
  assert.equal(status.body.disponivel, false);
  const controller = createGenerationController(db, null, () => config);
  db.records[0].status = "SUCESSO"; db.records[0].payload = recipe(); db.records[0].rascunhoExpiraEm = new Date(0);
  const expired = res(); await controller.save({ user: { id: 1 }, params: { id: "1" } }, expired);
  assert.equal(expired.body.code, "RASCUNHO_EXPIRADO");
  assert.equal(db.recipes.length, 0);
});

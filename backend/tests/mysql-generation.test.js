import test from "node:test";
import assert from "node:assert/strict";
import crypto from "node:crypto";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { reserve } from "../src/services/generation-usage.js";
import { createGenerationController } from "../src/controllers/geracao.controller.js";

test("MySQL real: reservas entre conexões e salvamento idempotente", { skip: !process.env.TEST_DATABASE_URL }, async () => {
  const url = new URL(process.env.TEST_DATABASE_URL);
  assert.match(url.pathname, /_test$/, "Use exclusivamente um banco de teste terminado em _test");
  const adapter = () => new PrismaMariaDb({ host: url.hostname, port: Number(url.port || 3306), user: decodeURIComponent(url.username), password: decodeURIComponent(url.password), database: url.pathname.slice(1), connectionLimit: 3,
    ...(process.env.TEST_DATABASE_SSL === "true" ? { ssl: { rejectUnauthorized: true } } : {}) });
  const first = new PrismaClient({ adapter: adapter() });
  const second = new PrismaClient({ adapter: adapter() });
  const suffix = crypto.randomUUID();
  let user, ingredient;
  const config = { enabled: true, timeout: 30000, daily: 5, cooldown: 30, minute: 1000000, globalDaily: 1000000, model: "test" };
  try {
    user = await first.usuario.create({ data: { nome: "Fixture IA", email: `${suffix}@example.invalid`, senha: "test-only" } });
    ingredient = await first.ingrediente.create({ data: { nome: `Fixture ${suffix}`, categoria: "teste" } });
    const results = await Promise.allSettled([reserve(first, user.id, suffix, config), reserve(second, user.id, suffix, config)]);
    assert.equal(results.filter((result) => result.status === "fulfilled").length, 1);
    assert.equal(results.find((result) => result.status === "rejected").reason.code, "GERACAO_EM_ANDAMENTO");
    const record = results.find((result) => result.status === "fulfilled").value;
    await first.receitaGeracao.update({ where: { id: record.id }, data: { status: "SUCESSO", reservaExpiraEm: null, rascunhoExpiraEm: new Date(Date.now() + 60000), payload: {
      titulo: "Receita teste", passos: ["Asse."], tempoEstimado: 10, porcoes: 1,
      ingredientes: [{ ingredienteId: ingredient.id, quantidade: 1, unidade: "unidade", opcional: false }]
    } } });
    const request = { user: { id: user.id }, params: { id: String(record.id) } };
    const response = () => ({ statusCode: 200, status(value) { this.statusCode = value; return this; }, set() { return this; }, json(value) { this.body = value; return this; } });
    const responses = [response(), response()];
    await Promise.all([createGenerationController(first).save(request, responses[0]), createGenerationController(second).save(request, responses[1])]);
    assert.deepEqual(responses.map((item) => item.statusCode).sort(), [200, 201]);
    assert.equal(responses[0].body.receita.id, responses[1].body.receita.id);
    assert.equal(await first.receita.count({ where: { usuarioId: user.id } }), 1);
  } finally {
    if (user) await first.usuario.delete({ where: { id: user.id } });
    if (ingredient) await first.ingrediente.delete({ where: { id: ingredient.id } });
    await Promise.all([first.$disconnect(), second.$disconnect()]);
  }
});

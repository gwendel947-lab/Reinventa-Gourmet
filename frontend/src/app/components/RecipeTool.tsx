import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { ChefHat, Clock, Info, Plus, Save, Search, Trash2, Wand2, X } from "lucide-react";
import { toast } from "sonner";
import api from "../../services/api";
import { useAuth } from "../contexts/AuthContext";

type InventoryItem = { id: number; ingredienteId: number; quantidade: number; unidade: string; ingrediente: { nome: string } };
type RecipeResult = {
  geracaoId?: number; expiraEm?: string; id?: number; titulo: string; modoPreparo: string; tempoEstimado: number; porcoes: number; geradaPorIA?: boolean;
  pontuacao?: number; ingredientesPresentes?: Array<{ nome: string; quantidade: number; unidade: string }>;
  ingredientesFaltantes?: Array<{ nome: string; quantidade: number; unidade: string; situacao: string; opcional?: boolean }>;
  ingredientes?: Array<{ ingrediente: { nome: string }; quantidade: number; unidade: string; opcional?: boolean }>;
};

const units = ["unidade", "g", "kg", "ml", "l", "xícara", "colher"];

export const RecipeTool = () => {
  const { user, login, updateUser } = useAuth();
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [catalog, setCatalog] = useState<Array<{ id: number; nome: string }>>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [selected, setSelected] = useState<number[]>([]);
  const [allowMissing, setAllowMissing] = useState(false);
  const [maxTime, setMaxTime] = useState("");
  const [servings, setServings] = useState("2");
  const [diet, setDiet] = useState("Come de tudo");
  const [allergies, setAllergies] = useState("");
  const [results, setResults] = useState<RecipeResult[]>([]);
  const [aiError, setAiError] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiStatus, setAiStatus] = useState<{ disponivel: boolean; message?: string; retryAfterSeconds?: number } | null>(null);
  const generationPending = useRef(false);
  const [inventoryWrites, setInventoryWrites] = useState(0);
  const inventoryQueue = useRef(Promise.resolve());
  const requestVersion = useRef(0);
  const currentInputs = JSON.stringify({ userId: user?.id, inventory, selected, maxTime, servings, allowMissing, diet, allergies });
  const inputVersion = useRef(currentInputs);
  if (inputVersion.current !== currentInputs) {
    inputVersion.current = currentInputs;
    requestVersion.current += 1;
  }
  useEffect(() => { setResults([]); setAiError(null); }, [currentInputs]);
  const refreshAiStatus = async () => {
    try { setAiStatus((await api.get("/receitas/geracao/status")).data); }
    catch { setAiStatus(null); }
  };
  useEffect(() => { if (user?.id) refreshAiStatus(); }, [user?.id]);
  useEffect(() => {
    if (!user?.id || !aiStatus?.retryAfterSeconds) return;
    const timer = setTimeout(refreshAiStatus, Math.min(aiStatus.retryAfterSeconds, 60) * 1000);
    return () => clearTimeout(timer);
  }, [aiStatus, user?.id]);
  const visiblePreferences = () => ({ tipoDieta: diet, restricoes: allergies.split(",").map((item) => item.trim()).filter(Boolean) });
  const [authOpen, setAuthOpen] = useState(!user);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const [authData, setAuthData] = useState({ nome: "", email: "", senha: "" });

  const loadData = async (refreshPreferences = true) => {
    if (!user?.id) return;
    setIsLoading(true);
    try {
      const [{ data: inventoryData }, { data: catalogData }, { data: meData }] = await Promise.all([
        api.get(`/inventario/usuario/${user.id}`), api.get("/ingredientes"), api.get("/users/me")
      ]);
      const items = inventoryData.inventario ?? [];
      setInventory(items);
      setSelected(items.map((item: InventoryItem) => item.ingredienteId));
      setCatalog(catalogData.ingredientes ?? []);
      const profile = meData.user;
      if (refreshPreferences) {
        setDiet(profile.tipoDieta);
        setAllergies(profile.restricoes.join(", "));
      }
      updateUser({ diet: profile.tipoDieta, allergies: profile.restricoes, avatar: profile.avatar, profileLoaded: true });
    } catch {
      toast.error("Não foi possível carregar seu inventário e preferências.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { if (user?.id) { setAuthOpen(false); loadData(); } }, [user?.id]);

  const suggestions = useMemo(() => catalog.filter((item) => item.nome.toLowerCase().includes(input.toLowerCase())).slice(0, 8), [catalog, input]);

  const addIngredient = async (item?: { id: number; nome: string }) => {
    const name = (item?.nome || input).trim();
    if (!name || !user?.id) return;
    const existing = catalog.find((candidate) => candidate.nome.toLowerCase() === name.toLowerCase());
    try {
      const ingredient = existing || (await api.post("/ingredientes", { nome: name, categoria: "outros" })).data.ingrediente;
      await api.post("/inventario", { ingredienteId: ingredient.id, quantidade: 1, unidade: "unidade" });
      setInput("");
      await loadData(false);
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Não foi possível adicionar o ingrediente.");
    }
  };

  const updateItem = async (item: InventoryItem, field: "quantidade" | "unidade", value: string) => {
    const next = field === "quantidade" ? Number(value) : value;
    if (field === "quantidade" && (!Number.isFinite(next) || next < 0)) return;
    setInventory((current) => current.map((candidate) => candidate.id === item.id ? { ...candidate, [field]: next } : candidate));
    setInventoryWrites((count) => count + 1);
    const save = inventoryQueue.current.then(() => api.put(`/inventario/usuario/${user?.id}/ingrediente/${item.ingredienteId}`, { quantidade: field === "quantidade" ? next : item.quantidade, unidade: field === "unidade" ? value : item.unidade }));
    inventoryQueue.current = save.then(() => undefined, () => undefined);
    try { await save; }
    catch { toast.error("Não foi possível atualizar o estoque."); await loadData(false); }
    finally { setInventoryWrites((count) => count - 1); }
  };

  const removeItem = async (item: InventoryItem) => {
    await api.delete(`/inventario/usuario/${user?.id}/ingrediente/${item.ingredienteId}`);
    setInventory((current) => current.filter((candidate) => candidate.id !== item.id));
    setSelected((current) => current.filter((id) => id !== item.ingredienteId));
    setResults([]);
  };

  const searchRecipes = async () => {
    if (!selected.length) return toast.error("Selecione ao menos um ingrediente.");
    const version = ++requestVersion.current;
    setIsLoading(true);
    setAiError(null);
    try {
      const { data } = await api.post("/receitas/sugestoes", { ingredientIds: selected, maxTime: maxTime || undefined, servings: Number(servings), allowMissing, preferencias: visiblePreferences() });
      if (version !== requestVersion.current) return;
      setResults(data.receitas ?? []);
      if (!data.receitas?.length) toast("Nenhuma receita compatível foi encontrada.");
    } catch (error: any) { toast.error(error.response?.data?.message || "Não foi possível buscar receitas."); }
    finally { setIsLoading(false); }
  };

  const savePreferences = async () => {
    try {
      const restrictions = allergies.split(",").map((item) => item.trim()).filter(Boolean);
      await api.put("/users/me", { tipoDieta: diet, restricoes: restrictions });
      updateUser({ diet, allergies: restrictions });
      setResults([]);
      toast.success("Preferências alimentares atualizadas.");
    } catch (error: any) { toast.error(error.response?.data?.message || "Não foi possível salvar suas preferências."); }
  };

  const generateRecipe = async () => {
    if (generationPending.current || inventoryWrites) return;
    if (!selected.length) return toast.error("Selecione ao menos um ingrediente.");
    generationPending.current = true;
    setIsGenerating(true);
    const version = ++requestVersion.current;
    setAiError(null);
    setResults([]);
    try {
      const { data } = await api.post("/receitas/gerar", { ingredientIds: selected, maxTime: maxTime || undefined, servings: Number(servings), allowMissing, preferencias: visiblePreferences() });
      if (version !== requestVersion.current) return;
      setResults([{ ...data.geracao.receita, modoPreparo: data.geracao.receita.passos.join("\n"), geracaoId: data.geracao.id, expiraEm: data.geracao.expiraEm, geradaPorIA: true }]);
      toast.success(data.geracao.reutilizada ? "Rascunho reutilizado." : "Receita criada com IA.");
    } catch (error: any) {
      if (version !== requestVersion.current) return;
      const data = error.response?.data;
      const message = (data?.message || "A IA está indisponível. Tente buscar no banco.") + (data?.retryAfterSeconds ? ` Aguarde ${data.retryAfterSeconds} segundos.` : "");
      setAiError(message);
      toast.error(message);
    } finally { generationPending.current = false; setIsGenerating(false); refreshAiStatus(); }
  };

  const saveGeneration = async (recipe: RecipeResult) => {
    const generationId = (recipe as RecipeResult & { geracaoId?: number }).geracaoId;
    if (!generationId) return toast.error("Esta receita já está salva ou não é um rascunho.");
    setIsSaving(true);
    try {
      const { data } = await api.post(`/receitas/geracoes/${generationId}/salvar`);
      toast.success("Receita salva no seu perfil.");
      setResults((current) => current.map((item) => item === recipe ? {
        titulo: data.receita.titulo,
        modoPreparo: data.receita.modoPreparo,
        tempoEstimado: data.receita.tempoEstimado,
        porcoes: data.receita.porcoes,
        geradaPorIA: true,
        ingredientes: data.receita.ingredientes
      } : item));
    } catch (error: any) { toast.error(error.response?.data?.message || "Não foi possível salvar o rascunho."); }
    finally { setIsSaving(false); }
  };

  const submitAuth = async (event: FormEvent) => {
    event.preventDefault();
    try {
      if (authMode === "signup") await api.post("/users/register", authData);
      const { data } = await api.post("/users/login", { email: authData.email, senha: authData.senha });
      localStorage.setItem("reinventa-token", data.token);
      const profile = (await api.get("/users/me")).data.user;
      login({ id: profile.id, name: profile.nome, email: profile.email, avatar: profile.avatar, diet: profile.tipoDieta, allergies: profile.restricoes, profileLoaded: true });
      setAuthOpen(false);
      toast.success("Login efetuado com sucesso!");
    } catch (error: any) { toast.error(error.response?.data?.message || "Não foi possível autenticar."); }
  };

  return (
    <main className="min-h-[90vh] bg-[#FEFAF0] p-5 pt-10 text-[#8C4B3A] md:p-10">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[380px_1fr]">
        <section className="rounded-3xl border-4 border-[#8C4B3A] bg-white p-6 shadow-[8px_8px_0px_#E07A5F] lg:sticky lg:top-24 lg:h-fit">
          <header className="mb-5 flex items-center gap-3 border-b-2 border-dashed border-[#8C4B3A]/20 pb-4"><ChefHat size={30} /><div><h1 className="font-title text-2xl">INVENTÁRIO</h1><p className="text-sm opacity-70">Escolha o que será usado.</p></div></header>
          <form onSubmit={(event) => { event.preventDefault(); addIngredient(); }} className="relative mb-5 flex gap-2">
            <input value={input} onChange={(event) => setInput(event.target.value)} disabled={!user} placeholder={user ? "Buscar ingrediente..." : "Entre para começar"} className="min-w-0 flex-1 rounded-xl border-2 border-[#8C4B3A] bg-[#FEFAF0] px-3 py-2" />
            <button type="submit" className="rounded-xl bg-[#8C4B3A] p-3 text-white"><Plus size={20} /></button>
            {input && suggestions.length > 0 && <div className="absolute top-12 z-20 w-full rounded-xl border-2 border-[#8C4B3A] bg-white p-2 shadow-lg">{suggestions.map((item) => <button type="button" key={item.id} onClick={() => addIngredient(item)} className="block w-full rounded-lg p-2 text-left hover:bg-[#F2CC8F]/40">{item.nome}</button>)}</div>}
          </form>
          <div className="space-y-3">
            {isLoading && !inventory.length ? <p className="py-4 text-center opacity-60">Carregando...</p> : inventory.map((item) => <div key={item.id} className="rounded-xl border-2 border-[#8C4B3A]/20 p-3"><label className="flex items-center gap-2"><input type="checkbox" checked={selected.includes(item.ingredienteId)} onChange={() => setSelected((current) => current.includes(item.ingredienteId) ? current.filter((id) => id !== item.ingredienteId) : [...current, item.ingredienteId])} /> <strong className="flex-1">{item.ingrediente.nome}</strong><button type="button" onClick={() => removeItem(item)}><Trash2 size={16} /></button></label><div className="mt-2 flex gap-2 pl-6"><input type="number" min="0" step="any" value={item.quantidade} onChange={(event) => updateItem(item, "quantidade", event.target.value)} className="w-20 rounded border px-2 py-1" /><select value={item.unidade} onChange={(event) => updateItem(item, "unidade", event.target.value)} className="rounded border px-2 py-1">{units.map((unit) => <option key={unit}>{unit}</option>)}</select></div></div>)}
            {!inventory.length && !isLoading && <div className="py-8 text-center opacity-60"><Info className="mx-auto mb-2" /><p>Seu inventário está vazio.</p></div>}
          </div>
          <div className="mt-6 space-y-3 border-t-2 border-dashed border-[#8C4B3A]/20 pt-5"><label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={allowMissing} onChange={(event) => { setAllowMissing(event.target.checked); setResults([]); }} /> Permitir ingredientes faltantes</label><div className="flex gap-2"><label className="flex-1 text-sm">Tempo máximo<input type="number" min="1" value={maxTime} onChange={(event) => setMaxTime(event.target.value)} placeholder="min" className="mt-1 w-full rounded border px-2 py-2" /></label><label className="flex-1 text-sm">Porções<input type="number" min="1" max="50" value={servings} onChange={(event) => setServings(event.target.value)} className="mt-1 w-full rounded border px-2 py-2" /></label></div><label className="block text-sm">Dieta<select value={diet} onChange={(event) => { setDiet(event.target.value); setResults([]); }} className="mt-1 w-full rounded border px-2 py-2"><option>Come de tudo</option><option>Vegetariano</option><option>Vegano</option><option>Pescetariano</option><option>Cetogênico</option><option>Outro</option></select></label><label className="block text-sm">Restrições (opcional), separadas por vírgula<input value={allergies} onChange={(event) => { setAllergies(event.target.value); setResults([]); }} placeholder="ex.: sem lactose" className="mt-1 w-full rounded border px-2 py-2" /></label><button type="button" onClick={savePreferences} className="text-left text-sm font-bold underline">Salvar preferências</button></div>
          <div className="mt-5 grid gap-2"><button disabled={!user || isLoading} onClick={searchRecipes} className="flex items-center justify-center gap-2 rounded-xl border-2 border-[#8C4B3A] py-3 font-bold disabled:opacity-50"><Search size={18} /> Buscar receitas</button><button disabled={!user || isLoading || isGenerating || inventoryWrites > 0 || aiStatus?.disponivel === false} onClick={generateRecipe} className="flex items-center justify-center gap-2 rounded-xl bg-[#E07A5F] py-3 font-bold text-white disabled:opacity-50"><Wand2 size={18} /> {isGenerating ? "Gerando receita…" : "Criar com IA"}</button></div>
          <p className="mt-3 text-xs">Ao gerar, os ingredientes e as preferências informadas serão enviados ao Google. No plano gratuito, esses dados podem ser usados para melhorar os produtos do provedor.</p>
          {aiStatus?.message && <p className="mt-2 text-sm" role="status">{aiStatus.message}</p>}
        </section>
        <section className="space-y-5">{aiError && <div className="rounded-2xl border-2 border-[#E07A5F] bg-[#E07A5F]/10 p-4"><p className="font-bold">{aiError}</p><button onClick={searchRecipes} className="mt-2 font-bold underline">Usar busca no banco</button></div>}{!results.length ? <div className="flex min-h-[420px] flex-col items-center justify-center rounded-3xl border-4 border-dashed border-[#8C4B3A]/20 p-10 text-center opacity-60"><Wand2 size={60} className="mb-5 text-[#E07A5F]" /><h2 className="font-title text-3xl">SUAS SUGESTÕES</h2><p className="mt-2 max-w-md">Busque no banco ou crie uma receita com IA. A geração não acontece automaticamente.</p></div> : results.map((recipe, index) => <article key={`${recipe.titulo}-${index}`} className="rounded-3xl border-4 border-[#8C4B3A] bg-white p-6 shadow-[6px_6px_0px_#F2CC8F]"><div className="flex flex-wrap items-start justify-between gap-3"><div><span className="text-sm font-bold uppercase text-[#E07A5F]">{recipe.geradaPorIA || (recipe as any).geracaoId ? "Criada com IA" : "Sugestão do banco"}</span><h2 className="font-title text-3xl">{recipe.titulo}</h2></div><div className="flex items-center gap-3 text-sm font-bold"><span><Clock size={16} className="inline" /> {recipe.tempoEstimado} min</span><span>{recipe.porcoes} porções</span>{recipe.pontuacao !== undefined && <span>{recipe.pontuacao}%</span>}</div></div><div className="mt-5 grid gap-6 md:grid-cols-2"><div><h3 className="mb-2 font-title text-xl">Ingredientes</h3><ul className="space-y-1">{(recipe.ingredientes || recipe.ingredientesPresentes || []).map((item: any, itemIndex) => <li key={itemIndex} className="text-sm">• {item.ingrediente?.nome || item.nome}: {item.quantidade} {item.unidade}{item.situacao === "faltante" && <strong> — Faltante / complementar estoque</strong>}{item.situacao === "unidade_incompativel" && <strong> — Conferir unidade e quantidade</strong>}</li>)}{recipe.ingredientesFaltantes?.filter((item) => !item.opcional).map((item, itemIndex) => <li key={`missing-${itemIndex}`} className="text-sm font-bold text-[#E07A5F]">• Faltante: {item.nome} ({item.quantidade} {item.unidade})</li>)}</ul></div><div><h3 className="mb-2 font-title text-xl">Modo de preparo</h3><ol className="space-y-2 text-sm">{recipe.modoPreparo.split("\n").map((step, stepIndex) => <li key={stepIndex}><b>{stepIndex + 1}.</b> {step}</li>)}</ol></div></div>{recipe.expiraEm && <p className="mt-3 text-xs">Rascunho válido até {new Date(recipe.expiraEm).toLocaleString("pt-BR")}.</p>}{(recipe as any).geracaoId && <button disabled={isSaving} onClick={() => saveGeneration(recipe)} className="mt-5 flex items-center gap-2 rounded-xl bg-[#8C4B3A] px-4 py-2 font-bold text-white disabled:opacity-50"><Save size={17} /> Salvar receita</button>}</article>)}</section>
      </div>
      {authOpen && <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#8C4B3A]/40 p-4"><form onSubmit={submitAuth} className="w-full max-w-md rounded-3xl border-4 border-[#8C4B3A] bg-[#FEFAF0] p-7 shadow-[8px_8px_0px_#E07A5F]"><button type="button" onClick={() => setAuthOpen(false)} className="float-right"><X /></button><h2 className="mb-5 font-title text-3xl">{authMode === "login" ? "ENTRAR" : "CRIAR CONTA"}</h2>{authMode === "signup" && <input required placeholder="Nome" value={authData.nome} onChange={(event) => setAuthData({ ...authData, nome: event.target.value })} className="mb-3 w-full rounded-xl border-2 p-3" />}<input required type="email" placeholder="E-mail" value={authData.email} onChange={(event) => setAuthData({ ...authData, email: event.target.value })} className="mb-3 w-full rounded-xl border-2 p-3" /><input required type="password" placeholder="Senha" value={authData.senha} onChange={(event) => setAuthData({ ...authData, senha: event.target.value })} className="mb-5 w-full rounded-xl border-2 p-3" /><button className="w-full rounded-xl bg-[#E07A5F] py-3 font-bold text-white">{authMode === "login" ? "Entrar" : "Criar conta"}</button><button type="button" onClick={() => setAuthMode(authMode === "login" ? "signup" : "login")} className="mt-4 w-full text-sm underline">{authMode === "login" ? "Ainda não tenho conta" : "Já tenho conta"}</button></form></div>}
    </main>
  );
};

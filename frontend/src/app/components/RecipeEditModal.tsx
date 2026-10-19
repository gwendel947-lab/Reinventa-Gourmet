import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus, Save, Trash2, X } from "lucide-react";
import { RecipeDetails } from "./RecipeDetailsModal";

type RecipeEditModalProps = {
  recipe: RecipeDetails | null;
  isSaving: boolean;
  onSave: (recipe: RecipeDetails, ingredients: Array<{ nome: string; quantidade: number; unidade: string }>) => void;
  onClose: () => void;
};

export const RecipeEditModal = ({ recipe, isSaving, onSave, onClose }: RecipeEditModalProps) => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [servings, setServings] = useState("");
  const [preparation, setPreparation] = useState("");
  const [ingredients, setIngredients] = useState<Array<{ nome: string; quantidade: number; unidade: string }>>([]);

  useEffect(() => {
    if (!recipe) return;
    setTitle(recipe.title);
    setTime(recipe.time);
    setServings(recipe.servings);
    setPreparation(recipe.preparation);
    setIngredients(recipe.ingredients.map((item) => ({
      nome: item.nome ?? item.ingrediente?.nome ?? "",
      quantidade: Number(item.quantidade ?? 1),
      unidade: item.unidade ?? "unidade"
    })));
  }, [recipe]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!recipe) return;
    onSave({ ...recipe, title, time, servings, preparation }, ingredients.filter((item) => item.nome.trim()));
  };

  return (
    <AnimatePresence>
      {recipe && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-[#8C4B3A]/40 backdrop-blur-sm" />
          <motion.form initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} onSubmit={handleSubmit} className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border-4 border-[#8C4B3A] bg-[#FEFAF0] p-6 shadow-[10px_10px_0px_#E07A5F] md:p-8">
            <button type="button" onClick={onClose} aria-label="Fechar edição" className="absolute right-5 top-5 text-[#8C4B3A]/60 hover:text-[#E07A5F]"><X size={26} /></button>
            <h2 className="mb-6 pr-10 font-title text-3xl">EDITAR RECEITA</h2>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="md:col-span-2 font-bold">Título<input value={title} onChange={(event) => setTitle(event.target.value)} className="mt-2 w-full rounded-xl border-2 border-[#8C4B3A]/30 bg-white px-4 py-3 font-normal focus:border-[#E07A5F] focus:outline-none" /></label>
              <div className="font-bold">
                <div className="mb-2 flex items-center justify-between">Ingredientes<button type="button" onClick={() => setIngredients((items) => [...items, { nome: "", quantidade: 1, unidade: "unidade" }])} className="flex items-center gap-1 text-sm text-[#E07A5F]"><Plus size={16} /> Adicionar</button></div>
                <div className="space-y-2">
                  {ingredients.map((item, index) => <div key={index} className="flex gap-2">
                    <input value={item.nome} onChange={(event) => setIngredients((items) => items.map((current, itemIndex) => itemIndex === index ? { ...current, nome: event.target.value } : current))} placeholder="Ingrediente" className="min-w-0 flex-1 rounded-xl border-2 border-[#8C4B3A]/30 bg-white px-3 py-2 font-normal focus:border-[#E07A5F] focus:outline-none" />
                    <input type="number" min="0.01" step="any" value={item.quantidade} onChange={(event) => setIngredients((items) => items.map((current, itemIndex) => itemIndex === index ? { ...current, quantidade: Number(event.target.value) } : current))} className="w-20 rounded-xl border-2 border-[#8C4B3A]/30 bg-white px-2 py-2 font-normal" />
                    <input value={item.unidade} onChange={(event) => setIngredients((items) => items.map((current, itemIndex) => itemIndex === index ? { ...current, unidade: event.target.value } : current))} className="w-24 rounded-xl border-2 border-[#8C4B3A]/30 bg-white px-2 py-2 font-normal" />
                    <button type="button" onClick={() => setIngredients((items) => items.filter((_, itemIndex) => itemIndex !== index))} aria-label="Remover ingrediente" className="text-[#E07A5F]"><Trash2 size={18} /></button>
                  </div>)}
                </div>
              </div>
              <label className="font-bold">Modo de preparo<textarea value={preparation} onChange={(event) => setPreparation(event.target.value)} className="mt-2 h-36 w-full resize-none rounded-xl border-2 border-[#8C4B3A]/30 bg-white px-4 py-3 font-normal focus:border-[#E07A5F] focus:outline-none" /></label>
              <label className="font-bold">Tempo (minutos)<input type="number" min="1" value={time} onChange={(event) => setTime(event.target.value)} className="mt-2 w-full rounded-xl border-2 border-[#8C4B3A]/30 bg-white px-4 py-3 font-normal focus:border-[#E07A5F] focus:outline-none" /></label>
              <label className="font-bold">Porções<input type="number" min="1" value={servings} onChange={(event) => setServings(event.target.value)} className="mt-2 w-full rounded-xl border-2 border-[#8C4B3A]/30 bg-white px-4 py-3 font-normal focus:border-[#E07A5F] focus:outline-none" /></label>
            </div>
            <button type="submit" disabled={isSaving} className="mt-7 flex items-center gap-2 rounded-xl border-2 border-[#8C4B3A] bg-[#E07A5F] px-6 py-3 font-bold text-white shadow-[3px_3px_0px_#8C4B3A] disabled:opacity-60"><Save size={18} /> {isSaving ? "SALVANDO..." : "SALVAR ALTERAÇÕES"}</button>
          </motion.form>
        </div>
      )}
    </AnimatePresence>
  );
};

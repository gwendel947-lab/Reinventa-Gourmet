import { motion, AnimatePresence } from "motion/react";
import { Clock, Flame, Heart, Leaf, Save, Wand2, X } from "lucide-react";
import { RecipeComments } from "./RecipeComments";

export type RecipeIngredient = {
  id?: number;
  ingredienteId?: number;
  quantidade?: number;
  unidade?: string;
  opcional?: boolean;
  nome?: string;
};

export type RecipeDetails = {
  id: number;
  title: string;
  preparation: string;
  time: string;
  servings: string;
  author?: string;
  ingredients: RecipeIngredient[];
  tags?: string[];
  aiTip?: string;
  image?: string;
  authorId?: number;
};

type RecipeDetailsModalProps = {
  recipe: RecipeDetails | null;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  showComments?: boolean;
  onClose: () => void;
};

export const RecipeDetailsModal = ({
  recipe,
  isFavorite = false,
  onToggleFavorite,
  onEdit,
  onDelete,
  showComments = true,
  onClose,
}: RecipeDetailsModalProps) => {
  const formattedTime = /\bmin\b/i.test(recipe?.time ?? "") ? recipe?.time : `${recipe?.time ?? "-"} min`;

  return (
  <AnimatePresence>
    {recipe && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#8C4B3A]/40 backdrop-blur-sm"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="recipe-details-title"
          className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border-4 border-[#8C4B3A] bg-white shadow-[10px_10px_0px_#E07A5F]"
        >
          <button
            onClick={onClose}
            aria-label="Fechar receita"
            className="absolute right-5 top-5 z-20 text-[#FEFAF0]/70 transition-colors hover:text-white"
          >
            <X size={26} />
          </button>

          <div className="relative overflow-hidden bg-[#8C4B3A] p-7 text-[#FEFAF0] md:p-8">
            {recipe.image && <img src={recipe.image} alt="" className="absolute inset-0 z-0 h-full w-full object-cover opacity-65" />}
            <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#6f342b]/95 via-[#8C4B3A]/75 to-[#8C4B3A]/35" />
            <div className="absolute right-0 top-0 z-[2] h-48 w-48 rounded-full bg-[#E07A5F] opacity-30 blur-[60px]" />
            <p className="relative z-10 mb-2 text-sm font-bold uppercase tracking-wider opacity-70">
              {recipe.author ? `Receita de ${recipe.author}` : "Minha receita"}
            </p>
            <h2 id="recipe-details-title" className="relative z-10 pr-8 font-title text-4xl text-white drop-shadow-[2px_2px_0px_#6f342b]">{recipe.title}</h2>
            <div className="relative z-10 mt-4 flex flex-wrap gap-4 text-sm font-bold">
              <span className="flex items-center gap-2 rounded-xl bg-[#FEFAF0]/20 px-4 py-2"><Clock size={17} /> {formattedTime}</span>
              <span className="flex items-center gap-2 rounded-xl bg-[#FEFAF0]/20 px-4 py-2"><Flame size={17} /> {recipe.servings} porções</span>
            </div>
          </div>

          <div className="space-y-7 p-7 text-lg text-[#8C4B3A] md:p-8">
            {recipe.tags && recipe.tags.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {recipe.tags.map((tag) => <span key={tag} className="flex items-center gap-2 rounded-full border-2 border-[#8C4B3A]/20 bg-[#F2CC8F]/30 px-4 py-1 text-sm font-bold"><Leaf size={16} /> {tag}</span>)}
              </div>
            )}

            {recipe.aiTip && (
              <div className="rounded-r-2xl border-l-4 border-[#E07A5F] bg-[#E07A5F]/10 p-5">
                <strong className="mb-2 flex items-center gap-2 font-title text-xl text-[#E07A5F]"><Wand2 size={22} /> Dica da I.A.</strong>
                <p>{recipe.aiTip}</p>
              </div>
            )}

            <div className="grid gap-10 md:grid-cols-2">
              <section>
                <h3 className="mb-5 border-b-2 border-dashed border-[#8C4B3A]/20 pb-4 font-title text-2xl">Ingredientes</h3>
                <ul className="space-y-4">
                {recipe.ingredients.map((item, index) => (
                  <li key={`${item.ingredienteId ?? item.id ?? item.nome}-${index}`} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#E07A5F]" />
                    {item.nome ?? item.ingrediente?.nome ?? "Ingrediente"}
                    {item.opcional ? " (opcional)" : ""}
                  </li>
                ))}
                </ul>
              </section>
              <section>
                <h3 className="mb-5 border-b-2 border-dashed border-[#8C4B3A]/20 pb-4 font-title text-2xl">Modo de Preparo</h3>
                <ol className="space-y-5">
                  {recipe.preparation.split(/\n+/).filter(Boolean).map((step, index) => <li key={`${step}-${index}`} className="flex gap-4"><span className="font-title text-2xl text-[#F2CC8F] drop-shadow-[1px_1px_0px_#8C4B3A]">{index + 1}</span><span className="pt-1">{step}</span></li>)}
                </ol>
              </section>
            </div>

            {showComments && <RecipeComments recipeId={recipe.id} authorId={recipe.authorId} />}

            <div className="flex flex-wrap justify-end gap-3 border-t-2 border-dashed border-[#8C4B3A]/20 pt-6">
              {onEdit && <button onClick={onEdit} className="flex items-center gap-2 rounded-xl border-2 border-[#8C4B3A] px-5 py-3 font-bold transition-colors hover:bg-[#F2CC8F]"><Save size={18} /> Editar receita</button>}
              {onDelete && <button onClick={onDelete} className="rounded-xl border-2 border-[#8C4B3A] px-5 py-3 font-bold text-[#E07A5F] transition-colors hover:bg-[#E07A5F] hover:text-white">Excluir receita</button>}
              {onToggleFavorite && <button onClick={onToggleFavorite} className={`flex items-center gap-2 rounded-xl border-2 border-[#8C4B3A] px-5 py-3 font-bold shadow-[3px_3px_0px_#8C4B3A] transition-colors ${isFavorite ? "bg-[#E07A5F] text-white" : "bg-[#F2CC8F] text-[#8C4B3A] hover:bg-[#E07A5F] hover:text-white"}`}><Heart size={20} fill={isFavorite ? "currentColor" : "none"} />{isFavorite ? "Remover dos favoritos" : "Salvar receita"}</button>}
            </div>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
  );
};

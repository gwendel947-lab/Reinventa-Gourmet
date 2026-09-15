import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Minus, Plus, X } from "lucide-react";

export const AvatarCropModal = ({ image, onSave, onClose }: { image: string | null; onSave: (image: string) => void; onClose: () => void }) => {
  const [scale, setScale] = useState(1);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [imageElement, setImageElement] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    if (!image) return;
    const element = new Image();
    element.onload = () => setImageElement(element);
    element.src = image;
  }, [image]);

  const saveCrop = () => {
    if (!imageElement) return;
    const canvas = document.createElement("canvas");
    canvas.width = 640;
    canvas.height = 640;
    const context = canvas.getContext("2d");
    if (!context) return;
    context.fillStyle = "#F2CC8F";
    context.fillRect(0, 0, 640, 640);
    const baseScale = Math.max(640 / imageElement.width, 640 / imageElement.height) * scale;
    const width = imageElement.width * baseScale;
    const height = imageElement.height * baseScale;
    context.drawImage(imageElement, (640 - width) / 2 + offsetX, (640 - height) / 2 + offsetY, width, height);
    onSave(canvas.toDataURL("image/jpeg", 0.84));
  };

  return (
    <AnimatePresence>
      {image && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-[#8C4B3A]/50 backdrop-blur-sm" />
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative z-10 w-full max-w-md rounded-3xl border-4 border-[#8C4B3A] bg-[#FEFAF0] p-6 shadow-[10px_10px_0px_#E07A5F]">
            <button type="button" onClick={onClose} aria-label="Fechar recorte" className="absolute right-4 top-4 text-[#8C4B3A]/60 hover:text-[#E07A5F]"><X size={24} /></button>
            <h2 className="mb-5 pr-8 font-title text-2xl">AJUSTAR FOTO</h2>
            <div className="mx-auto h-64 w-64 overflow-hidden rounded-full border-4 border-[#8C4B3A] bg-[#F2CC8F]">
              <img src={image} alt="Prévia da foto de perfil" className="h-full w-full object-cover" style={{ transform: `translate(${offsetX / 2}px, ${offsetY / 2}px) scale(${scale})` }} />
            </div>
            <div className="mt-6 space-y-4">
              <label className="flex items-center gap-3 font-bold"><Minus size={18} /><input type="range" min="1" max="2.5" step="0.05" value={scale} onChange={(event) => setScale(Number(event.target.value))} className="w-full accent-[#E07A5F]" /><Plus size={18} /></label>
              <label className="block text-sm font-bold">Horizontal<input type="range" min="-160" max="160" value={offsetX} onChange={(event) => setOffsetX(Number(event.target.value))} className="w-full accent-[#E07A5F]" /></label>
              <label className="block text-sm font-bold">Vertical<input type="range" min="-160" max="160" value={offsetY} onChange={(event) => setOffsetY(Number(event.target.value))} className="w-full accent-[#E07A5F]" /></label>
            </div>
            <button type="button" onClick={saveCrop} disabled={!imageElement} className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-[#8C4B3A] bg-[#E07A5F] px-5 py-3 font-bold text-white shadow-[3px_3px_0px_#8C4B3A] disabled:opacity-60"><Check size={18} /> SALVAR FOTO</button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

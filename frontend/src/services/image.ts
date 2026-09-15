export const readImageAsDataUrl = (file: File, maxSize = 900): Promise<string> => new Promise((resolve, reject) => {
  if (!file.type.startsWith("image/")) {
    reject(new Error("Selecione um arquivo de imagem."));
    return;
  }

  const reader = new FileReader();
  reader.onerror = () => reject(new Error("Não foi possível ler a imagem."));
  reader.onload = () => {
    const image = new Image();
    image.onerror = () => reject(new Error("Não foi possível processar a imagem."));
    image.onload = () => {
      const scale = Math.min(1, maxSize / Math.max(image.width, image.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(image.width * scale));
      canvas.height = Math.max(1, Math.round(image.height * scale));
      canvas.getContext("2d")?.drawImage(image, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL("image/jpeg", 0.82));
    };
    image.src = String(reader.result);
  };
  reader.readAsDataURL(file);
});

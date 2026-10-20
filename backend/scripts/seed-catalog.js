import { readFile } from "node:fs/promises";
import { prisma } from "../src/config/prisma.js";

try {
  const catalog = JSON.parse(await readFile(new URL("../data/catalogo-inicial.json", import.meta.url), "utf8"));
  for (const item of catalog) {
    await prisma.ingrediente.upsert({ where: { nome: item.nome }, update: {}, create: item });
  }
  console.log("Catálogo carregado; registros existentes foram preservados.");
} finally { await prisma.$disconnect(); }

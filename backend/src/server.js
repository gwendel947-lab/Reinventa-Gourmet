import app from "./app.js";
import { prisma } from "./config/prisma.js";

const PORT = process.env.PORT || 3000;

async function main() {
  try {
    await prisma.$connect();
    console.log("Conexão bem-sucedida com o banco de dados!");
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
    process.exit(1);
  }
}

process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit(0);
});

main();

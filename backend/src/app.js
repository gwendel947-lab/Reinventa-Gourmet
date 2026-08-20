import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
import ingredienteRoutes from "./routes/ingrediente.routes.js";
import inventarioRoutes from "./routes/inventario.routes.js";
import receitaRoutes from "./routes/receita.routes.js";
import comunidadeRoutes from "./routes/comunidade.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/users", userRoutes);
app.use("/ingredientes", ingredienteRoutes);
app.use("/inventario", inventarioRoutes);
app.use("/receitas", receitaRoutes);
app.use("/comunidade", comunidadeRoutes);

app.get("/", (req, res) => {
  return res.json({
    message: "API Reinventa Gourmet funcionando!"
  });
});

app.use((req, res) => {
  res.status(404).json({
    erro: "Rota não encontrada",
    metodo: req.method,
    url: req.url
  });
});

export default app;

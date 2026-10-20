import express from "express";
import ReceitaController from "../controllers/receita.controller.js";
import { findSuggestions } from "../controllers/sugestao.controller.js";
import { generateRecipe, saveGeneration, generationStatus } from "../controllers/geracao.controller.js";
import { authMiddleware, optionalAuthMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", authMiddleware, ReceitaController.create);
router.post("/sugestoes", authMiddleware, findSuggestions);
router.post("/gerar", authMiddleware, generateRecipe);
router.get("/geracao/status", authMiddleware, generationStatus);
router.post("/geracoes/:id/salvar", authMiddleware, saveGeneration);
router.get("/", optionalAuthMiddleware, ReceitaController.list);
router.put("/:id", authMiddleware, ReceitaController.update);
router.delete("/:id", authMiddleware, ReceitaController.remove);
router.get("/:id", optionalAuthMiddleware, ReceitaController.getById);

export default router;

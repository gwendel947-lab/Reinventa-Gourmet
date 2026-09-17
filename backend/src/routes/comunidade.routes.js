import express from "express";
import ComunidadeController from "../controllers/comunidade.controller.js";
import { authMiddleware, optionalAuthMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/feed", optionalAuthMiddleware, ComunidadeController.listFeed);
router.get("/receitas/:receitaId/comentarios", optionalAuthMiddleware, ComunidadeController.listComments);
router.post("/receitas/:receitaId/comentarios", authMiddleware, ComunidadeController.createComment);
router.post("/feed", authMiddleware, ComunidadeController.createPost);

export default router;

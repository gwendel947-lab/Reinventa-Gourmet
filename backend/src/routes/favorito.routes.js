import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { addFavorite, listFavorites, removeFavorite } from "../controllers/favorito.controller.js";

const router = express.Router();
router.use(authMiddleware);
router.get("/", listFavorites);
router.put("/:receitaId", addFavorite);
router.delete("/:receitaId", removeFavorite);

export default router;

import express from "express";
import ReceitaController from "../controllers/receita.controller.js";
import { authMiddleware, optionalAuthMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", authMiddleware, ReceitaController.create);
router.get("/", optionalAuthMiddleware, ReceitaController.list);
router.put("/:id", authMiddleware, ReceitaController.update);
router.delete("/:id", authMiddleware, ReceitaController.remove);
router.get("/:id", optionalAuthMiddleware, ReceitaController.getById);

export default router;

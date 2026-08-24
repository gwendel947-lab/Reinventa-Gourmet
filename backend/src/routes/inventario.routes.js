import express from "express";
import InventarioController from "../controllers/inventario.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();
router.use(authMiddleware);

router.post("/", InventarioController.create);
router.get("/usuario/:usuarioId", InventarioController.listByUsuario);
router.delete("/usuario/:usuarioId/ingrediente/:ingredienteId", InventarioController.remove);

export default router;

import express from "express";
import InventarioController from "../controllers/inventario.controller.js";

const router = express.Router();

router.post("/", InventarioController.create);
router.get("/usuario/:usuarioId", InventarioController.listByUsuario);

export default router;

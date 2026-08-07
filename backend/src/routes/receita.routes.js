import express from "express";
import ReceitaController from "../controllers/receita.controller.js";

const router = express.Router();

router.post("/", ReceitaController.create);
router.get("/", ReceitaController.list);
router.get("/:id", ReceitaController.getById);

export default router;

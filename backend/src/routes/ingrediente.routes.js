import express from "express";
import IngredienteController from "../controllers/ingrediente.controller.js";

const router = express.Router();

router.post("/", IngredienteController.create);
router.get("/", IngredienteController.list);

export default router;

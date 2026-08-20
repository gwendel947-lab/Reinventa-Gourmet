import express from "express";
import ComunidadeController from "../controllers/comunidade.controller.js";

const router = express.Router();

router.get("/feed", ComunidadeController.listFeed);
router.post("/feed", ComunidadeController.createPost);

export default router;

import express from 'express';
import { createArticle, getAllArticles, getArticlesByUsername, updateArticleById, deleteArticleById } from '../controllers/Article.js';

const router = express.Router();

router.post("/create", createArticle);
router.get("/", getAllArticles);
router.get("/:username", getArticlesByUsername);
router.put("/:id", updateArticleById);
router.delete("/delete/:id", deleteArticleById);

export default router;

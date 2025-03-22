import express from 'express';
import { createVideo, getAllVideos, getVideosByUsername, updateVideoById, deleteVideoById } from '../controllers/Video.js';

const router = express.Router();

router.post("/create", createVideo);
router.get("/", getAllVideos);
router.get("/:username", getVideosByUsername);
router.put("/:id", updateVideoById);
router.delete("/delete/:id", deleteVideoById);

export default router;

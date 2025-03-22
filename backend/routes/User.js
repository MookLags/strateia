import express from 'express';
import { createUser, getAllUsers, getUserById, deleteUserById } from '../controllers/User.js';

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/create", createUser);
router.delete("/delete/:id", deleteUserById);

export default router;

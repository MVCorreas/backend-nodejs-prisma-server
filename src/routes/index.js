import express from "express";
import authRouter from "./authRouter.js";
import todoRouter from "./todoRouter.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/todos", authMiddleware, todoRouter);

export default router;

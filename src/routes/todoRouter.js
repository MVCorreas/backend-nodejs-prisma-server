import express from "express";
import getTodos from "../controllers/getTodos.js";
import createTodo from "../controllers/createTodo.js";

const router = express.Router();

router.get("/", getTodos);
router.post("/", createTodo);

export default router;

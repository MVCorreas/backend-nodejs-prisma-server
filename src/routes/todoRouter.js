import express from "express";
import getTodos from "../controllers/getTodos.js";
import createTodo from "../controllers/createTodo.js";
import updateTodo from "../controllers/updateTodo.js";
import deleteTodo from "../controllers/deleteTodo.js";

const router = express.Router();

router.get("/", getTodos);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;

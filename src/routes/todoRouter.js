import express from "express";
import getTodos from "../controllers/getTodos.js";
import createTodo from "../controllers/createTodo.js";
import updateTodo from "../controllers/updateTodo.js";

const router = express.Router();

router.get("/", getTodos);
router.post("/", createTodo);
router.put("/:id", updateTodo);

export default router;

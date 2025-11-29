import { prisma } from "../lib/prisma.js";

const createTodo = async (req, res) => {
  const { task } = req.body;

  const createdTodo = await prisma.todo.create({
    data: {
      task: task,
      userId: req.userId,
    },
  });

  res.json(createdTodo);
};

export default createTodo;

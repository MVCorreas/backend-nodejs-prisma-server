import { prisma } from "../lib/prisma.js";

const updateTodo = async (req, res) => {
  const { completed } = req.body;
  const { id } = req.params;

  const updatedTodo = await prisma.todo.update({
    where: {
      id: parseInt(id),
      userId: req.userId,
    },
    data: {
      completed: !!completed, //converts to boolean
    },
  });

  res.json(updatedTodo);
};

export default updateTodo;

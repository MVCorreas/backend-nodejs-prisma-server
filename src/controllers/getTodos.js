import { prisma } from "../lib/prisma.js";

const getTodos = async (req, res) => {
  const todos = await prisma.todo.findMany({
    where: {
      userId: req.userId,
    },
  });

  res.json(todos);
};

export default getTodos;

import { prisma } from "../lib/prisma";

const deleteTodo = async (req, res) => {
  const { id } = req.params;

  await prisma.todo.delete({
    where: {
      id: parseInt(id),
      userId: req.userId,
    },
  });

  res.json({
    message: "Todo deleted successfully",
  });
};

export default deleteTodo;

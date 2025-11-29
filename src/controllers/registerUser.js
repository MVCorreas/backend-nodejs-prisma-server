import bcrypt from "bcryptjs"; //passwords are encrypted for security. This is irreversible, if we want to compare a user when logging to the user in the database, basically we encrypt the password again using the same algorithm which will return the same output
import jwt from "jsonwebtoken";
import { Prisma } from "@prisma/client/extension";

const registerUser = async (req, res) => {
  const { username, password } = req.body;
  console.log('body', username, password);
  

  const hashedPassword = bcrypt.hashSync(password, 8);

  try {
    if (!username || !password) {
      return res.status(400).json({
        message: "Username and password fields are required",
      });
    }
    const user = await Prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });
    const defaultTodo = "Hello :) This is my first todo";
    //Insert todo and associate it to user
    await Prisma.todo.create({
      data: {
        task: defaultTodo,
        userId: user.id,
      },
    });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    res.json({ token });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({
      error: "Server error while creating user",
      details: error.message,
    });
  }
};

export default registerUser;

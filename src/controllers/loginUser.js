import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma.js";

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      return res.status(400).json({
        message: "Username and password fields are required",
      });
    }
    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    //Bcrytp compare fx that returns a boolean, and compares the password entered with the one in the db. It creates the hashing again
    const isValidPassword = bcrypt.compareSync(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({
        message: "Password is not valid",
      });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    res.json({ token });
  } catch (error) {
    console.error("Error logging user:", error);
    res.status(500).json({
      error: "Server error while logging user",
      details: error.message,
    });
  }

  res.status(200);
};

export default loginUser;

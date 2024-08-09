import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import prisma from "../prisma";
import admin from "../firebase";
import bcrypt from "bcrypt";

export const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  if (!email || !password) {
    return res.status(400).json({ message: "Email and Password are required" });
  }

  try {
    const client = { email, password };
    const userCredential = await admin.auth().createUser(client);
    const uid = userCredential.uid;

    const user = await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: hashedPassword,
        uid: uid,
      },
    });
    return res.status(201).json({ message: "User has been created" });
  } catch (error) {
    res.status(400).json({ message: "Error creating user", error });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "username and Password are required" });
  }
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const userAuth = admin.auth().getUserByEmail(email);
    const auth = (await userAuth).uid;

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(auth, `${Date.now()}`);
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: true,
          maxAge: 7 * 86400,
          sameSite: "none",
        })
        .status(200)
        .json({ message: "User logged in" });
    }
  } catch (error) {
    return res.status(401).json({ message: "Erro logging in", error });
  }
};

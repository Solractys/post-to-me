import { Request, Response } from "express";
import prisma from "../prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import admin from "../firebase";

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  if (!email || !password) {
    return res.status(400).json({ message: "Email and Password are required" });
  }

  try {
    let client = { email, password };
    const  userCredential = await admin.auth().createUser(client);
    const uid = userCredential.uid;
    
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        uid: uid,
      },
    });
    return res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: 'Error creating user', error });
  }

}

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "username and Password are required" });
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(user.uid , 'your_jwt_secret');
      return res.status(200).json({ message: "Logado", token });
    }
  } catch (error) {
    return res.status(401).json({ message: "Erro logging in", error });
  }
}

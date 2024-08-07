import { Request, Response, NextFunction } from "express";
import admin from "../firebase";
import jwt from "jsonwebtoken";

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
  try {
    const validation = jwt.decode(token);
    const decodedToken = await admin.auth().getUser(validation!.toString());
    if (!decodedToken) {
      res.status(401).json({ message: "Unauthorized" });
    }
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized", error });
  }
};

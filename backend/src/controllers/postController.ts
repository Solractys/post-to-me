import { Response, Request } from "express";
import prisma from "../prisma";
import jwt from "jsonwebtoken";

export const createPost = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization!.split(" ")[1];
    const uid = jwt.decode(token)!.toString();
    const user = await prisma.user.findFirst({
      where: {
        uid,
      },
    });
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const userid = user.id;
    const { title, content } = req.body;
    const createdAt = Date.now().toString();
    const post = await prisma.post.create({
      data: {
        title: title,
        content: content,
        authorName: user.username,
      },
    });
    return res.status(201).json(post);
  } catch (error) {
    return res.status(400).json({ message: "Error creating post", error });
  }
};

export const editPost = async (req: Request, res: Response) => {
  const { title, content } = req.body;
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "Invalid post ID" });
  }
  const token = req.headers.authorization!.split(" ")[1];
  const compareToken = jwt.decode(token)!.toString();
  const user = await prisma.user.findFirst({
    where: {
      uid: compareToken,
    },
  });
  // Remove the declaration of the 'userid' variable
  try {
    const post = await prisma.post.findFirst({
      where: {
        id: parseInt(id),
      },
    });
    if (post?.authorName !== user?.id) {
      return res
        .status(403)
        .json({ message: "You are not author of this post." });
    }
    const updatedPost = await prisma.post.update({
      where: {
        id: parseInt(id),
      },
      data: {
        title: title,
        content: content,
      },
    });
    return res.status(200).json(updatedPost);
  } catch (error) {
    return res.status(400).json({ message: "Error updating post", error });
  }
};
export const listPosts = async (req: Request, res: Response) => {
  try {
    const { order = "desc", userOnly = "false" } = req.query;

    const token = req.headers.authorization!.split(" ")[1];
    const compareToken = jwt.decode(token)!.toString();
    const user = await prisma.user.findFirst({
      where: {
        uid: compareToken,
      },
    });
    const posts = await prisma.post.findMany({
      where: userOnly === "true" ? { authorName: user?.username } : {},
      orderBy: {
        createdAt: order === "asc" ? "asc" : "desc",
      },
    });
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(400).json({ message: "Error fetching posts", error });
  }
};
export const getPostId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const post = await prisma.post.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    return res.status(200).json(post);
  } catch (error) {
    return res.status(400).json({ message: "Error fetching post", error });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization!.split(" ")[1];
    const compareToken = jwt.decode(token)!.toString();
    const user = await prisma.user.findFirst({
      where: {
        uid: compareToken,
      },
    });
    const userid = user?.id;

    const { id } = req.params;
    const post = await prisma.post.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (post?.authorName !== userid) {
      return res
        .status(400)
        .json({ message: "You're not authos of this post" });
    }
    await prisma.post.delete({
      where: {
        id: parseInt(id),
      },
    });
    return res.status(204).send();
  } catch (error) {
    return res.status(400).json({ message: "Error deleting post", error });
  }
};

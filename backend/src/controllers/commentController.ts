import { Response, Request } from "express";
import prisma from "../prisma";
import jwt from "jsonwebtoken";

export const createComment = async (req: Request, res: Response) => {
  try {
    const { content, postId } = req.body;
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
    const comment = await prisma.comment.create({
      data: {
        content: content,
        postId: postId,
        authorName: user.username,
      },
    });
    return res.status(201).json(comment);
  } catch (error) {
    return res.status(400).json({ message: "Error creating comment", error });
  }
};
export const editComment = async (req: Request, res: Response) => {
  const { content, id } = req.body;
  const token = req.headers.authorization!.split(" ")[1];
  const uid = jwt.decode(token)!.toString();
  const user = await prisma.user.findFirst({
    where: {
      uid,
    },
  });
  if (!user) {
    return res.status(400).json({ message: "Invalid user" });
  }
  const comment = await prisma.comment.findFirst({
    where: {
      id: parseInt(id),
    },
  });
  if (comment?.authorName !== user.username) {
    return res
      .status(403)
      .json({ message: "You are not author of this comment." });
  }
  const updatedComment = await prisma.comment.update({
    where: {
      id: parseInt(id),
    },
    data: {
      content: content,
    },
  });
  return res.status(200).json(updatedComment);
};

export const listComments = async (req: Request, res: Response) => {
  const { postId } = req.body;
  if (!postId) {
    return res.status(400).json({ message: "Invalid post ID" });
  }
  const comments = await prisma.comment.findMany({
    where: {
      postId: parseInt(postId.toString()),
    },
  });
  return res.status(200).json(comments);
};

export const deleteComment = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "Invalid comment ID" });
  }
  const token = req.headers.authorization!.split(" ")[1];
  const uid = jwt.decode(token)!.toString();
  const user = await prisma.user.findFirst({
    where: {
      uid,
    },
  });
  if (!user) {
    return res.status(400).json({ message: "Invalid user" });
  }
  const comment = await prisma.comment.findFirst({
    where: {
      id: parseInt(id),
    },
  });
  if (comment?.authorName !== user.username) {
    return res
      .status(403)
      .json({ message: "You are not author of this comment." });
  }
  await prisma.comment.delete({
    where: {
      id: parseInt(id),
    },
  });
  return res.status(204).send();
};

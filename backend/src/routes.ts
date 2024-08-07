import { Router } from "express";
import { login, register } from "./controllers/authController";
import {
  createPost,
  deletePost,
  editPost,
  getPostId,
  listPosts,
} from "./controllers/postController";
import { authenticate } from "./middleware/authMiddleware";
import {
  createComment,
  editComment,
  listComments,
  deleteComment,
} from "./controllers/commentController";

const router = Router();

router.post("/register", register);
router.post("/login", login);

router.post("/posts", authenticate, createPost);
router.put("/posts/:id", authenticate, editPost);
router.get("/posts", authenticate, listPosts);
router.get("/posts/:id", authenticate, getPostId);
router.delete("/posts/:id", authenticate, deletePost);

router.post("/comments", authenticate, createComment);
router.put("/comments", authenticate, editComment);
router.get("/comments", authenticate, listComments);
router.delete("/comments/:id", authenticate, deleteComment);

export default router;

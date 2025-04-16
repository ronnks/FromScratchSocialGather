import express from "express";
import {
  createAPost,
  deletePost,
  getAllPosts,
  updatePost,
} from "../controllers/postController.js";
import userAuth from "../middleware/UserAuth.js";

const postRouter = express.Router();

postRouter.get("/my-feed", userAuth, getAllPosts);
postRouter.post("/make-a-post", userAuth, createAPost);
postRouter.put("/edit-post/:id", userAuth, updatePost);
postRouter.delete("/delete-post/:id", userAuth, deletePost);

export default postRouter;

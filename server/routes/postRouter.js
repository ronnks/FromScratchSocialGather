import express from "express";
import {
  commentOnAPost,
  createAPost,
  deletePost,
  getAllPosts,
  likeAPost,
  shareAPost,
  updatePost,
} from "../controllers/postController.js";

const postRouter = express.Router();

postRouter.get("/my-feed", getAllPosts);
postRouter.post("/make-a-post", createAPost);
postRouter.put("/edit-post", updatePost);
postRouter.delete("/delete-post", deletePost);
postRouter.post("/like-a-post", likeAPost);
postRouter.post("/comment-on-a-post", commentOnAPost);
postRouter.post("/share-a-post", shareAPost);

export default postRouter;

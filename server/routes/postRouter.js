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
import userAuth from "../middleware/UserAuth.js";

const postRouter = express.Router();

postRouter.get("/my-feed", userAuth, getAllPosts);
postRouter.post("/make-a-post", userAuth, createAPost);
postRouter.put("/edit-post", userAuth, updatePost);
postRouter.delete("/delete-post", userAuth, deletePost);
postRouter.post("/like-a-post", userAuth, likeAPost);
postRouter.post("/comment-on-a-post", userAuth, commentOnAPost);
postRouter.post("/share-a-post", userAuth, shareAPost);

export default postRouter;

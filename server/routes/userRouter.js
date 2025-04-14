import express from "express";
import {
  login,
  register,
  logout,
  getUser,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/login", login);
userRouter.post("/register", register);
userRouter.post("/logout", logout);
userRouter.get("/get-user-data", getUser);

export default userRouter;

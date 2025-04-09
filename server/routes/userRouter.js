import express from "express";
import { login, register, logout } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/login", login);
userRouter.post("/register", register);
userRouter.post("/logout", logout);

export default userRouter;

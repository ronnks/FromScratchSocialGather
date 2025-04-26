import express from "express";
import { getUser } from "../controllers/userController.js";
import userAuth from "../middleware/UserAuth.js";

const userRouter = express.Router();

userRouter.get("/get-user-data", userAuth, getUser);

export default userRouter;

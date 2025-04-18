import express from "express";
import { getUser } from "../controllers/userController";
import userAuth from "../middleware/UserAuth";

const userRouter = express.Router();

userRouter.get("/get-user-data", userAuth, getUser);

export default userRouter;

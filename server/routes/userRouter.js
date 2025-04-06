import express from "express";
import { login, register, logout } from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.post("/login", login);
authRouter.post("/register", register);
//authRouter.put("/resetpassword", resetpassword);
authRouter.post("/logout", logout);
//authRouter.get("/user", user);
//authRouter.get("/verify", verify);
//authRouter.get("/verifyemail/:token", verifyemailWithToken);
//authRouter.get("/verifyemail", verifyemail);

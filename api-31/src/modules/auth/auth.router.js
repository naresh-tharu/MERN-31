import express, { Router } from "express";
import authCtrl from "./auth.controller.js";
const authRouter = Router();

authRouter.post("/register", authCtrl.register);
authRouter.post("/activate/:token");
authRouter.post("/login");
authRouter.get("/me");
authRouter.post("/forget-password");
authRouter.post("/reset-password/:token");
authRouter.delete("/logout");

export default authRouter;

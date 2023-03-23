import express from "express";

import { signIn, signUp } from "../controllers/users.controller.js";

const userRoutes = express.Router();

userRoutes.post('/signup',signUp);
userRoutes.post('/signin',signIn);

export default userRoutes;
import express from "express";

import { getPosts, getPost, getPostsBySearch, createPost, updatePost, deletePost, likePost } from "./posts.controller.js";
import auth from "../../middleware/auth.js";

const postRoutes = express.Router();

postRoutes.get("/", getPosts);
postRoutes.get("/:id", getPost);
postRoutes.get("/search", getPostsBySearch);
postRoutes.post("/", auth, createPost);
postRoutes.patch("/:id", auth, updatePost);
postRoutes.delete("/:id", auth, deletePost);
postRoutes.patch("/:id/likePost", auth, likePost);

export default postRoutes;

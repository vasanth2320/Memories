import express from 'express';

import { getPosts, createPost } from '../contollers/posts.js';

const postRoutes = express.Router();

postRoutes.get('/', getPosts);
postRoutes.post('/', createPost);

export default postRoutes;
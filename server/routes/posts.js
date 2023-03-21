import express from 'express';

import { getPosts, createPost, updatePost } from '../contollers/posts.js';

const postRoutes = express.Router();

postRoutes.get('/', getPosts);
postRoutes.post('/', createPost);
postRoutes.patch('/:id', updatePost)

export default postRoutes;
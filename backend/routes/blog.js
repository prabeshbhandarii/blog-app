import { Router } from "express";
import { createBlog, getBlog, getBlogs, likeBlog } from "../controllers/BlogController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const blogRouter = Router()

blogRouter.post('/', authMiddleware, createBlog)

blogRouter.post('/:postId/like', authMiddleware, likeBlog)

blogRouter.get('/', getBlogs)

blogRouter.get('/:postId', getBlog)

export default blogRouter
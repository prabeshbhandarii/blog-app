import { Router } from "express";
import { createBlog, getBlog, getBlogs, likeBlog } from "../controllers/BlogController.js";
import { authMiddleware } from "../middlewares/auth/authMiddleware.js";
import { blogMiddleware } from "../middlewares/blog/blogMiddleware.js";

const blogRouter = Router()

blogRouter.post('/', authMiddleware, blogMiddleware, createBlog)

blogRouter.post('/:postId/like', authMiddleware, likeBlog)

blogRouter.get('/', getBlogs)

blogRouter.get('/:postId', getBlog)

export default blogRouter
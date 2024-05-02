import { Router } from "express";
import { createBlog, likeBlog } from "../controllers/BlogController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const blogRouter = Router()

blogRouter.get('/', (req, res)=>{
    res.send("hello world")
})

blogRouter.post('/', authMiddleware, createBlog)

blogRouter.post('/:postId/like', authMiddleware, likeBlog)

export default blogRouter
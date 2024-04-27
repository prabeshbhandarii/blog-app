import { Router } from "express";

const blogRouter = Router()

blogRouter.get('/', (req, res)=>{
    res.send("hello world")
})

export default blogRouter
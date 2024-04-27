import { Router } from "express";
import { createUser } from "../controllers/UserController.js";

const userRouter = Router()

userRouter.get('/', (req, res)=>{
    res.send("hello world")
})

userRouter.post('/signup', createUser)

export default userRouter
import { Router } from "express";
import { createUser, followUser, loginUser } from "../controllers/UserController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const userRouter = Router()

userRouter.get('/', (req, res)=>{
    res.send("healthy server")
})

userRouter.post('/signup', createUser)

userRouter.post('/signin', loginUser)

userRouter.post('/follow/:userId', authMiddleware, followUser)

export default userRouter
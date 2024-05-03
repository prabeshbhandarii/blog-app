import { Router } from "express";
import { createUser, followUser, loginUser } from "../controllers/UserController.js";
import { authMiddleware } from "../middlewares/auth/authMiddleware.js";
import { signupMiddleware } from "../middlewares/user/signupMiddleware.js"

const userRouter = Router()

userRouter.get('/', (req, res)=>{
    res.send("healthy server")
})

userRouter.post('/signup', signupMiddleware, createUser)

userRouter.post('/signin', loginUser)

userRouter.post('/follow/:userId', authMiddleware, followUser)

export default userRouter
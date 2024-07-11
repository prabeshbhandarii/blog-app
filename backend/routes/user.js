import { Router } from "express";
import { createUser, editProfile, followUser, loginUser, showProfile } from "../controllers/UserController.js";
import { authMiddleware } from "../middlewares/auth/authMiddleware.js";
import { signupMiddleware } from "../middlewares/user/signupMiddleware.js"



const userRouter = Router()

userRouter.get('/', (req, res)=>{
    res.send("healthy server")
})

userRouter.post('/signup', signupMiddleware, createUser)

userRouter.post('/signin', loginUser)

userRouter.post('/follow/:userId', authMiddleware, followUser)

userRouter.get('/profile', authMiddleware, showProfile)

userRouter.put('/profile', authMiddleware, editProfile)


export default userRouter
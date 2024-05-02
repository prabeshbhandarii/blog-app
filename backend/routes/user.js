import { Router } from "express";
import { createUser, loginUser } from "../controllers/UserController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const userRouter = Router()

userRouter.get('/', (req, res)=>{
    res.send("healthy server")
})

userRouter.post('/signup', createUser)

userRouter.post('/signin', loginUser)

export default userRouter
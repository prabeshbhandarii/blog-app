import express from "express"
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser'
import cors from 'cors'
import blogRouter from './routes/blog.js'
import userRouter from "./routes/user.js"

const app  = express()
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}))

app.use(express.json())

app.use('/blog', blogRouter)

app.use('/user', userRouter)


const PORT = 3000
app.listen(PORT, ()=>{
    console.log("server running on port " + PORT)
})
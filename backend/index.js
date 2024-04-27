import express from "express"
import blogRouter from './routes/blog.js'
import userRouter from "./routes/user.js"

const app  = express()

app.use(express.json())

app.use('/blog', blogRouter)

app.use('/user', userRouter)


const PORT = 3000
app.listen(PORT, ()=>{
    console.log("server running on port " + PORT)
})
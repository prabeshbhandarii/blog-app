import mongoose from 'mongoose'
import { z } from 'zod'


const blogSchema = z.object({
    title: z.string().min(5).max(50),
    body: z.string().min(10).max(250),
    author: z.instanceof(mongoose.Types.ObjectId),
    image: z.string()
})

export const blogMiddleware = (req, res, next)=> {
    try {
        const author = req.headers['authorName']
        const id = req.headers['userId']
        req.body.author = new mongoose.Types.ObjectId(id)
        const { success } = blogSchema.safeParse(req.body)
        if(success){
            next()
        }else{
            return res.status(411).json({
                msg: 'invalid input broskii'
            })
        }
    } catch (err) {
        return res.json({
            msg: err.message
        })
    }
}
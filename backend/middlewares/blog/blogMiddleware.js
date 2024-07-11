import mongoose from 'mongoose'
import { z } from 'zod'


const blogSchema = z.object({
    title: z.string().min(5).max(50),
    body: z.string().min(10).max(250),
    author: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid ObjectId'),
    imageurl: z.string().url()
})

export const blogMiddleware = (req, res, next)=> {
    try {
        const id = req.headers['userId']
        req.body.author = id
        const { success, error } = blogSchema.safeParse(req.body)
        if(success){
            next()
        }else{
            return res.status(411).json({
                msg: error.message
            })
        }
    } catch (err) {
        return res.status(500).json({
            msg: err.message
        })
    }
}
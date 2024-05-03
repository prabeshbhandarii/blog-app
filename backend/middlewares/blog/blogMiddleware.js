import { z } from 'zod'


const blogSchema = z.object({
    title: z.string().min(10).max(50),
    body: z.string().min(20).max(250)
})

export const blogMiddleware = (req, res, next)=> {
    try {
        const { success } = blogSchema.safeParse(req.body)
        if(success){
            next()
        }else{
            return res.status(411).json({
                msg: 'invalid input'
            })
        }
    } catch (err) {
        return res.json({
            msg: err.message
        })
    }
}
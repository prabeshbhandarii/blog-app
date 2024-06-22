import { z } from 'zod'

const signupSchema = z.object({
    username: z.string().min(3).max(20),
    email: z.string().email(),
    password: z.string().min(6)
})

export const signupMiddleware = (req, res, next)=> {
    try {
        const { success } = signupSchema.safeParse(req.body)
        if(success){
            next()
        }else{
            return res.status(411).json({
                msg: 'invalid input'
            })
        }
    } catch (err) {
        return res.json({
            err: err.message
        })
    }
}
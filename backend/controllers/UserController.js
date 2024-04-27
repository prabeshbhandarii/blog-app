import { User } from '../db/index.js'

export const createUser = async (req, res)=>{
    const { username, email, password } = req.body
    try {
        const result = await User.create({
            username, 
            email, 
            password
        })
        return res.json({
            msg: "user created successfully",
            data: result
        })
    } catch (err) {
        return res.json({
            msg: err.message
        })
    }
}
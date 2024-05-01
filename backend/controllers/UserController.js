import { User } from '../db/index.js'
import jwt from 'jsonwebtoken'

export const createUser = async (req, res)=>{
    const { username, email, password } = req.body
    try {
        const existingUser = await User.findOne({
            email: email
        })
        if(existingUser){
            return res.json({
                msg: 'User already exists'
            })
        }
        const result = await User.create({
            username, 
            email, 
            password
        })
        if(!result){
            return res.json({
                msg: "could not create user"
            })
        }
        const id = result._id
        const token = jwt.sign({id}, process.env.JWT_SECRET_KEY)
        res.cookie("token", token)

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

export const loginUser = async (req, res)=>{
    const { email, password } = req.body
    try {
        const result = await User.findOne({
            email: email,
            password: password
        })
        if(!result){
            return res.status(411).json({
                msg: "User with this email could not be found"
            })
        }
        const id = result._id
        const token = jwt.sign({id}, process.env.JWT_SECRET_KEY)
        res.cookie("token", token)
        return res.json({
            msg: "User login successfull"
        })
    } catch (err) {
        return res.status(500).json({
            err: err.message
        })
    }
}
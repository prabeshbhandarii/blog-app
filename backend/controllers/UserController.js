import { User } from '../db/index.js'
import jwt from 'jsonwebtoken'

export const createUser = async (req, res)=>{
    const { username, email, password } = req.body
    try {
        const existingUser = await User.findOne({
            email: email
        })
        if(existingUser){
            return res.status(400).json({
                msg: 'User already exists'
            })
        }
        const result = await User.create({
            username, 
            email, 
            password
        })
        if(!result){
            return res.status(401).json({
                msg: "could not create user"
            })
        }
        const id = result._id
        const token = jwt.sign(
            { 
                id: id, 
                username: username
             }, process.env.JWT_SECRET_KEY)
        res.cookie("token", token)

        return res.status(200).json({
            msg: "user created successfully",
            data: result
        })

    } catch (err) {
        return res.status(500).json({
            err: err.message
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

export const followUser = async (req, res)=>{
    const follower = req.headers['userId']
    const followee = req.params.userId

    try {
        const {following} = await User.findOne({
            _id: follower
        })
        if(following.includes(followee)){
            await User.updateOne(
                { _id: follower },
                { $pull: { following: followee } }
            )
            await User.updateOne(
                { _id: followee },
                { $pull: { followers: follower } }
            )

            return res.json({
                msg: "Unfollowed"
            })
        }else{
        const updateFollower = await User.updateOne(
            { _id: follower },
            { $push: { following:  followee} }
        )
        const updateFollowee = await User.updateOne(
            { _id: followee },
            { $push: { followers:  follower} }
        )
        if(updateFollowee && updateFollower){
            return res.json({
                msg: "Followed"
            })
        }
    }
    } catch (err) {
        return res.json({
            err: err.message
        })
    }
}
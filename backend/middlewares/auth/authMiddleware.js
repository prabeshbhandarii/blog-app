import jwt from "jsonwebtoken"

export const authMiddleware = async (req, res, next) =>{    
    try {
        const token = req.cookies.token
        // console.log(req.headers)
        // console.log(token)
        if(!token){
            return res.json({
                msg: "no token provided"
            })
        }
        const verified = jwt.verify(token, process.env.JWT_SECRET_KEY)

        const {id, username} = verified
        req.headers['userId'] = id
        req.headers['authorName'] = username

        next()
    } catch (err) {
        return res.status(500).json({
            err: err.message
        })
    }
    
}
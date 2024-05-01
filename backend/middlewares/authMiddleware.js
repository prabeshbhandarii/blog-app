import jwt from "jsonwebtoken"

export const authMiddleware = (req, res, next) =>{
    const token = req.cookies.token
    if(!token){
        return res.json({
            msg: "no token provided"
        })
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET_KEY)
    if(!verified){
        return res.json({
            msg: "authentication failed"
        })
    }
    next()
}
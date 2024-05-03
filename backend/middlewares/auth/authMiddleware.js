import jwt from "jsonwebtoken"

export const authMiddleware = async (req, res, next) =>{
    const token = req.cookies.token
    const { id } = jwt.decode(token, process.env.JWT_SECRET_KEY)
    req.headers['userId'] = id

    try {
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
    } catch (err) {
        return res.status(500).json({
            err: err.message
        })
    }
    
}
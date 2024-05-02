import { Blog } from '../db/index.js'

export const createBlog = async (req, res)=> {
    const { title, body} = req.body
    try {
        const blog = await Blog.create({
            title,
            body
        })
        if(!blog){
            return res.status(411).json({
                msg: "blog could not be created"
            })
        }
        return res.json({
            msg: "blog created successfully"
        })
    } catch (err) {
        res.status(500).json({
            err: err.message
        })
    }
}

export const likeBlog = async (req, res)=> {
    const postId = req.params.postId
    const userId = req.headers['userId']

    try {
        const {likes} = await Blog.findOne({
            _id: postId
        })
        if(likes.includes(userId)){
            await Blog.updateOne(
                { _id: postId },
                { $pull: { likes: userId } }
            )

            res.send("unliking")
        }else{
        const blog = await Blog.updateOne(
            { _id: postId },
            { $push: { likes:  userId} }
        )
        if(blog){
            return res.json({
                msg: "Blog updated successfully",
                noOfLikes : likes.length
            })
        }
    }
    } catch (err) {
        res.json({
            err: err.message
        })
    }
}

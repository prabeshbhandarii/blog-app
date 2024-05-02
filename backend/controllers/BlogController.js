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

            res.send("unliked")
        }else{
        const blog = await Blog.updateOne(
            { _id: postId },
            { $push: { likes:  userId} }
        )
        if(blog){
            return res.json({
                msg: "Blog liked",
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

export const getBlogs = async (req, res)=> {
    try {
        const blogs = await Blog.find({})
        if(!blogs){
            return res.json({
                msg: "no blogs sorry"
            })
        }
        return res.json({
            msg: "here are the blogs",
            blogs: blogs
        })
    } catch (err) {
        return res.json({
            err: "opps something went wrong"
        })
    }
}

export const getBlog = async (req, res)=> {
    try {
        const postId =  req.params.postId
        const blog = await Blog.findOne({
            _id: postId
        })
        if(!blog){
            return res.json({
                msg: "could not find the blog"
            })
        }
        return res.json({
            msg: "here is the blog", 
            data: blog
        })
    } catch (err) {
        return res.json({
            err: "opps something went wrong"
        })
    }
}
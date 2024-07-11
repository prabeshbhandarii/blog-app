import React, { createContext, useState, useEffect } from "react"
import axios from "axios"

export const PostsContext = createContext()

export const PostsProvider = ({ children }) => {
    const [posts, setPosts] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async ()=>{
            try {
                const {data} = await axios.get('http://localhost:3000/blog')
                setPosts(data.blogs)
                setFilteredPosts(data.blogs)
            } catch (err) {
                console.error(err)
            }
        }
        fetchPosts()
    }, [])

    return (
        <PostsContext.Provider value={{posts, filteredPosts, setPosts, setFilteredPosts}}>
            {children}
        </PostsContext.Provider>
    )
}
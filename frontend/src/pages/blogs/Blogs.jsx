import React, { useEffect, useState, useContext} from 'react'
import axios from 'axios'
import BlogCard from '../../components/BlogCard'
import MainLayout from '../../components/MainLayout'
import { PostsContext } from '../../context/PostsContext'

const Blogs = () => {
  const { posts, filteredPosts, setPosts, setFilteredPosts } = useContext(PostsContext)

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const {data} = await axios.get("http://localhost:3000/blog")
        console.log(data)
        setPosts(data.blogs)
      } catch (err) {
        console.error('error fetching blogs ' + err)
      }
    }
    fetchData()
  }, [setPosts, setFilteredPosts])


  return (
    <div>
      <MainLayout>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {console.log(filteredPosts)}
          {filteredPosts && filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <BlogCard 
                key={post._id} 
                title={post.title} 
                body={post.body} 
                author={post.author} 
                date={post.createdAt} 
                image={post.image} 
              />
            ))
          ) : (
            <div>No posts found.</div>
          )}
        </div>
      </MainLayout>
    </div>
  )
}

export default Blogs

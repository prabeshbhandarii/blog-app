import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BlogCard from '../../components/BlogCard'
import MainLayout from '../../components/MainLayout'

const Blogs = () => {
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const {data} = await axios.get("http://localhost:3000/blog")
        setPosts(data.blogs)
      } catch (err) {
        throw new Error(err)
      }
    }
    fetchData()
  },[])
  return (
    <div>
      <MainLayout>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          { posts.map((post)=>{
          return <BlogCard key={post._id} title={post.title} body={post.body} author={post.author} date={post.createdAt} image={post.image} />
        }) }
        </div>
      </MainLayout>
    </div>
  )
}

export default Blogs

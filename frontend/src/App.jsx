import './App.css'
import HomePage from './pages/home/HomePage'
import Blogs from './pages/blogs/Blogs'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import { Route, Routes } from 'react-router-dom'
import WriteBlogs from './pages/write/WriteBlogs'
import Profile from './pages/profile/Profile'

function App() {

  return (
    <>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/write" element={<WriteBlogs />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App

import './App.css'
import HomePage from './pages/home/HomePage'
import Blogs from './pages/blogs/Blogs'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route index path="/blogs" element={<Blogs />} />
        <Route index path="/login" element={<Login />} />
        <Route index path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App

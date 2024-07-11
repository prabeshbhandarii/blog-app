import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'
import LogoutButton from '../pages/logout/LogoutButton';
import { PostsContext } from '../context/PostsContext';

const Header = () => {
  const { isAuthenticated } = useAuth()
  const [search, setSearch] = useState('')
  const { posts, setFilteredPosts } = useContext(PostsContext)

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
    if(e.target.value === ''){
      setFilteredPosts(posts)
    }else{
      const filtered = posts.filter(post => (
        post.body.toLowerCase().includes(e.target.value.toLowerCase()))
      )
      setFilteredPosts(filtered)
    }
  }

  return (
<header className="w-full fixed top-0 left-0 right-0 flex space justify-between items-center p-3 bg-white border-b border-gray-300">
      <div className="text-2xl font-bold">
        <Link to="/" className="text-gray-800">MediumClone</Link>
      </div>
      <nav className="space-x-6">
        <Link to="/" className="text-gray-800 hover:underline">Home</Link>
        <Link to="/blogs" className="text-gray-800 hover:underline">Blogs</Link>
        {isAuthenticated && (
        <Link to="/write" className="text-gray-800 hover:underline">Write</Link>
        )}
      </nav>
      
      <div className="relative">
        <input 
          type="text" 
          onChange={handleSearchChange}
          value={search}
          placeholder="Search..." 
          className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
        />
      </div>

      {!isAuthenticated && (
        <nav className="space-x-6">
        <Link to="/signup" className="text-gray-800 hover:underline">Signup</Link>
        <Link to="/login" className="text-gray-800 hover:underline">Login</Link>
      </nav>
      )}
      
      {isAuthenticated && (
        <div className="relative group">
        <img 
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" 
          alt="Profile" 
          className="w-10 h-10 rounded-full cursor-pointer"
        />
        <div className="absolute top-10 right-0 w-40 bg-white border border-gray-300 rounded shadow-lg hidden group-hover:block">
          <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">View Profile</Link>
          <LogoutButton />
        </div>
      </div>
      )}
    </header>
  );
};

export default Header;
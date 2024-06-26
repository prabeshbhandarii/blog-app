import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
<header className="w-full fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-white border-b border-gray-300">
      <div className="text-2xl font-bold">
        <Link to="/" className="text-gray-800">MediumClone</Link>
      </div>
      <nav className="space-x-6">
        <Link to="/" className="text-gray-800 hover:underline">Home</Link>
        <Link to="/blogs" className="text-gray-800 hover:underline">Blogs</Link>
        <Link to="/contact" className="text-gray-800 hover:underline">Contact</Link>
      </nav>
      <div className="relative">
        <input 
          type="text" 
          placeholder="Search..." 
          className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
        />
      </div>
      <div className="relative">
        <img 
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" 
          alt="Profile" 
          className="w-8 h-8 rounded-full cursor-pointer"
        />
        <div className="absolute top-10 right-0 w-40 bg-white border border-gray-300 rounded shadow-lg hidden group-hover:block">
          <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">View Profile</Link>
          <Link to="/logout" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Logout</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
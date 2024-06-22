import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
      <footer className="w-full bg-gray-800 text-white py-6 absolute left-0">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-lg font-bold md:ml-5">MediumClone</Link>
          </div>
          <div className="flex space-x-8 mb-4 md:mb-0">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/blogs" className="hover:underline">Blogs</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>
          <div className="flex space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="text-center text-gray-400 mt-4">
          &copy; 2024 MediumClone. All rights reserved.
        </div>
      </footer>
  );
};

export default Footer;
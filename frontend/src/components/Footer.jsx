import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
      <footer className="w-full text-black absolute left-0">
      <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-500"></hr>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-lg font-bold md:ml-5">MediumClone</Link>
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
        <div className="text-center text-gray-600 mt-4">
          &copy; 2024 MediumClone. All rights reserved.
        </div>
      </footer>
  );
};

export default Footer;
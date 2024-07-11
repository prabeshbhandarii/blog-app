import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="absolute left-0 w-full rounded-lg shadow-m-4">
      <hr className="h-px my-5 bg-gray-500 border-0"></hr>
        <div className="mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-gray-600 sm:text-center"><Link className='text-md' to={'/'}>Medium Clone</Link></span>
          
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
        <span className="text-sm text-gray-600 sm:text-center dark:text-gray-400">© 2023 <Link className='text-md' to={'/'}>Medium Clone</Link>. All Rights Reserved.
        </span>
    </footer>
  );
};

export default Footer;
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      style={{ fontFamily: 'Satoshi, sans-serif' }}
      className='sticky top-0 z-50 backdrop-blur bg-black/60 text-gray-400 pt-2 h-14 w-full font-semibold text-sm flex items-center px-6 justify-between md:justify-evenly'
    >
      {/* Logo */}
      <Link to="/" className='text-white text-base'>POSTLY</Link>

      {/* Desktop Links */}
      <div className='hidden md:flex space-x-6'>
        <Link
          to="/blogs"
          className='px-4 py-1 rounded-md transition-all duration-150 hover:text-gray-50 hover:bg-gray-900'
        >
          Blogs
        </Link>
        <Link
          to="/post"
          className='px-4 py-1 rounded-md transition-all duration-150 hover:text-gray-50 hover:bg-gray-900'
        >
          Post a Blog
        </Link>
      </div>

      {/* Hamburger Icon (Mobile Only) */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white focus:outline-none">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-black/80 backdrop-blur flex flex-col items-center space-y-2 py-4 z-50 md:hidden">
          <Link
            to="/blogs"
            onClick={() => setIsOpen(false)}
            className='px-4 py-2 rounded-md transition-all duration-150 hover:text-gray-50 hover:bg-gray-900 w-full text-center'
          >
            Blogs
          </Link>
          <Link
            to="/post"
            onClick={() => setIsOpen(false)}
            className='px-4 py-2 rounded-md transition-all duration-150 hover:text-gray-50 hover:bg-gray-900 w-full text-center'
          >
            Post a Blog
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

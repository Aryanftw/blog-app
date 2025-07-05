import React, { useState } from 'react';
import { Menu, X, Home, FileText, PenTool } from 'lucide-react';
import '../assets/fonts/fonts.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-white/20 shadow-lg shadow-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="/"
                className="group flex items-center space-x-2 text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-indigo-600 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                  <span className="text-white font-bold text-sm">P</span>
                </div>
                <span className="group-hover:tracking-wide transition-all duration-300">POSTLY</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                <a
                  href="/"
                  className="group relative px-4 py-2 text-slate-700 hover:text-indigo-600 font-medium transition-all duration-300 rounded-full hover:bg-white/60"
                >
                  <div className="flex items-center space-x-2">
                    <Home className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <span>Home</span>
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300 rounded-full"></div>
                </a>
                
                <a
                  href="/blogs"
                  className="group relative px-4 py-2 text-slate-700 hover:text-indigo-600 font-medium transition-all duration-300 rounded-full hover:bg-white/60"
                >
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <span>Blogs</span>
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300 rounded-full"></div>
                </a>
                
                <a
                  href="/post"
                  className="group relative px-6 py-2 text-white font-medium bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center space-x-2">
                    <PenTool className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Post</span>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-full text-slate-700 hover:text-indigo-600 hover:bg-white/60 transition-all duration-300 transform hover:scale-105"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 rotate-90 transition-transform duration-300" />
                ) : (
                  <Menu className="w-6 h-6 transition-transform duration-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 backdrop-blur-xl bg-white/90 border-t border-white/20">
            <a
              href="/"
              className="group flex items-center space-x-3 px-4 py-3 text-slate-700 hover:text-indigo-600 font-medium transition-all duration-300 rounded-lg hover:bg-white/60 transform hover:translate-x-2"
            >
              <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Home</span>
            </a>
            
            <a
              href="/blogs"
              className="group flex items-center space-x-3 px-4 py-3 text-slate-700 hover:text-indigo-600 font-medium transition-all duration-300 rounded-lg hover:bg-white/60 transform hover:translate-x-2"
            >
              <FileText className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Blogs</span>
            </a>
            
            <a
              href="/post"
              className="group flex items-center space-x-3 px-4 py-3 text-white font-medium bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mx-2"
            >
              <PenTool className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>Post</span>
            </a>
          </div>
        </div>
      </nav>

      
    </div>
  );
};

export default Navbar;
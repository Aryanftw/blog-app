import React, { useEffect } from 'react';
import "../assets/fonts/fonts.css";
import { latestblogs } from '../api/api.js';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Latest = () => {
  const [blogs,setBlogs] = useState([])
  useEffect(()=>{
    const fetchblogs = async () => {
      try {
        const res = await latestblogs()
        setBlogs(res.data)
      } catch (error) {
        console.log("Failed to fetch altest blogs ",error)
      }
    }

    fetchblogs()
  },[])
  

  return (
    <div 
      id="latest"
      style={{fontFamily:'Satoshi,sans-serif'}} 
      className='text-white w-full min-h-screen relative overflow-hidden py-20 px-8'
    >
     <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/15 to-purple-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-2xl animate-pulse delay-2000" />
          <div className="absolute top-10 right-1/3 w-80 h-80 bg-gradient-to-r from-pink-400/12 to-purple-500/12 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Latest Drops
          </h2>
          <p className="text-xl text-gray-400 font-medium">
            Fresh thoughts, hot takes, and the occasional existential crisis
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div 
              key={blog.id}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Card Content */}
              <div className="space-y-6">
                {/* Title */}
                <h3 className="text-2xl font-bold leading-tight group-hover:text-purple-300 transition-colors duration-300">
                  {blog.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-300 leading-relaxed line-clamp-4">
                  {blog.description}
                </p>
                
                {/* Author and Date */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center font-semibold text-white">
                      {blog.author.charAt(0)}
                    </div>
                    <span className="text-gray-400 font-medium">
                      {blog.author}
                    </span>
                  </div>
                  <span className="text-gray-500 text-xs">
                    {new Date(blog.createdAt).toLocaleString()}
                  </span>
                </div>
                
                {/* View More Button */}
                <div className="pt-4">
                  <button className="group/btn relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95 w-full">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Link to="/blogs">View More</Link>
                      <svg 
                        className="w-4 h-4 transform transition-transform group-hover/btn:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 5l7 7-7 7" 
                        />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  </button>
                </div>
              </div>
              
              {/* Hover Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Latest;
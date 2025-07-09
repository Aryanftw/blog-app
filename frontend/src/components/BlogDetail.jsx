import React, { useEffect, useState } from 'react';
import { getblogbyId } from '../api/api';
import { useParams } from 'react-router-dom';
const BlogDetail = () => {
  const {id} = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await getblogbyId(id)
        setBlog(response.data);
      } catch (err) {
        console.error("Error loading blog:", err);
      }
    };
    fetchBlog();
  }, [id]);

  if (!blog) {
    return (
      <div 
        style={{fontFamily:'Satoshi,sans-serif'}} 
        className='text-white w-full min-h-screen relative overflow-hidden bg-black'
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/15 to-purple-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-2xl animate-pulse delay-2000" />
          <div className="absolute top-10 right-1/3 w-80 h-80 bg-gradient-to-r from-pink-400/12 to-purple-500/12 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
            <p className="mt-4 text-gray-400">Loading blog...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      style={{fontFamily:'Satoshi,sans-serif'}} 
      className='text-white w-full min-h-screen relative overflow-hidden bg-black'
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/15 to-purple-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-2xl animate-pulse delay-2000" />
        <div className="absolute top-10 right-1/3 w-80 h-80 bg-gradient-to-r from-pink-400/12 to-purple-500/12 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center py-16 md:py-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent leading-tight">
            {blog.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-gray-400 font-medium">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center font-semibold text-white">
                {blog.author.charAt(0)}
              </div>
              <span className="text-lg">by {blog.author}</span>
            </div>
            {blog.createdAt && (
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span className="text-sm">
                  {new Date(blog.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="mb-20">
          <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/20">
            <div className="prose prose-invert prose-lg max-w-none">
              <div className="text-gray-300 leading-relaxed text-lg md:text-xl whitespace-pre-line">
                {blog.description}
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/10">
              <button 
                onClick={() => window.history.back()}
                className="group/btn relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg 
                    className="w-4 h-4 transform transition-transform group-hover/btn:-translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M15 19l-7-7 7-7" 
                    />
                  </svg>
                  Back to Blogs
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
              </button>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
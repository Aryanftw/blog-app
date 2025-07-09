import React, { useEffect, useState } from 'react';
import { getallblogs } from '../api/api.js';
const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  
  useEffect(()=>{
    const fetchblogs = async () => {
      try {
        const res = await getallblogs()
        setBlogs(res.data)
      } catch (error) {
        console.log("Error in fetching all blogs ",error)
      }
    }
    fetchblogs()
    setLoading(false)
  },[])

  // Filter blogs based on search term
  useEffect(() => {
    if (searchTerm === '') {
      setFilteredBlogs(blogs);
    } else {
      const filtered = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBlogs(filtered);
    }
  }, [searchTerm, blogs]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div 
      style={{fontFamily:'Satoshi,sans-serif'}} 
      className='text-white w-full min-h-screen relative overflow-hidden bg-black'
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/15 to-purple-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-2xl animate-pulse delay-2000" />
        <div className="absolute top-10 right-1/3 w-80 h-80 bg-gradient-to-r from-pink-400/12 to-purple-500/12 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center py-16 md:py-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            All Blogs
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-medium max-w-2xl mx-auto">
            Dive into our collection of thoughts, tutorials, and insights
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12 max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg 
                className="h-5 w-5 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search blogs by title, content, or author..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full pl-12 pr-12 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
            />
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors duration-200"
              >
                <svg 
                  className="h-5 w-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Search Results Info */}
        {searchTerm && (
          <div className="mb-8 text-center">
            <p className="text-gray-400">
              {filteredBlogs.length === 0 
                ? `No blogs found for "${searchTerm}"`
                : `Found ${filteredBlogs.length} blog${filteredBlogs.length === 1 ? '' : 's'} for "${searchTerm}"`
              }
            </p>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
            <p className="mt-4 text-gray-400">Loading blogs...</p>
          </div>
        )}

        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-20">
            {filteredBlogs.map((blog) => (
              <div 
                key={blog.id}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className="space-y-4 md:space-y-6">
                  <h3 className="text-xl md:text-2xl font-bold leading-tight group-hover:text-purple-300 transition-colors duration-300">
                    {blog.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed line-clamp-3 md:line-clamp-4 text-sm md:text-base">
                    {blog.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center font-semibold text-white text-sm">
                        {blog.author.charAt(0)}
                      </div>
                      <span className="text-gray-400 font-medium">
                        {blog.author}
                      </span>
                    </div>
                    <span className="text-gray-500 text-xs">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  
                  {/* Read More Button */}
                  <div className="pt-4">
                    <button className="group/btn relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95 w-full">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <a href={`/blog/${blog.id}`}>Read Full Article</a>
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
        )}

        {/* Empty State */}
        {!loading && filteredBlogs.length === 0 && searchTerm && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-300">No blogs found</h3>
            <p className="text-gray-400 mb-8">
              Try adjusting your search terms or browse all blogs
            </p>
            <button
              onClick={clearSearch}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogsPage;
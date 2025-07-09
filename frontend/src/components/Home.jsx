import React from "react";
import "../assets/fonts/fonts.css";
import {Link} from "react-router-dom"
const Home = () => {
  return (
    <div
      className="w-full h-[calc(100vh-3.5rem)] flex items-center justify-center text-white px-8"
      style={{ fontFamily: "Satoshi, sans-serif" }}
    >
      <div className="flex gap-16 max-w-7xl mx-auto w-full">
        <div className="w-1/2 flex flex-col justify-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-6xl font-bold leading-tight tracking-tight">
              Scream into the void but make it{" "}
              <span className="text-gradient bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                readable
              </span>
              !!
            </h1>
            <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-lg">
              Blog your brain out. Hot takes, life rants, shower thoughts , all
              welcome. No judgment. Just vibes.
            </p>
          </div>
          
          <div className="flex gap-4 pt-4">
            <Link to="/post" className="group relative overflow-hidden bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 active:scale-95">
              <span className="relative z-10 flex items-center gap-2">
                Start Writing
                <svg 
                  className="w-5 h-5 transform transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" 
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>
        </div>
        
        <div className="w-1/2 flex items-center justify-center">
          <div className="relative">
            <img 
              src="/hero-image.png" 
              alt="Hero Section" 
              className="max-w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
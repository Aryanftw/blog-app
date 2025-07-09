import React from "react";
import "../assets/fonts/fonts.css";
import Latest from "./Latest";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-20 text-white relative"
        style={{ fontFamily: "Satoshi, sans-serif" }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/15 to-purple-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-2xl animate-pulse delay-2000" />
          <div className="absolute top-10 right-1/3 w-80 h-80 bg-gradient-to-r from-pink-400/12 to-purple-500/12 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        {/* Main Hero Content */}
        <div className="relative z-10 flex flex-col lg:flex-row gap-16 max-w-7xl mx-auto w-full items-center">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                Scream into the void but make it{" "}
                <span className="text-gradient bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                  readable
                </span>
                !!
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                Blog your brain out. Hot takes, life rants, shower thoughts —
                all welcome. No judgment. Just vibes.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 items-center sm:items-start justify-center lg:justify-start">
              <button className="w-fit group relative overflow-hidden bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 active:scale-95">
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
              </button>

              <button
  onClick={() => {
    const el = document.getElementById("latest");
    el?.scrollIntoView({ behavior: "smooth" });
  }}
  className="w-fit group border-2 border-gray-600 text-gray-300 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:border-purple-400 hover:text-white hover:shadow-lg hover:shadow-purple-500/10 active:scale-95"
>
  <span className="flex items-center gap-2">
    Explore Posts
    <svg
      className="w-4 h-4 transform transition-transform group-hover:translate-y-0.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </span>
</button>

            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="relative w-4/5 sm:w-3/4 md:w-2/3 lg:w-full">
              <img
                src="/hero-image.png"
                alt="Hero Section"
                className="w-full h-auto max-h-[400px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Section */}
      <Latest />
    </>
  );
};

export default Home;

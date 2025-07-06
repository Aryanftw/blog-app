import React from "react";
import "../assets/fonts/fonts.css";

const Home = () => {
  return (
    <div
      className="w-full h-[calc(100vh-3.5rem)] flex items-center justify-center text-white"
      style={{ fontFamily: "Panchang, sans-serif" }}
    >
      <div className="flex gap-10">
        <div className="w-1/2 flex flex-col items-center justify-center">
          <p className="text-5xl font-bold">Scream into the void but make it readable !!</p>
          <p className="text-2xl text-gray-500 font-semibold">
            Blog your brain out. Hot takes, life rants, shower thoughts — all
            welcome. No judgment. Just vibes.
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;

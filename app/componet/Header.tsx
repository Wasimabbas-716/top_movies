import React from 'react';
import 'tailwindcss/tailwind.css';

const Header = () => {
  return (
    <>
      <header className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white p-8 flex flex-col items-center justify-center w-full text-center shadow-md">
        <h1 className="text-4xl font-bold tracking-wide animate-pulse">
          Top Trending Movies
        </h1>
        <h3 className="text-xl mt-3 opacity-90">
          Watch free online Movies you want
        </h3>
      </header>
    </>
  );
};

export default Header;

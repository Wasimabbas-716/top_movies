import React from 'react';

const Nav = () => {
  return (
    <nav className="bg-gray-800 shadow-md">
    <hr className="border-gray-700" />
    <ul className="flex justify-between p-4 text-white text-lg font-medium mb-4">
        <li className="mr-6 hover:text-yellow-400 cursor-pointer transition duration-200 ease-in-out">Home</li>
        <li className="mr-6 hover:text-yellow-400 cursor-pointer transition duration-200 ease-in-out">Top Movies</li>
        <li className="hover:text-yellow-400 cursor-pointer transition duration-200 ease-in-out">Watch Movies</li>
    </ul>
</nav>

  );
}

export default Nav;

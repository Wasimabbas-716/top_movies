import React from 'react';

const Footer = () => {
    return (
        <>
            <div className="w-full text-slate-400 bg-gray-800 p-6 grid grid-cols-1 md:grid-cols-3 gap-6 ">
                <div>
                    <h2 className="text-xl text-yellow-50 font-semibold mb-4">Category</h2>
                    <ul className="space-y-2">
                        <li className="hover:text-yellow-400 cursor-pointer">Punjabi</li>
                        <li className="hover:text-yellow-400 cursor-pointer">South Indian</li>
                        <li className="hover:text-yellow-400 cursor-pointer">Hindi Movies</li>
                        <li className="hover:text-yellow-400 cursor-pointer">English</li>
                        <li className="hover:text-yellow-400 cursor-pointer">British</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl text-yellow-50 font-semibold mb-4">Top Punjabi Movies</h2>
                    <ul className="space-y-2">
                        <li className="hover:text-yellow-400 cursor-pointer">Shinda Shinda no Papa</li>
                        <li className="hover:text-yellow-400 cursor-pointer">High End Yaarian</li>
                        <li className="hover:text-yellow-400 cursor-pointer">Jatt and Juliet</li>
                        <li className="hover:text-yellow-400 cursor-pointer">Godey Godey Chaa</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl text-yellow-50 font-semibold mb-4">Top Hindi Movies</h2>
                    <ul className="space-y-2">
                        <li className="hover:text-yellow-400 cursor-pointer">Khel Khel Me</li>
                        <li className="hover:text-yellow-400 cursor-pointer">Landon Nai Jaon Ga</li>
                        <li className="hover:text-yellow-400 cursor-pointer">Rooh Posh</li>
                        <li className="hover:text-yellow-400 cursor-pointer">Bawaal</li>
                    </ul>
                </div>
            </div>

            <span className="block text-center text-yellow-50 w-full py-4 text-sm font-semibold bg-gray-900">
                © 2024 | Top_Movies.com
            </span>
        </>
    );
};

export default Footer;

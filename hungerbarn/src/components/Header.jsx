import React, { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='flex flex-col md:flex-row md:items-center md:justify-between p-4 bg-black'>
      <h1 className="text-blue-300 text-3xl font-bold max-h-2 md:max-h-8">Logo</h1>
      <nav className="hidden md:flex md:flex-1 md:justify-end space-x-4">
        <a href="/" className="hover:bg-gray-700 px-3 py-2 rounded-md font-medium text-orange-600">Home</a>
        <a href="/upload" className="hover:bg-gray-700 px-3 py-2 rounded-md font-medium text-orange-600">Upload</a>
        <a href="/explorepage" className="hover:bg-gray-700 px-3 py-2 rounded-md font-medium text-orange-600">Explore</a>
        <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md font-medium text-orange-600">Recipes</a>
      </nav>
      <div className="md:hidden flex justify-end items-end ">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
          aria-expanded={menuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="flex flex-col w-full bg-black opacity-80 mt-2 space-y-2 md:hidden">
          <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md font-medium text-white w-full text-right">Home</a>
          <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md font-medium text-white w-full text-right">Contact</a>
          <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md font-medium text-white w-full text-right">Explore</a>
          <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md font-medium text-white w-full text-right">Recipes</a>
        </div>
      )}
    </div>
  );
}

export default Header;

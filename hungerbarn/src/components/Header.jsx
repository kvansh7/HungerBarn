import React from 'react';
import { Link } from 'react-router-dom'; 
import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='flex flex-col md:flex-row md:items-center md:justify-between p-4 bg-black'>
      <Link to='/'><h1 className="text-blue-300 text-3xl font-bold max-h-2 md:max-h-8">TastyLink</h1> </Link>
      <nav className="hidden md:flex md:flex-1 md:justify-end space-x-4">
        <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded-md font-medium text-orange-600">Home</Link>
        <Link to="/explorepage" className="hover:bg-gray-700 px-3 py-2 rounded-md font-medium text-orange-600">Explore</Link>
        <Link to="/allcatogeries" className="hover:bg-gray-700 px-3 py-2 rounded-md font-medium text-orange-600">Categories</Link>
        <Link to="/upload" className="hover:bg-gray-700 px-3 py-2 rounded-md font-medium text-orange-600">Upload</Link>
        <Link to="#" className="hover:bg-gray-700 px-3 py-2 rounded-md font-medium text-orange-600">Recipes</Link>
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
          <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded-md font-medium text-white w-full text-right">Home</Link>
          <Link to="/explorepage" className="hover:bg-gray-700 px-3 py-2 rounded-md font-medium text-white w-full text-right">Explore</Link>
          <Link to="/allcatogeries" className="hover:bg-gray-700 px-3 py-2 rounded-md font-medium text-white w-full text-right">Categories</Link>
          <Link to="/upload" className="hover:bg-gray-700 px-3 py-2 rounded-md font-medium text-white w-full text-right">Upload</Link>
          <Link to="#" className="hover:bg-gray-700 px-3 py-2 rounded-md font-medium text-white w-full text-right">Recipes</Link>
        </div>
      )}
    </div>
  );
}

export default Header;

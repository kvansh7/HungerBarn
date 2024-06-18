import React from 'react';
import { photo } from '../assets'; // Assuming you have an image named photo in your assets
import Button from './Button';
import { Link } from 'react-router-dom';

function UploadYours() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start p-4 text-white">
      <div className="text-center md:text-left md:mr-10 mb-6 md:mb-0 max-w-2xl">
        <h1 className='text-yellow-400 text-4xl md:text-5xl mb-4 font-bold md:mr-[200px]'>
          Want others to know about your fav dishes?
        </h1>
        <p className='text-lg md:text-xl'>
          Share your favorite dishes so that others can see and eat them too.
        </p>
        <div className="hidden md:block">
         <Link to='/upload'><Button title='Share now'/> </Link>
        </div>
      </div>
      <div className="relative w-32 h-32 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto md:mx-0 mb-4 md:mb-0">
        <img src={photo} className="w-full h-full object-cover rounded-full" alt="User's favorite dish" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75 rounded-full"></div>
      </div>
      <div className="block md:hidden">
      <Link to='/upload'><Button title='Share now'/> </Link>
      </div>
    </div>
  );
}

export default UploadYours;

import React from 'react';
import Header from '../components/Header';
import { mai, street } from '../assets'; // Assuming image import
import AllTimeFav from '../components/AllTimeFav';
import Cuisines from '../components/Cuisines';
import Button from '../components/Button';
import UploadYours from '../components/UploadYours';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <Header />
      <div className="relative">
        <img
          src={mai}
          alt="Background Image"
          className="w-full h-[35vh] md:h-[45vh] lg:h-[65vh] object-cover" // Adjust height for different screen sizes
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-xl md:text-6xl font-bold mt-[100px] md:mt-[185px]">Confused about what to eat today?</h1>
          <p className="text-lg md:text-2xl mt-4">TastyLink: Your Ultimate Food Recommendation Hub</p>
          <Link to='/explorepage'><Button title='Explore'/> </Link>
        </div>
      </div>
      <div className="mt-8S">
       <AllTimeFav/>
      </div>
      <div className='mt-8'>
      <Cuisines/>
      </div>
      <div className="w-[50%] md:my-6 my-2 ml-[25%] border-t border-gray-500"></div>
      <div className='flex justify-center items-center mb-5'>
      <UploadYours/>
      </div>
      <div className="relative">
        <img
          src={street}
          alt="Background Image"
          className="w-full h-[30vh] md:h-[35vh] lg:h-[55vh] object-cover" // Adjust height for different screen sizes
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-xl md:text-6xl font-bold mt-[100px]">Street Special</h1>
          <p className="text-lg md:text-2xl md:mt-4">Find hidden street food gems near you</p>
        <Link to='/cuisine/Street Food'> <Button title='Explore'/> </Link>
          <div className=' md:mb-[250px] mb-[150px]'></div>
        </div>
      </div>
      <div className='mt-5'> 
      <Footer/>
      </div>
    </div>
  );
}

export default HomePage;

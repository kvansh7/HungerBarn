import React from 'react';
import { burger, pizza, samosa } from '../assets';
import Card from './Card';
import Button from './Button';
import { Link } from 'react-router-dom';

function AllTimeFav() {
  return (
    <div className="p-6 bg-gray-800">
      <h1 className="font-bold text-left text-yellow-400 md:text-5xl text-2xl mb-8 ml-[50px]">
        ALL TIME FAVOURITESS
      </h1>
      <div className='flex md:flex-row md:justify-evenly flex-row justify-evenly items-center '>
      <Card
      image={burger}
      title="Delicious Burger"
      description="A classic burger with all the fixings."
    />
    <Card
    image={samosa}
    title="samosa"
    description="indian speciality"
    />
    <Card
    image={pizza}
    title="Pizza"
    description="full of cheese and vegies"
    />
      </div>
      <div className='flex justify-center items-center text-slate-50 font-normal'>
     <Link to='/explorepage'> <Button title='All Dishes'/> </Link>
      </div>
    </div>
  );
}

export default AllTimeFav;

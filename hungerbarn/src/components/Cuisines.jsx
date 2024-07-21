import React from 'react'
import Cards2 from './Cards2'
import { indian, italian, mexican, southi } from '../assets'
import Button from './Button'
import { Link, useNavigate } from 'react-router-dom'

function Cuisines() {
  const navigate = useNavigate();

  const handleCardClick = (cuisineName) => {
    navigate(`/cuisine/${cuisineName}`);
  };
  return (
    <div>
    <h1 className="font-bold text-left text-yellow-400 md:text-5xl text-2xl mb-2 ml-[20px] md:ml-[50px]">
    Cant see your favourite dish??
    </h1> 
    <p className='text-lg text-yellow-200 ml-[20px] mb-3 md:ml-[50px]'>Check out different Categories</p>

    <div className='flex flex-col justify-evenly items-center md:flex-wrap md:flex-row md:justify-evenly'>
    <Cards2
    img={indian}
    title="NORTH INDIAN"
    description="full of veggies"
    onClick={() => handleCardClick('North Indian')}
    />
    <Cards2
    img={italian}
    title="ITALIAN"
    description="full of cheese"
    onClick={() => handleCardClick('Italian')}
    />
    <Cards2
    img={mexican}
    title="MEXICAN"
    description="Diff saucess"
    onClick={() => handleCardClick('Mexican')}
    />
    <Cards2
    img={southi}
    title="SOUTH INDIAN"
    description="Breakfast king"
    onClick={() => handleCardClick('South Indian')}
    />
    </div>
    <div className='flex justify-center items-center text-slate-50 font-normal mb-5'>
     <Link to='/allcatogeries'> <Button title='Categories'/> </Link>
    </div>
    </div>
  )
}

export default Cuisines

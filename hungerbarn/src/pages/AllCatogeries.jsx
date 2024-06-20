import React from 'react'
import Cards2 from '../components/Cards2'
import { bar, chinise, dessert, fat, indian, italian, mexican, southi } from '../assets'
import Button from '../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Cuisines() {
  const navigate = useNavigate();

  const handleCardClick = (cuisineName) => {
    navigate(`/cuisine/${cuisineName}`);
  };
  return (
    <div>
    <Header/>
    <h2 className="md:text-6xl text-2xl font-bold mb-[25px] text-center text-yellow-400">All Categories</h2> 
    <div className='flex flex-col justify-evenly items-center md:flex-wrap md:flex-row md:justify-evenly'>

    <Cards2
    img={fat}
    title="FAST FOOD"
    description="burgerr and friesss"
    onClick={() => handleCardClick('Fast Food')}
    />

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

    <Cards2
    img={chinise}
    title="CHINESE"
    description="spiccyy"
    onClick={() => handleCardClick('Chinese')}
    />

    <Cards2
    img={dessert}
    title="DESSERTS"
    description="Sweetss"
    onClick={() => handleCardClick('Desserts')}
    />

    <Cards2
    img={bar}
    title="Drinks"
    description="Quench your thirst"
    onClick={() => handleCardClick('Drinks')}
    />

    </div>
    <div className='flex justify-center items-center text-slate-50 font-normal mb-5'>
    <Link to='/explorepage'>  <Button title='All Dishes'/> </Link>
    </div>
    <Footer/>
    </div>
  )
}

export default Cuisines

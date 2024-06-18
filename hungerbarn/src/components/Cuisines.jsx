import React from 'react'
import Cards2 from './Cards2'
import { indian, italian, mexican, southi } from '../assets'
import Button from './Button'

function Cuisines() {
  return (
    <div>
    <h1 className="font-bold text-left text-yellow-400 md:text-5xl text-2xl mb-2 ml-[20px] md:ml-[50px]">
    Cant see your favourite dish??
    </h1> 
    <p className='text-lg text-yellow-200 ml-[20px] mb-3 md:ml-[50px]'>Check out different Cuisines</p>

    <div className='flex flex-col justify-evenly items-center md:flex-wrap md:flex-row md:justify-evenly'>
    <Cards2
    img={indian}
    title="NORTH INDIAN"
    description="full of veggies"
    />
    <Cards2
    img={italian}
    title="ITALIAN"
    description="full of cheese"
    />
    <Cards2
    img={mexican}
    title="MEXICAN"
    description="Diff saucess"
    />
    <Cards2
    img={southi}
    title="SOUTH INDIAN"
    description="Breakfast king"
    />
    </div>
    <div className='flex justify-center items-center text-slate-50 font-normal mb-5'>
      <Button title='All Cuisines'/>
    </div>
    </div>
  )
}

export default Cuisines

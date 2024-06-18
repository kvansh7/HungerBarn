import React from 'react';

function Card({ image, title, description }) {
  return (
    <div className="relative group m-2 md:h-[250px] md:w-[400px] h-[125px] w-[300px] bg-slate-500 rounded-md overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
      <img src={image} alt={title} className="w-full h-full object-cover transition duration-500 ease-in-out transform group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>
      <div className="absolute bottom-0 left-0 p-4 text-white">
        <h2 className="md:text-2xl font-semibold text-xs">{title}</h2>
        <p className="mt-1 md:text-lg text-[6px]">{description}</p>
      </div>
    </div>
  );
}

export default Card;

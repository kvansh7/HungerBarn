import React from 'react';

function Cards2({ img, title, description, onClick }) {
  return (
    <div
      className="relative group m-1 md:h-[250px] md:w-[95vh] h-[150px] w-[90%] bg-slate-500 rounded-md overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
      onClick={onClick}
    >
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover transition duration-500 ease-in-out transform group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>
      <div className="absolute bottom-0 left-0 p-4 text-white">
        <h2 className="md:text-2xl font-semibold text-lg">{title}</h2>
        <p className="mt-1 md:text-lg text-xs">{description}</p>
      </div>
    </div>
  );
}

export default Cards2;

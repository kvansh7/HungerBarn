import React from 'react';

const CategoryCard = ({ image, name, onClick }) => {
  return (
    <div
      className="category-card flex flex-col items-center cursor-pointer transition duration-200 ease-in-out"
      style={{ flex: '0 0 150px' }}
      onClick={onClick}
    >
      <div className="rounded-full overflow-hidden" style={{ width: '100px', height: '100px' }}>
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
      </div>
      <p className="text-base font-medium mt-2 text-white">{name}</p>
    </div>
  );
};

export default CategoryCard;

// src/ExplorePage.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DishCard from '../components/DishCard';
import CategoryCard from '../components/CategoryCard';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { firebaseApp } from '../../config/firebase-config';
import { useNavigate } from 'react-router-dom';
import { des, dri, fast, it, mex, nort, oth1, panipuri, sou } from '../assets';

const ExplorePage = () => {
  const [dishes, setDishes] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); 

  useEffect(() => {
    const fetchDishes = async () => {
      const db = getFirestore(firebaseApp);
      const dishesCollection = collection(db, 'dishes');
      const dishSnapshot = await getDocs(dishesCollection);
      const dishList = dishSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDishes(dishList);
    };
    fetchDishes();
  }, []);

  const navigate = useNavigate();

  const handleCardClick = (cuisineName) => {
    navigate(`/cuisine/${cuisineName}`);
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDishes = dishes.filter(dish =>
    dish.dishName.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="explore-page">
      <Header />
      <div className="container mx-auto px-4 py-8">

      <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Explore Various Categories</h2>
        <div className="overflow-x-auto whitespace-nowrap">
          <div className="flex space-x-2 p-2">
            <CategoryCard
            image={fast}
            name='Fast food'
            onClick={()=> handleCardClick('Fast Food')}
            />
            <CategoryCard
            image={nort}
            name='North Indian'
            onClick={() => handleCardClick('North Indian')}
            />
            <CategoryCard
            image={mex}
            name='Mexican'
            onClick={() => handleCardClick('Mexican')}
            />
            <CategoryCard
            image={it}
            name='Italian'
            onClick={() => handleCardClick('Italian')}
            />
            <CategoryCard
            image={sou}
            name='South Indian'
            onClick={() => handleCardClick('South Indian')}
            />
            <CategoryCard
            image={panipuri}
            name='Street'
            onClick={() => handleCardClick('Street Food')}
            />
            <CategoryCard
            image={des}
            name='Desserts'
            onClick={() => handleCardClick('Desserts')}
            />
            <CategoryCard
            image={dri}
            name='Drinks'
            onClick={() => handleCardClick('Drinks')}
            />
            <CategoryCard
            image={oth1}
            name='Other Indian'
            onClick={() => handleCardClick('Other Indian')}
            />
            
            
          </div>
        </div>


        <h2 className="md:text-6xl text-2xl font-bold mb-[25px] text-center text-yellow-400">Explore Delicious Dishes</h2>

        <input
          type="text"
          placeholder="Search for a dish..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="mb-4 mt-5 p-[20px] border rounded-lg w-[100%] bg-white "
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredDishes.map((dish) => (
          <Link key={dish.id} to={`/dish/${dish.id}`}>
            <DishCard
              image={dish.image}
              dishName={dish.dishName}
              restaurantName={dish.restaurantName}
              posterName={dish.posterName}
            />
          </Link>
        ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ExplorePage;

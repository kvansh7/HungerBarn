// src/ExplorePage.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DishCard from '../components/DishCard';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { firebaseApp } from '../../config/firebase-config'; // Ensure your firebase config is exported from firebase.js

const ExplorePage = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchDishes = async () => {
      const db = getFirestore(firebaseApp);
      const dishesCollection = collection(db, 'dishes');
      const dishSnapshot = await getDocs(dishesCollection);
      const dishList = dishSnapshot.docs.map(doc => doc.data());
      setDishes(dishList);
    };
        fetchDishes();
  }, []);

  return (
    <div className="explore-page">
      <Header/>
      <div className="container mx-auto px-4 py-8">
        <h2 className="md:text-6xl text-2xl font-bold mb-[25px] text-center text-yellow-400">Explore Delicious Dishes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {dishes.map((dish) => (
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
      <Footer/>
    </div>
  );
};

export default ExplorePage;

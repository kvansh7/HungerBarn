import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { firebaseApp } from '../../config/firebase-config';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DishCard from '../components/DishCard'; // Ensure this component exists and is correctly implemented

const CuisinePage = () => {
  const { cuisineName } = useParams(); // Get cuisine name from URL params
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const db = getFirestore(firebaseApp);
        const dishesCollection = collection(db, 'dishes');
        const q = query(dishesCollection, where('cuisine', '==', cuisineName));
        const dishSnapshot = await getDocs(q);
        const dishList = dishSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setDishes(dishList);
      } catch (error) {
        console.error('Error fetching dishes:', error);
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchDishes();
  }, [cuisineName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="explore-page">
      <Header />
      <div className="container mx-auto px-4 py-8 min-h-[80vh]">
        <h2 className="md:text-6xl text-2xl font-bold mb-[25px] text-center text-yellow-400">Dishes in {cuisineName}</h2>
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
      <Footer />
    </div>
  );
};

export default CuisinePage;

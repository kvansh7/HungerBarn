import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { firebaseApp } from '../../config/firebase-config';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';

const FullDishInfo = () => {
  const { id } = useParams(); // Get dish ID from URL params
  const [dishes, setDishes] = useState([]);
  const [selectedDish, setSelectedDish] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const db = getFirestore(firebaseApp);
        const dishesCollection = collection(db, 'dishes');
        const dishSnapshot = await getDocs(dishesCollection);
        const dishList = dishSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setDishes(dishList);

        const dish = dishList.find(d => d.id === id);
        if (dish) {
          setSelectedDish(dish);
        } else {
          setError('Dish not found!');
        }
      } catch (error) {
        console.error('Error fetching dishes:', error);
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchDishes();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!selectedDish) {
    return <div>Dish not found!</div>;
  }

  return (
    <div>
      <Header />
      <div className="rounded-lg shadow-md p-6 mx-auto max-w-lg mt-7 mb-7 bg-gray-600">
        <h2 className="text-4xl font-bold text-white mb-6">{selectedDish.dishName}</h2>
        <div className="max-w-full rounded overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
          <img src={selectedDish.image} alt={selectedDish.dishName} className="w-full h-96 object-cover"/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{selectedDish.dishName}</div>
            <p className="text-white mb-2">Restaurant: {selectedDish.restaurantName}</p>
            <p className="text-white">Posted by: {selectedDish.posterName}</p>
            <p className="text-white">Cuisine: {selectedDish.cuisine}</p>
            <p className="text-white">Location Link: <a href={selectedDish.LocationLink} className="text-blue-400" target="_blank" rel="noopener noreferrer">View on Map</a></p>
          </div>
        </div>
      </div>
      <div className='mt-7 mb-7 flex justify-center items-center'>
      <Link to='/explorepage'><Button title='Other Dishes'/></Link>
      </div>
      <Footer />
    </div>
  );
};

export default FullDishInfo;

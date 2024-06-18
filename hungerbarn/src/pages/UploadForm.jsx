// src/components/UploadForm.jsx
import React, { useState } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { firebaseApp } from '../../config/firebase-config';
import Header from '../components/Header';
import Footer from '../components/Footer';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [dishName, setDishName] = useState('');
  const [restaurantName, setRestaurantName] = useState('');
  const [posterName, setPosterName] = useState('');
  const [zomatoLink, setZomatoLink] = useState('');
  const [swiggyLink, setSwiggyLink] = useState('');

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    const storage = getStorage(firebaseApp);
    const firestore = getFirestore(firebaseApp);
    const storageRef = ref(storage, `images/${file.name}`);

    try {
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);

      await addDoc(collection(firestore, 'dishes'), {
        id: Date.now().toString(),
        image: url,
        dishName,
        restaurantName,
        posterName,
        zomatoLink,
        swiggyLink,
      });

      setFile(null);
      setDishName('');
      setRestaurantName('');
      setPosterName('');
      setZomatoLink('');
      setSwiggyLink('');
      alert('Upload successful!');
    } catch (error) {
      console.error('Error uploading image: ', error);
      alert('Upload failed!');
    }
  };

  return (
    <div> 
    <Header/>
    <div className="bg-gray-800 rounded-lg shadow-md p-6 mx-auto max-w-lg mt-7 mb-7">
      <h2 className="text-2xl font-semibold text-white mb-6">Upload Form</h2>
      <form onSubmit={handleUpload} className="space-y-4">
        <div>
          <label htmlFor="fileInput" className="text-white">Choose Image:</label>
          <input
            id="fileInput"
            type="file"
            onChange={handleFileChange}
            className="block w-full mt-1 px-3 py-2 bg-gray-700 rounded-md shadow-sm text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="dishName" className="text-white">Dish Name:</label>
          <input
            id="dishName"
            type="text"
            value={dishName}
            onChange={(e) => setDishName(e.target.value)}
            className="block w-full mt-1 px-3 py-2 bg-gray-700 rounded-md shadow-sm text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter Dish Name"
            required
          />
        </div>
        <div>
          <label htmlFor="restaurantName" className="text-white">Restaurant Name:</label>
          <input
            id="restaurantName"
            type="text"
            value={restaurantName}
            onChange={(e) => setRestaurantName(e.target.value)}
            className="block w-full mt-1 px-3 py-2 bg-gray-700 rounded-md shadow-sm text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter Restaurant Name"
            required
          />
        </div>
        <div>
          <label htmlFor="posterName" className="text-white">Poster Name:</label>
          <input
            id="posterName"
            type="text"
            value={posterName}
            onChange={(e) => setPosterName(e.target.value)}
            className="block w-full mt-1 px-3 py-2 bg-gray-700 rounded-md shadow-sm text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter Poster Name"
            required
          />
        </div>
        <div>
          <label htmlFor="zomatoLink" className="text-white">Zomato Link:</label>
          <input
            id="zomatoLink"
            type="text"
            value={zomatoLink}
            onChange={(e) => setZomatoLink(e.target.value)}
            className="block w-full mt-1 px-3 py-2 bg-gray-700 rounded-md shadow-sm text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter Zomato Link"
          />
        </div>
        <div>
          <label htmlFor="swiggyLink" className="text-white">Swiggy Link:</label>
          <input
            id="swiggyLink"
            type="text"
            value={swiggyLink}
            onChange={(e) => setSwiggyLink(e.target.value)}
            className="block w-full mt-1 px-3 py-2 bg-gray-700 rounded-md shadow-sm text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter Swiggy Link"
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Upload</button>
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default UploadForm;

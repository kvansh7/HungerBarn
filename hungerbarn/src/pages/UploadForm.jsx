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
  const [LocationLink, setLocationLink] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true); // Set loading to true when upload starts

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
        LocationLink,
        cuisine,
      });

      // Reset form fields after successful upload
      setFile(null);
      setDishName('');
      setRestaurantName('');
      setPosterName('');
      setLocationLink('');
      setCuisine('');
      
      alert('Upload successful!');
    } catch (error) {
      console.error('Error uploading image: ', error);
      alert('Upload failed!');
    } finally {
      setLoading(false); // Set loading to false when upload ends
    }
  };

  return (
    <div>
      <Header />
      <div className="bg-gray-800 rounded-lg shadow-md p-6 mx-auto max-w-lg mt-7 mb-7">
        <h2 className="text-2xl font-semibold text-white mb-6">Upload Form</h2>
        {loading ? (
          <div className="flex justify-center items-center">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-500" role="status">
              <span className="visually-hidden ">...</span>
            </div>
          </div>
        ) : (
          <form onSubmit={handleUpload} className="space-y-4">
            <div>
              <label htmlFor="fileInput" className="text-white">
                Choose Image:
              </label>
              <input
                id="fileInput"
                type="file"
                onChange={handleFileChange}
                className="block w-full mt-1 px-3 py-2 bg-gray-700 rounded-md shadow-sm text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="dishName" className="text-white">
                Dish Name:
              </label>
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
              <label htmlFor="cuisine" className="text-white">
                Cuisine:
              </label>
              <select
                id="cuisine"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                className="block md:w-full w-[20vh] mt-1 px-3 py-2 bg-gray-700 rounded-md shadow-sm text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              >
                <option value="">Select Cuisine</option>
                <option value="North Indian">North Indian</option>
                <option value="South Indian">South Indian</option>
                <option value="Fast Food">Fast Food</option>
                <option value="Italian">Italian</option>
                <option value="Street food">Street Food</option>
                <option value="Mexican">Mexican</option>
                <option value ="Chinese">Chinese</option>
                <option value="Other Indian">Other Indian</option>
                <option value="Drinks">Drinks</option>
                <option value="Desserts">Desserts</option>
              </select>
            </div>
            <div>
              <label htmlFor="restaurantName" className="text-white">
                Restaurant Name:
              </label>
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
              <label htmlFor="Name" className="text-white">
                Your Name:
              </label>
              <input
                id="Name"
                type="text"
                value={posterName}
                onChange={(e) => setPosterName(e.target.value)}
                className="block w-full mt-1 px-3 py-2 bg-gray-700 rounded-md shadow-sm text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter  Name"
                required
              />
            </div>
            <div>
              <label htmlFor="LocationLink" className="text-white">
                Location Link:
              </label>
              <input
                id="LocationLink"
                type="text"
                value={LocationLink}
                onChange={(e) => setLocationLink(e.target.value)}
                className="block w-full mt-1 px-3 py-2 bg-gray-700 rounded-md shadow-sm text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Location Link"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Upload
            </button>
          </form>
        )}
        <div className='mt-5 mb-5 flex justify-center items-center text-red-500'>
          <p>Note: Please take time to upload the location link</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UploadForm;

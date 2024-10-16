import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    // Fetch features from Fake API
    axios.get('https://fakestoreapi.com/products')
      .then(response => setFeatures(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <section className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Our Featured Products</h2>
      <p className="text-lg text-gray-700 mb-8">
        At our store, we pride ourselves on offering a curated selection of top-quality products that blend innovation with functionality. Explore our features below and discover the perfect fit for your needs.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {features.slice(0, 12).map(feature => (
          <div key={feature.id} className="group bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-lg h-72"> {/* Set a fixed height */}
            <div className="relative">
              <img src={feature.image} alt={feature.title} className="h-32 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500 transition duration-300">
                <FontAwesomeIcon icon={faHeart} size="lg" />
              </button>
            </div>
            <h3 className="text-sm font-semibold mt-4 text-center">{feature.title}</h3>
            <p className="text-gray-700 text-center">${feature.price}</p>
            <div className="mt-auto"> {/* Flexbox to push the button to the bottom */}
              <button className="w-full flex justify-center items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

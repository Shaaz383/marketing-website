import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import 'animate.css'; // Animation library
import { getLoggedInUser } from '../services/authService'; // Import the service

const Home = () => {
  const [products, setProducts] = useState([]);
  const user = getLoggedInUser(); // Get the logged-in user

  useEffect(() => {
    // Fetch products from Fake API
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/src/assets/hero-image.avif')" }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center text-white">
          {/* Conditionally render the user's name */}
          <h1 className="text-5xl font-bold animate__animated animate__fadeInDown">
            Welcome {user ? user.name : 'Guest'} {/* Fallback to "Guest" if no user is logged in */}
          </h1>
          <p className="mt-4 animate__animated animate__fadeInUp">Discover the Best Features and Quality Design.</p>

          {/* Link to Signup page */}
          {!user && ( // Show the sign-up button only if the user is not logged in
            <Link to="/signup">
              <button className="mt-6 btn-primary animate__animated animate__fadeInUp">Sign Up Now</button>
            </Link>
          )}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6">Featured Products</h2>

        {/* Adjusted grid layout for better alignment */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, 12).map(product => (
            <div key={product.id} className="group bg-white shadow-md rounded-lg p-4 flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-lg">
              <div className="relative flex-grow">
                <img src={product.image} alt={product.title} className="h-32 mx-auto group-hover:scale-110 transition-transform duration-300" />
                <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500 transition duration-300">
                  <FontAwesomeIcon icon={faHeart} size="lg" />
                </button>
              </div>
              <h3 className="text-sm font-semibold mt-4 text-center">{product.title}</h3>
              <p className="text-gray-700 text-center">${product.price}</p>
              <button className="mt-4 w-full flex justify-center items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

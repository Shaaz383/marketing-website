// src/pages/Signup.jsx
import React from 'react';
import Layout from '../Layout';

const Signup = () => {
  return (
  
      <section className="container mx-auto p-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Create Your Account</h2>
        <p className="mb-8 text-lg text-gray-700">
          Join us today! Enter your details below to create your account.
        </p>

        <form className="max-w-xl mx-auto">
          <div className="mb-4">
            <label className="block text-left font-semibold mb-2" htmlFor="name">Full Name</label>
            <input type="text" id="name" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your full name" />
          </div>

          <div className="mb-4">
            <label className="block text-left font-semibold mb-2" htmlFor="email">Email Address</label>
            <input type="email" id="email" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your email" />
          </div>

          <div className="mb-4">
            <label className="block text-left font-semibold mb-2" htmlFor="password">Password</label>
            <input type="password" id="password" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your password" />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Create Account
          </button>
        </form>

        <p className="mt-6 text-gray-600">
          Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login here</a>.
        </p>
      </section>
    
  );
};

export default Signup;

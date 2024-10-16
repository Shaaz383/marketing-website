// src/pages/Login.jsx
import React from 'react';
import Layout from '../Layout';

const Login = () => {
  return (
    
      <section className="container mx-auto p-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Login to Your Account</h2>
        <p className="mb-8 text-lg text-gray-700">
          Welcome back! Please login to access your account.
        </p>

        <form className="max-w-xl mx-auto">
          <div className="mb-4">
            <label className="block text-left font-semibold mb-2" htmlFor="email">Email Address</label>
            <input type="email" id="email" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your email" />
          </div>

          <div className="mb-4">
            <label className="block text-left font-semibold mb-2" htmlFor="password">Password</label>
            <input type="password" id="password" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your password" />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Login
          </button>
        </form>

        <p className="mt-6 text-gray-600">
          Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Create one</a>.
        </p>
      </section>
    
  );
};

export default Login;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold">YourBrand</Link>
        <div className='flex gap-4'>
          <Link to="/" >Home</Link>
          <Link to="/features">Features</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/signup">Create account</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

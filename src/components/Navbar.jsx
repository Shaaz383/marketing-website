import React from 'react'; 
import { Link } from 'react-router-dom';
import { getLoggedInUser } from '../services/authService'; // Import the service

const Navbar = () => {
  const user = getLoggedInUser(); // Get the logged-in user

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token
    window.location.href = '/signup'; // Redirect to signup page after logout
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold">YourBrand</Link>
        <div className='flex gap-4'>
          <Link to="/">Home</Link>
          <Link to="/features">Features</Link>
          <Link to="/contact">Contact</Link>

          {user ? ( // Check if user is logged in
            <>
              {/* <span>{user.name}</span> Display user name */}
              <Link to="#" onClick={handleLogout}>Logout</Link>
            </>
          ) : (
            <Link to="/signup">Signup/Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

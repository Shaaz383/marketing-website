import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Adjust the URL if needed

// Signup function
const signup = async (name, email, password) => {
  const response = await axios.post(`${API_URL}/register`, {
    name,
    email,
    password,
  });

  // Save the token in local storage
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
  }

  return response.data;
};

// Login function
const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, {
    email,
    password,
  });

  // Save the token in local storage
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
  }

  return response.data;
};

// Get logged in user information
const getLoggedInUser = () => {
  const token = localStorage.getItem('token');
  if (!token) return null;

  try {
    // Decode the token
    const payload = JSON.parse(atob(token.split('.')[1])); // Base64 decode the payload
    return payload; // Return user data from the token
  } catch (error) {
    console.error('Failed to decode token:', error);
    return null;
  }
};

// Export the auth functions
export { signup, login, getLoggedInUser };

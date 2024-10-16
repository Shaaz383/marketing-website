import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Features from './pages/Features';
import Layout from './Layout'; // Import the Layout component
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* Add other routes here */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

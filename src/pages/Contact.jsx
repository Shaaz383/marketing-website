// src/pages/Contact.jsx
import React from 'react';
import Layout from '../Layout';

const Contact = () => {
  return (
   <>

      <section className="container mx-auto p-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Get in Touch with Us</h2>
        <p className="mb-8 text-lg text-gray-700">
          We are always open to discuss your project, improve your online presence, or help you find the right solution for your business. Feel free to get in touch using the form below.
        </p>
        
        <form className="max-w-xl mx-auto">
          <div className="mb-4">
            <label className="block text-left font-semibold mb-2" htmlFor="name">Your Name</label>
            <input type="text" id="name" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your name" />
          </div>

          <div className="mb-4">
            <label className="block text-left font-semibold mb-2" htmlFor="email">Your Email</label>
            <input type="email" id="email" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your email" />
          </div>

          <div className="mb-4">
            <label className="block text-left font-semibold mb-2" htmlFor="message">Your Message</label>
            <textarea id="message" rows="6" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Write your message"></textarea>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Send Message
          </button>
        </form>
      </section>

      <section className="container mx-auto text-center mt-12">
        <p className="text-sm text-gray-500">
          You can also reach us at: <strong>support@yourbrand.com</strong> or call us at <strong>(123) 456-7890</strong>.
        </p>
      </section>
   </>
    
  );
};

export default Contact;

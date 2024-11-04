import React from 'react';
import { FaPhoneAlt, FaShoppingCart, FaArrowRight, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="bg-white py-4 px-8 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo and Contact */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src="https://via.placeholder.com/40" alt="Logo" className="h-10 w-10" />
            <span className="text-2xl font-bold text-blue-900 ml-2">Xclean</span>
          </div>
          
          {/* Contact Information */}
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-yellow-500" />
            <span className="text-gray-600">+1 (212) 255-511</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6 text-gray-700">
          {['HOME', 'PAGES', 'SERVICES', 'PORTFOLIO', 'BLOG', 'CONTACT US'].map((link, index) => (
            <a key={index} href="#" className="hover:text-yellow-500 font-medium">
              {link}
            </a>
          ))}
        </div>

        {/* Actions (Search, Cart, Quote Button) */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <button className="text-gray-700 hover:text-blue-900 focus:outline-none">
            <FaSearch />
          </button>
          
          {/* Cart Icon with Badge */}
          <div className="relative">
            <button className="text-gray-700 hover:text-blue-900 focus:outline-none">
              <FaShoppingCart />
            </button>
            <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs rounded-full px-1">0</span>
          </div>

          {/* Get A Quote Button */}
          <button className="bg-blue-900 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-blue-800 focus:outline-none">
            <span>Get A Quote</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

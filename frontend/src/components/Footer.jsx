import React from 'react';
import { FaWhatsapp, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-gray-900 text-white flex flex-col items-center">

      <div className="flex space-x-6 text-2xl">
        <a
          href="https://wa.me/yourwhatsappnumber"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-400 transition-colors"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://facebook.com/yourfacebookpage"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-500 transition-colors"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://instagram.com/yourinstagramhandle"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-400 transition-colors"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com/yourtwitterhandle"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          <FaTwitter />
        </a>
      </div>
      <p className="mt-4 text-sm text-gray-400">&copy; {new Date().getFullYear()} BERLIN-SHAZ. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

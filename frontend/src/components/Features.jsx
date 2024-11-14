import React from 'react';
import { FaUserShield, FaStar, FaHandshake, FaTools } from 'react-icons/fa';

const Features = () => {
  return (
    <div className="bg-gray-800 py-10">
      <div className="flex justify-around items-center mx-auto max-w-3xl md:max-w-6xl">
        
        {/* Professionalität */}
        <div className="text-center">
          <FaUserShield className="mx-auto text-3xl text-white" />
          <p className="text-2xl font-bold text-white mt-2">100%</p>
          <p className="text-xs md:text-sm text-white">Professionalität</p>
        </div>
        
        {/* Kundenzufriedenheit */}
        <div className="text-center">
          <FaStar className="mx-auto text-3xl text-white" />
          <p className="text-2xl font-bold text-white mt-2">100%</p>
          <p className="text-xs md:text-sm text-white">Kundenzufriedenheit</p>
        </div>
        
        {/* Zuverlässigkeit */}
        <div className="text-center">
          <FaHandshake className="mx-auto text-3xl text-white" />
          <p className="text-2xl font-bold text-white mt-2">100%</p>
          <p className="text-xs md:text-sm text-white">Zuverlässigkeit</p>
        </div>
        
        {/* Kundendienst */}
        <div className="text-center">
          <FaTools className="mx-auto text-3xl text-white" />
          <p className="text-2xl font-bold text-white mt-2">100%</p>
          <p className="text-xs md:text-sm text-white">Kundendienst</p>
        </div>

      </div>
    </div>
  );
};

export default Features;

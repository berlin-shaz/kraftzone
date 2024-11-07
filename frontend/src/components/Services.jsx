import React from "react";
import {useNavigate} from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { srvhauscleaning } from "../assets/images";

import { FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa";

const services = [
  {
    title: "Hausauflösung",
    image: srvhauscleaning, // replace with actual image source
  },
  {
    title: "Büroauflösung",
    image: "https://via.placeholder.com/300x400",
  },
  {
    title: "Küchenentrümpelung",
    image: "https://via.placeholder.com/300x400",
  },
  {
    title: "Sperrmüllabholung",
    image: "https://via.placeholder.com/300x400",
  },
  {
    title: "Kellerentrümpelung",
    image: "https://via.placeholder.com/300x400",
  },
  {
    title: "Tatortreinigung",
    image: "https://via.placeholder.com/300x400",
  },
  {
    title: "Kühlschrank Entsorgung",
    image: "https://via.placeholder.com/300x400",
  },
  {
    title: "Waschmaschine Entsorgung",
    image: "https://via.placeholder.com/300x400",
  },
  {
    title: "Küchen Entsorgung",
    image: "https://via.placeholder.com/300x400",
  },
  {
    title: "Bauschutt Entsorgung",
    image: "https://via.placeholder.com/300x400",
  },
  {
    title: "Elektroschrut Entsorgung",
    image: "https://via.placeholder.com/300x400",
  },
];

function Services() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/service1"); // Replace with your target route
  };
  return (
    <div className="bg-gray-50 py-16 px-8 flex justify-center">
      <div className="max-w-6xl w-full">
        {/* Header Section */}
        <div className="text-center md:text-left mb-10">
          <p className="text-orange-600 font-bold text-2xl md:text-3xl">
            UNSERE LEISTUNGEN
          </p>
          <h2 className="text-1xl md:text-2xl font-bold text-gray-800">
            Wir entrümpeln Ihr Haus oder Ihre Wohnung schnell und gründlich.
          </h2>
          <div className="flex items-center justify-center md:justify-start mt-4">
            <p className="text-6xl font-extrabold text-gray-800">460+</p>
            <span className="ml-4 text-gray-600">
              Professional and Experienced staff ready to help you
            </span>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            
            <div
              key={index}
              className="relative group bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent opacity-90">
                <h3 className="text-white font-semibold text-lg">
                  {service.title}
                </h3>
              </div>
              
                    <button
                      onClick={() => {
                        navigate("/service" + (index + 1));
                      }}
                      className="absolute bottom-4 right-4 p-3 bg-blue-900 text-white rounded-full shadow-lg transform group-hover:scale-110 transition duration-300 ease-in-out"
                    >
                      <FaArrowRight />
                    </button>
                 
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;

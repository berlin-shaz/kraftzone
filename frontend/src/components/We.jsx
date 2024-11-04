import React from "react";
import { FaShieldAlt, FaClock, FaMicrophone } from "react-icons/fa";
import { cleaning } from "../assets/images";

function We() {
  return (
    <div className="bg-gray-100 py-16 flex justify-center items-center">
      <div className="flex flex-col md:flex-row p-4 items-center space-y-10 md:space-y-0 md:space-x-10">
        {/* Left Section with Image */}
        <div className="relative flex-shrink-0 rounded-lg overflow-hidden w-full md:w-1/2 h-[400px] md:h-auto">
          <img
            src={cleaning} // replace with your image source
            alt="Cleaning service"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 bg-yellow-500 p-4 rounded-md flex items-center space-x-3 shadow-md">
            <FaMicrophone className="text-white text-2xl" />
            <div>
              <p className="text-white font-bold">15 Years of</p>
              <p className="text-white font-bold">Experience</p>
            </div>
          </div>
        </div>

        {/* Right Section with Text and Service Cards */}
        <div className="w-full md:w-1/2 space-y-6">
          <p className="text-orange-600 font-bold text-2xl md:text-3xl">
            WARUM UNS?
          </p>
          <h2 className="text-1xl md:text-2xl font-semibold text-gray-800">
            Wir entrümpeln & entsorgen in Berlin & Umgebung
          </h2>
          <p className="text-gray-600">
            Wir bieten unseren Kunden maßgeschneiderte Dienstleistungen
            kostengünstige Aufräumarbeiten inklusive Entsorgung für private und
            gewerbliche Zwecke. Dank langjähriger Erfahrung arbeitet unser Team
            sicher, sauber und zuverlässig und entrümpelt und entsorgt für Sie
            jeden unnötigen Hausrat.
          </p>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 border-orange-400">
            
            <div className="flex items-center p-4 rounded-md space-x-3 ">
              <div className="text-gray-600 text-sm">
                <ul>
                  <li class="relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-orange-600">
                    100% Festpreis
                  </li>
                  <li class="relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-orange-600">
                    Betriebs­haftpflicht­versicherung
                  </li>
                  <li class="relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-orange-600">
                    Besenreine Übergabe der Räumlichkeiten
                  </li>
                  <li class="relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-orange-600">
                    Kostenlose Besichtigung
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center p-4 rounded-md space-x-3">
            <div className="text-gray-600 text-sm">
            <ul>
                  <li class="relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-orange-600">
                  Wertanrechnung für Privat & Gewerbe
                  </li>
                  <li class="relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-orange-600">
                  Kurzfristige Termine
                  </li>
                  <li class="relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-orange-600">
                  Inklusive Demontage von Gegenständen
                  </li>
                  <li class="relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-orange-600">
                  Problemlos möglich
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Button */}
          <button className="mt-6 px-6 py-3 bg-white border border-gray-300 rounded-full shadow-md flex items-center space-x-2 hover:bg-gray-50">
            <span className="font-medium text-gray-800">Know More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-800"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 15.707a1 1 0 010-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default We;

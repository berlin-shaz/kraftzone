import React from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  srvhauscleaning,
  srvofficecleaning,
  srvkitchencleaning,
  srvwastecollection,
  srvbasementcleaning,
  srvcrimescencecleaning,
  srvrefrigeratordisposal,
  srvwashmachinedisposal,
  srvkitchendisposal,
  srvconstructionwastedisposal,
} from "../assets/images";

import { FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa";

const services = [
  {
    title: "Hausauflösung",
    image: srvhauscleaning, // replace with actual image source
    url: "house-cleaning",
  },
  {
    title: "Büroauflösung",
    image: srvofficecleaning,
    url: "office-cleaning",
  },
  {
    title: "Küchenentrümpelung",
    image: srvkitchencleaning,
    url: "kitcken-cleaning",
  },
  {
    title: "Sperrmüllabholung",
    image: srvwastecollection,
    url: "waste-collection",
  },
  {
    title: "Kellerentrümpelung",
    image: srvbasementcleaning,
    url: "basement-clearance",
  },
  {
    title: "Tatortreinigung",
    image: srvcrimescencecleaning,
    url: "crime-scene-cleaning",
  },
  {
    title: "Kühlschrank Entsorgung",
    image: srvrefrigeratordisposal,
    url: "refrigrator-disposal",
  },
  {
    title: "Waschmaschine Entsorgung",
    image: srvwashmachinedisposal,
    url: "washmachine-disposal",
  },
  {
    title: "Küchen Entsorgung",
    image: srvkitchendisposal,
    url: "kitchen-disposal",
  },
  {
    title: "Bauschutt Entsorgung",
    image: srvconstructionwastedisposal,
    url: "construction-waste-disposal",
  },
  {
    title: "Elektroschrut Entsorgung",
    image: "https://via.placeholder.com/300x400",
    url: "electronic-waste-disposal",
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
        <div className="text-center mb-8">
          <h1 className="md:text-xl text-center">
            UNSERE LEISTUNGEN
          </h1>
          
          <div className="flex items-center text-center justify-center md:justify-start mt-4">
            <p className=" text-gray-800">
              Leistungen im Bereich der Entrümpelung umfassen das fachgerechte
              Entsorgen von Sperrmüll, Elektrogeräten und anderen Abfällen.
              Zudem bieten wir auch die Demontage von Möbeln und die Reinigung
              der Räumlichkeiten an. Unser erfahrenes Team sorgt dafür, dass
              Ihre Entrümpelung schnell und zuverlässig durchgeführt wird.
            </p>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-110 hover:cursor-pointer transition duration-300 ease-in-out"
            >
              <img
                src={service.image}
                onClick={() => {
                  navigate(service.url);
                }}
                alt={service.title}
                className="rounded-lg p-10"
              />
              <div className=" bottom-0 left-0 w-full p-1">
                <p className="font-semibold text-center">{service.title}</p>
              </div>

              {/* <button
                      onClick={() => {
                        navigate(service.url);
                      }}
                      className="absolute bottom-4 flex space-x-1 text-xs items-center right-4 p-3 bg-orange-600 text-white rounded-full shadow-lg transform group-hover:scale-110 transition duration-300 ease-in-out"
                    > <span className="flex">Details</span><span className="flex"><FaArrowRight /></span>
                    </button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;

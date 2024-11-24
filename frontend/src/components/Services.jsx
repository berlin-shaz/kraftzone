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
  srvelectronicwastedisposal,
} from "../assets/images";

import { FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa";

const services = [
  {
    title: "Hausauflösung",
    image: srvhauscleaning, // replace with actual image source
    url: "wohnungsauflosung",
  },
  {
    title: "Büroauflösung",
    image: srvofficecleaning,
    url: "buroauflosung",
  },
  {
    title: "Küchenentrümpelung",
    image: srvkitchencleaning,
    url: "kuchenentrumpelung",
  },
  {
    title: "Sperrmüllabholung",
    image: srvwastecollection,
    url: "sperrmullabholung",
  },
  {
    title: "Kellerentrümpelung",
    image: srvbasementcleaning,
    url: "kellerentrumpelung",
  },
  {
    title: "Tatortreinigung",
    image: srvcrimescencecleaning,
    url: "tatortreinigung",
  },
  {
    title: "Kühlschrank Entsorgung",
    image: srvrefrigeratordisposal,
    url: "kuhlschrankentsorgung",
  },
  {
    title: "Waschmaschine Entsorgung",
    image: srvwashmachinedisposal,
    url: "waschmaschineentsorgung",
  },
  {
    title: "Küchen Entsorgung",
    image: srvkitchendisposal,
    url: "kuchenentsorgung",
  },
  {
    title: "Bauschutt Entsorgung",
    image: srvconstructionwastedisposal,
    url: "bauschuttentsorgung",
  },
  {
    title: "Elektroschrut Entsorgung",
    image: srvelectronicwastedisposal,
    url: "elektroschruttentsorgung",
  },
];

function Services() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 py-16 px-8 flex justify-center">
      <div className="max-w-6xl w-full">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="md:text-xl text-center">
            UNSERE LEISTUNGEN
          </h2>
          
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
                  navigate("/leistungen/" + service.url);
                }}
                alt={service.title}
                title={service.title}
                width={512}
                height={512}
                loading="lazy"
                className="rounded-lg p-10"
              />
              <div className=" bottom-0 left-0 w-full p-1">
                <p className="font-semibold text-center">{service.title}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;

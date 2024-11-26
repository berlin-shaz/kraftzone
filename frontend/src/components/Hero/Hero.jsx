import React from "react";
import { FaCheckCircle, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Carousel from "./Carousel";

import { cleaning } from "../../assets/images";

function Hero() {
  return (
    <div
      className="flex md:flex-row bg-cover items-center min-h-screen"
      style={{ backgroundImage: `url(${cleaning})` }}
    >
      <div className="flex flex-col md:flex-row">
        {/* left side */}
        <div className="mt-40">
          <h1 className="max-sm:text-5xl text-8xl font-bold text-orange-700 uppercase lg:px-8 px-2">
            <span className="text-black">Kraft</span>Zone
            <p className="text-lg lg:px-10 px-3 text-black">
              Wir entsorgen Ihre Last
            </p>
          </h1>
        </div>
        {/* right side */}
        <div className="md:w-1/2 md:min-w-[600px]">
          <h2 className="text-white px-8">Unsere Leistungen im Überblick</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8 mt-8 px-8">
            <div className="flex items-center space-x-2 max-h-7 px-2 bg-orange-500 rounded-lg opacity-70">
              <span className="text-sm text-white">
                <FaCheckCircle />
              </span>
              <p className="text-white md:text-base">Wohnungsauflösung</p>
            </div>
            <div className="flex items-center space-x-2 max-h-7 px-2 bg-orange-500 rounded-lg opacity-70">
              <span className="text-sm text-white">
                <FaCheckCircle />
              </span>
              <p className="text-white md:text-base">Bürosauflösung</p>
            </div>
            <div className="flex items-center space-x-2 max-h-7 px-2 bg-orange-500 rounded-lg opacity-70">
              <span className="text-sm text-white">
                <FaCheckCircle />
              </span>
              <p className="text-white md:text-base">Küchenentrümpelung</p>
            </div>
            <div className="flex items-center space-x-2 max-h-7 px-2 bg-orange-500 rounded-lg opacity-70">
              <span className="text-sm text-white">
                <FaCheckCircle />
              </span>
              <p className="text-white md:text-base">SperrmüllAbholung</p>
            </div>
            <div className="flex items-center space-x-2 max-h-6 px-2 bg-orange-500 rounded-lg opacity-70">
              <span className="text-sm text-white">
                <FaCheckCircle />
              </span>
              <p className="text-white md:text-base">Kellerentrümpelung</p>
            </div>
            <div className="flex items-center space-x-2 max-h-6 px-2 bg-orange-500 rounded-lg opacity-70">
              <span className="text-sm text-white">
                <FaCheckCircle />
              </span>
              <p className="text-white md:text-base">Tatortreinigung</p>
            </div>
            <div className="flex items-center space-x-2 max-h-6 px-2 bg-orange-500 rounded-lg opacity-70">
              <span className="text-sm text-white">
                <FaCheckCircle />
              </span>
              <p className="text-white md:text-base">Kühlschrank Entsorgung</p>
            </div>
            <div className="flex items-center space-x-2 max-h-6 px-2 bg-orange-500 rounded-lg opacity-70">
              <span className="text-sm text-white">
                <FaCheckCircle />
              </span>
              <p className="text-white md:text-base">
                Waschmaschine Entsorgung
              </p>
            </div>
            <div className="flex items-center space-x-2 max-h-6 px-2 bg-orange-500 rounded-lg opacity-70">
              <span className="text-sm text-white">
                <FaCheckCircle />
              </span>
              <p className="text-white md:text-base">Küchen Entsorgung</p>
            </div>
            <div className="flex items-center space-x-2 max-h-6 px-2 bg-orange-500 rounded-lg opacity-70">
              <span className="text-sm text-white">
                <FaCheckCircle />
              </span>
              <p className="text-white md:text-base">Bauschutt Entsorgung</p>
            </div>
            <div className="flex items-center space-x-2 max-h-6 px-2 bg-orange-500 rounded-lg opacity-70">
              <span className="text-sm text-white">
                <FaCheckCircle />
              </span>
              <p className="text-white md:text-base">
                Elektroschrott Entsorgung
              </p>
            </div>
          </div>

          <div className="flex md:flex-row py-8 px-8">
            <a href="tel:+4915254106617">
              <div className="flex shrink-0 items-center mr-8 md:text-lg text-white p-4 rounded-full bg-orange-500 hover:text-orange-400 transition-colors">
                <span className="px-2">
                  <FaPhoneAlt />
                </span>
                03081799980
              </div>
            </a>

            <a
              href="https://wa.me/yourwhatsappnumber"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex shrink-0 items-center mr-8 md:text-lg text-white bg-green-500 p-4 rounded-full hover:text-green-400 transition-colors">
                <span className="px-2">
                  <FaWhatsapp />{" "}
                </span>{" "}
                +4081799980
              </div>{" "}
            </a>
          </div>
        </div>{" "}
        {/* end of right side */}
      </div>
    </div>
  );
}

export default Hero;

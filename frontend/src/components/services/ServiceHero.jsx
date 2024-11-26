import React, { useEffect } from "react";
import { FaCheckCircle, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
//import { houseCleaning } from "../../assets/images";

const items = [
  "Termine innerhalb 24 Std.",
  "Keine versteckten Kosten",
  "Kostenlose Besichtigung",
  "100% Zufriedenheitsgarantie",
  "Besenreine Endreinigung",
  "Kostenlose Angebotserstellung",
  "Preiswerte Entsorgung",
  "Ausführliche Beratung",
];

const ServiceHero = ({ heroImage, title }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(heroImage);
  console.log("../../assets/images/" + heroImage);
  return (
    <div
      className="flex flex-col min-h-80% bg-cover"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/${heroImage})`,
      }}
    >
      <div className="flex flex-col text-white px-4">
        {/* left side */}
        <div className="mt-20">
          <h1 className="font-bold mb-4 mt-32 px-8 text-black">{title}</h1>
          <p className="font-bold text-white px-8 py-2 max-w-2xl rounded mb-6">
            flexibel. besenrein. zuverlässig.
          </p>
          <div className="md:w-1/2 md:min-w-[600px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8 mt-8 px-8">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 max-h-7 px-2 bg-orange-500 rounded-lg opacity-70"
                >
                  <span className="text-sm text-white">
                    <FaCheckCircle />
                  </span>
                  <p className="text-white md:text-base">{item}</p>
                </div>
              ))}

              <div className="flex flex-row py-8">
                <a href="tel:+4915254106617">
                  <div className="flex shrink-0 items-center mr-8 md:text-lg text-white bg-orange-500 p-4 rounded-full hover:text-orange-400 transition-colors">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;

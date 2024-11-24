import React from "react";
import {FaPhoneAlt, FaPhoneSlash} from 'react-icons/fa';


const Price = () => {
  return (
    <div className="w-full mx-auto p-8 bg-slate-200">
      <div className="flex flex-col md:flex-row md:px-36">
        <div className="md:mr-[100px]">
          <h2 className="mb-2">Keine versteckten Kosten, nur transparente Festpreise garantiert.</h2>
          <p className="text-xs text-justify">
            Kraftzone garantiert, dass unsere Angebote keine versteckten
            Gebühren enthalten. Gerne beraten wir Sie zum besten Angebot für
            Ihre gewünschte Reinigung in Berlin. Auch für den professionellen
            Versand und bundesweite Umzüge zu günstigen Preisen sind wir der
            richtige Partner. Sprechen Sie uns einfach an.
          </p></div>
        <div className="items-center mt-auto mb-auto text-center">
        <button className="mt-4 px-6 py-3 bg-white border border-gray-300 rounded-full shadow-md justify-center flex items-center w-full space-x-2 hover:bg-gray-50">
            <span className="font-medium text-gray-800 px-2"><FaPhoneAlt /></span> 03081799980
        </button>
        </div>
      </div>
    </div>
  );
};

export default Price;

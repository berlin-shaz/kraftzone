import React from 'react';
import {houseCleaning} from '../../assets/images';

const ServiceHero = () => {
  return (
    <div className='flex flex-col gap-1 bg-slate-700 min-h-screen'>
          <div className='max-sm:mt-16 mt-14'>
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${houseCleaning})` }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 flex flex-col text-white px-4">
        <h1 className="text-1xl md:text-2xl lg:text-3xl font-bold mb-4 mt-4">
          Professionelle Wohnungsauflösungen
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl font-bold bg-orange-500 text-black px-4 py-2 max-w-2xl rounded mb-6">
          flexibel. besenrein. zuverlässig.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mb-8">
          <div className="flex items-center space-x-2">
            <span className="text-orange-500 text-lg">✔️</span>
            <p>Termine innerhalb 24 Std.</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-orange-500 text-lg">✔️</span>
            <p>Keine versteckten Kosten</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-orange-500 text-lg">✔️</span>
            <p>Kostenlose Besichtigung</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-orange-500 text-lg">✔️</span>
            <p>100% Zufriedenheitsgarantie</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-orange-500 text-lg">✔️</span>
            <p>Besenreine Endreinigung</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-orange-500 text-lg">✔️</span>
            <p>Kostenlose Angebotserstellung</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-orange-500 text-lg">✔️</span>
            <p>Preiswerte Entsorgung</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-orange-500 text-lg">✔️</span>
            <p>Ausführliche Beratung</p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-2 px-4 rounded flex items-center">
            📞 Jetzt beraten lassen
          </button>
          <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded flex items-center">
            📝 Zur Schnellanfrage
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center">
            💬 WhatsApp-Kontakt
          </button>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default ServiceHero;

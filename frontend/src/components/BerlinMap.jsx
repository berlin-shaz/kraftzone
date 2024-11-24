import React from 'react';

const BerlinMap = () => {
  const districts = [
    { name: "Reinickendorf", x: "30%", y: "10%" },
    { name: "Pankow", x: "55%", y: "15%" },
    { name: "Spandau", x: "10%", y: "40%" },
    { name: "Mitte", x: "50%", y: "40%" },
    { name: "Charlottenburg-Wilmersdorf", x: "20%", y: "50%" },
    { name: "Neukölln", x: "60%", y: "70%" },
    { name: "Treptow-Köpenick", x: "80%", y: "80%" },
    { name: "Lichtenberg", x: "70%", y: "50%" },
    { name: "Marzahn-Hellersdorf", x: "80%", y: "30%" },
    { name: "Steglitz-Zehlendorf", x: "20%", y: "80%" },
    { name: "Tempelhof-Schöneberg", x: "40%", y: "60%" },
  ];

  const handleDistrictClick = (district) => {
    alert(`You clicked on ${district.name}`);
  };

  return (
    <div className="relative bg-black w-full h-[500px]">
      {/* SVG Map */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10,10 L90,10 L90,90 L10,90 Z" fill="#d4af37" />
        {/* Add district paths here */}
      </svg>

      {/* Clickable Points */}
      {districts.map((district, index) => (
        <button
          key={index}
          className="absolute bg-white text-black font-bold rounded-full w-8 h-8 flex items-center justify-center hover:bg-yellow-400"
          style={{ left: district.x, top: district.y }}
          onClick={() => handleDistrictClick(district)}
        >
          {index + 1}
        </button>
      ))}

      {/* Labels */}
      {districts.map((district, index) => (
        <span
          key={`label-${index}`}
          className="absolute text-white text-xs"
          style={{ left: `calc(${district.x} + 1rem)`, top: district.y }}
        >
          {district.name}
        </span>
      ))}
    </div>
  );
};

export default BerlinMap;

import React from "react";

import {visit, offer, can} from "../assets/images";



const steps = [
  {
    title: "Besichtigung",
    description:
      "Wir nehmen uns die Zeit für eine kostenlose Vor-Ort-Besichtigung, um die Anforderungen zu verstehen. (Über unser Kontaktformular können Sie uns auch gerne Bilder ihrer Räumlichkeiten senden). Bei uns gibt es keine versteckten Kosten – du weißt genau, was auf dich zukommt.",
    //icon: "", // Replace with the appropriate icon or icon component
    image: visit,
    number: "01",
  },
  {
    title: "Angebot",
    description:
      "In wenigen Stunden erhalten Sie von uns ein Festpreisangebot mit Wertanrechnungen. Unverbindlich und Stressfrei.",
    //icon: "🧹", // Replace with the appropriate icon or icon component
    image: offer,
    number: "02",
  },
  {
    title: "Entrümpelung",
    description:
      "Unsere Profis übernehmen die Arbeit mit höchster Präzision. Wir verstehen, dass Zeit wichtig ist, und entrümpeln Ihre Räumlichkeiten in Berlin günstig und schnell – „besenrein“.",
    //icon: "📅", // Replace with the appropriate icon or icon component
    image: can,
    number: "03",
  },
];

const Process = () => {
  return (
    <div className="bg-slate-700 text-white p-10 mx-auto flex flex-col md:flex-row items-center gap-8">
      <div className="min-w-[250px]">
      <h1 className=" text-white mb-8 text-center">
        Ihre Entrümpelung mit uns in wenigen Schritten
      </h1></div>
      <div className="flex flex-col md:flex-row gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative bg-slate-700 p-6 rounded-lg flex-1 flex flex-col items-center border-2 border-orange-500"
          >
            <div className="mb-4 text-orange-600"><img src={step.image} className="w-20 h-20 filter invert brightness-0 sepia saturate-200 hue-rotate-15" /></div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-300 text-center mb-4">{step.description}</p>
            <div className="absolute bottom-4 right-4 flex items-center justify-center bg-white text-blue-800 rounded-full w-8 h-8 font-bold">
              {step.number}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;

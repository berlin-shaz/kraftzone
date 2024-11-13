import React from "react";



const steps = [
  {
    title: "Besichtigung",
    description:
      "Wir nehmen uns die Zeit für eine kostenlose Vor-Ort-Besichtigung, um die Anforderungen zu verstehen. (Über unser Kontaktformular können Sie uns auch gerne Bilder ihrer Räumlichkeiten senden). Bei uns gibt es keine versteckten Kosten – du weißt genau, was auf dich zukommt.",
    //icon: "", // Replace with the appropriate icon or icon component
    number: "01",
  },
  {
    title: "Angebot",
    description:
      "In wenigen Stunden erhalten Sie von uns ein Festpreisangebot mit Wertanrechnungen. Unverbindlich und Stressfrei.",
    //icon: "🧹", // Replace with the appropriate icon or icon component
    number: "02",
  },
  {
    title: "Entrümpelung",
    description:
      "Unsere Profis übernehmen die Arbeit mit höchster Präzision. Wir verstehen, dass Zeit wichtig ist, und entrümpeln Ihre Räumlichkeiten in Berlin günstig und schnell – „besenrein“.",
    //icon: "📅", // Replace with the appropriate icon or icon component
    number: "03",
  },
];

const Process = () => {
  return (
    <div className="bg-slate-700 text-white p-10 rounded-xl max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
      
      <h2 className="text-3xl font-light text-white mb-8">
        Ihre Entrümpelung mit uns in wenigen Schritten
      </h2>
      <div className="flex flex-col md:flex-row gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative bg-slate-700 p-6 rounded-lg flex-1 flex flex-col items-start border-2 border-orange-500"
          >
            <div className="text-4xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-300 mb-4">{step.description}</p>
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

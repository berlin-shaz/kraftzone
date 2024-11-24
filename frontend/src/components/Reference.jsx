import {React, useState} from "react";
import {berlinerMietverein, kraftzoneKraft} from "../assets/images";

const reviews = [
  {
    content: `“Erdal Yildiz, Chef eines Entsorgungsunternehmens, hat sich auf die Räumung von Wohnungen spezialisiert, darunter auch stark vermüllte Wohnungen. Seine Arbeit ist nicht nur handwerklich, sondern gibt ihm auch Einblicke in das Leben der Menschen. Da die Berufsbezeichnung des Entrümplers nicht geschützt ist, gibt es große Qualitätsunterschiede in der Branche. Verträge sollten klar formuliert und auf Kubikmeterpreise verzichtet werden, da diese oft unklar sind. Zudem empfiehlt sich, seriöse Anbieter durch Empfehlungen zu finden. Alternativ kann man selbst Sperrmüll kostenfrei auf Recyclinghöfen abgeben, um Kosten zu sparen.”`,
    source: "Berliner Mieterverein",
    role: "Zufriedene Kunde",
  },
  {
    content: `“Ein weiterer Beispieltext für den Test. Hier könnten wir ein anderes Kundenfeedback oder eine andere Beschreibung anzeigen lassen, um zu sehen, wie der Inhalt wechselt.”`,
    source: "Ein anderer Kunde",
    role: "Kundenzufriedenheit",
  },
];

const Reference = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const handlePrev = () => {
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full bg-gray-50">
    <div className=" p-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
      {/* Left Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src={kraftzoneKraft}
          alt="Satisfied Client"
          loading="lazy"
          title="Kraftzone Kraft"
          width={500}
          height={500}
          className="rounded-xl object-cover"
        />
      </div>

      {/* Right Testimonial Section */}
      <div className="w-full md:w-1/2 text-gray-800">
        <p className="text-sm font-semibold text-gray-400 mb-0">
          Kundenbericht
        </p>
        <h2 className="mb-6">
        Was die unsere Kunden über uns sagen?
        </h2>

        <blockquote className="italic text-gray-600 mb-6 min-h-[200px]">
          {reviews[currentReview].content}{" "}
          <a
            class="text-orange-400 after:content-['_↗'] ..."
            href="https://www.berliner-mieterverein.de/magazin/online/mm1213/121322.htm"
            target="_blank"
          >
            mehr
          </a>
        </blockquote>

        {/* Client Info */}
        <div className="flex items-center mb-6">
          <img
            src={berlinerMietverein} // Replace with the client's image URL
            alt="Berliner Mietverein"
            title="Berliner Mietverein"
            loading="lazy"
            width={10}
            height={10}
            className="w-10 h-10 rounded-full mr-4"
          />
          <div>
            <p className="font-semibold text-gray-800">{reviews[currentReview].source}</p>
            <p className="text-sm text-gray-500">Zufriedene Kunde</p>
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="flex items-center gap-4">
          <div className="text-5xl font-bold text-gray-800">460+</div>
          <p className="text-gray-600">
            Professional and Experienced staff ready to help you
          </p>
        </div> */}

        {/* Navigation buttons */}
        <div className="mt-6 flex space-x-4">
          <button 
          onClick={handlePrev}
          className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center">
            &lt;
          </button>
          <button 
          onClick={handleNext}
          className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center">
            &gt;
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Reference;

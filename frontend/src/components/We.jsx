import React from "react";
import {Link as RouterLink} from 'react-router-dom';
import SplitPane from "react-split-pane";
import {
  FaShieldAlt,
  FaClock,
  FaMicrophone,
  FaCheck,
  FaCheckCircle,
  FaCheckSquare,
} from "react-icons/fa";
import BeforeAfterSlider from "./unilities/BeforeAfterSlider";
import { cleaning, beforeslider, afterslider } from "../assets/images";
import { Link } from "react-router-dom";

function We() {
  return (
    <div className="bg-slate-200 py-8 justify-center items-center">
      <div className=" px-4 md:px-40 mb-14">
        <p className="text-xs">
          Willkommen bei den Kraftzone!
        </p>
        <h3 className="mb-4">
          Wir entrümpeln & entsorgen in Berlin und Umgebung
        </h3>
        <p className="text-xs text-justify">
          Die Kraftzone bietet Dienstleistungen in Berlin und Umgebung an, die
          sich auf professionelle Entrümpelung, Haushalts- und
          Geschäftsauflösungen, sowie umweltgerechte Entsorgung spezialisieren.
          Ihr Service umfasst eine kostenlose Erstbesichtigung vor Ort, um die
          Bedürfnisse des Kunden besser zu verstehen und ein Festpreisangebot zu
          erstellen, das eventuelle Wertanrechnungen berücksichtigt. Das
          Unternehmen legt großen Wert auf Transparenz und Kostensicherheit ohne
          versteckte Gebühren.
        </p>{" "}
        <p className="text-xs text-justify">
          Kraftzone übernimmt komplette Auflösungen und Entsorgungen für private
          Haushalte, Unternehmen und gewerbliche Kunden. Dies beinhaltet das
          fachgerechte Entfernen von Müll, sichere Aktenvernichtung, und die
          besenreine Übergabe der Räume. Besonders bei Firmenauflösungen wird
          Diskretion und Datenschutz eingehalten. Zusätzlich bietet das
          Unternehmen maßgeschneiderte Lösungen und flexible Angebote für
          größere Auftragsvolumen.
        </p>
        <p className="text-xs text-justify">
          Kunden profitieren von einer schnellen und zuverlässigen Abwicklung
          und einem umweltbewussten Ansatz für Mülltrennung und Entsorgung, um
          eine umweltfreundliche und sichere Räumung zu gewährleisten.
        </p>
        <p>
          <span className="font-signature text-2xl mt-8">Kraftzone</span>
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row p-4 items-center space-y-6 md:space-y-6 md:space-x-10 bg-slate-100">
        {/* Right Section with Text and Service Cards */}
        <div className="w-full md:w-1/2">
          <p className="text-xs">Warum Kunden sich für uns entscheiden?</p>
          <h3 className="font-semibold mb-4">
            Preiswerte Entrümpelung inklusive Entsorgung für Privat & Gewerbe.
          </h3>
          <p>
            Wir bieten unseren Kunden maßgeschneiderte Dienstleistungen
            kostengünstige Aufräumarbeiten inklusive Entsorgung für private und
            gewerbliche Zwecke. Dank langjähriger Erfahrung arbeitet unser Team
            sicher, sauber und zuverlässig und entrümpelt und entsorgt für Sie
            jeden unnötigen Hausrat.
          </p>
          <p>
            Wir nehmen jede Bestellung in Berlin entgegen. Sie müssen sich weder
            um die ungünstigen Öffnungszeiten der Recyclinghöfe noch um die
            komplizierten Entsorgungsvorschriften Berlins kümmern. Mit
            langjähriger Erfahrung arbeiten wir mit Kompetenz und Sachverstand.
            Sie können sicher sein, dass Sie beim Reinigen keinen Finger rühren
            müssen.
          </p>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl mb-8 mt-8">
            <div className="flex items-center space-x-2 max-h-4 px-2">
              <span className="text-sm text-orange-500">
                <FaCheckCircle />
              </span>
              <p>100% Festpreis, keine Kubikmeterpreise</p>
            </div>
            <div className="flex items-center space-x-2 max-h-4 px-2">
              <span className="text-sm text-orange-500">
                <FaCheckCircle />
              </span>
              <p>Betriebs­haftpflicht­versicherung</p>
            </div>
            <div className="flex items-center space-x-2 max-h-4 px-2">
              <span className="text-sm text-orange-500">
                <FaCheckCircle />
              </span>
              <p>Besenreine Übergabe der Räumlichkeiten</p>
            </div>
            <div className="flex items-center space-x-2 max-h-4 px-2">
              <span className="text-sm text-orange-500">
                <FaCheckCircle />
              </span>
              <p>Kostenlose Besichtigung</p>
            </div>
            <div className="flex items-center space-x-2 max-h-4 px-2">
              <span className="text-sm text-orange-500">
                <FaCheckCircle />
              </span>
              <p>Wertanrechnung für Privat & Gewerbe</p>
            </div>
            <div className="flex items-center space-x-2 max-h-4 px-2">
              <span className="text-sm text-orange-500">
                <FaCheckCircle />
              </span>
              <p>Kurzfristige Termine</p>
            </div>
            <div className="flex items-center space-x-2 max-h-4 px-2">
              <span className="text-sm text-orange-500">
                <FaCheckCircle />
              </span>
              <p>Inklusive Demontage von Gegenständen</p>
            </div>
            <div className="flex items-center space-x-2 max-h-4 px-2">
              <span className="text-sm text-orange-500">
                <FaCheckCircle />
              </span>
              <p>Problemlos möglich</p>
            </div>
          </div>

          {/* Button */}
          <RouterLink to={'/anfrage'}> 
          <button className="mt-6 px-6 py-3 bg-orange-400 border border-gray-300 rounded-full shadow-md flex items-center space-x-2 hover:bg-orange-600">
            <span className="font-medium text-gray-800">Zum Anfrageformuler</span>
            
          </button></RouterLink>
        </div>

        {/* Left Section with Image */}
        <div className="relative w-full h-[400px] md:h-auto rounded-lg md:w-1/2">

          <BeforeAfterSlider beforeImage={beforeslider} afterImage={afterslider} />

        </div>
      </div>
    </div>
  );
}

export default We;

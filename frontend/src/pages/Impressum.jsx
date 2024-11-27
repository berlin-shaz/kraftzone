import React, {useEffect} from "react";
import {
  FaPhoneAlt,
  FaFax,
  FaMobileAlt,
  FaRegMoneyBillAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Impressum() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="py-10"></div>
      <section>
        <div className="px-8 md:px-60">
          <h1 className="text-center">Impressum & Haftungsausschluss</h1>

          <h2 className="mt-16">
            Verantwortlich für den Inhalt dieser Website gemäß §5 TMG:
          </h2>
          <p>KRAFTZONE</p>
          <p>Mustafa Sökezoglu</p>
          <p>Groninger Str. 33</p>
          <p>13347 Berlın</p>

          <h2 className="mt-4">Kontakt</h2>
          <p className="mt-2">Telefon:</p>
          <p className="flex flex-row items-center">
            <span className="mr-2">
              <FaPhoneAlt />
            </span>
            030 – 817 999 80
          </p>

          <p className="mt-2">Telefax:</p>
          <p className="flex flex-row items-center">
            <span className="mr-2">
              <FaFax />
            </span>
            030 – 817 999 84
          </p>

          <p className="mt-2">Mobil:</p>
          <p className="flex flex-row items-center">
            <span className="mr-2">
              <FaMobileAlt />
            </span>
            0171 – 922 33 56
          </p>

          <p className="mt-2">E-Mail:</p>
          <p className="flex flex-row items-center">
            <span className="mr-2">
              <MdEmail />
            </span>
            info@kraftzone.de
          </p>

          <p className="mt-2">Steuer-Nr.:</p>
          <p className="flex flex-row items-center">
            <span className="mr-2">
              <FaRegMoneyBillAlt />
            </span>
            23/537/02206
          </p>

          <h2 className="mt-4">Redaktionell verantwortlich</h2>
          <p>Mustafa Sökezoglu</p>
          <p>Groninger Str. 33</p>
          <p>13347 Berlın</p>
        </div>
      </section>
    </div>
  );
}

export default Impressum;

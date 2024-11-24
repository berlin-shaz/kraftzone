import React from "react";

function WashmachineDisposalInfo() {
  return (
    <section className="bg-gray-100 p-8 w-full md:px-40 mx-auto">
      <h1 className=" font-bold mb-6">
        Wir sind Ihre Profis für Abholung und Entsorgung Ihrer Waschmaschine
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="text-gray-800 space-y-4">
          <p>
            Wir bieten Ihnen das schnelle und professionelle Entsorgen Ihrer
            Waschmaschine und Abholung anderer Elektrogeräte in Berlin und im
            Umland. Dank der langjährigen Erfahrung unseres Kraftzone-Teams
            arbeiten wir stets kompetent, sauber, zuverlässig, holen ab,
            transportieren und entsorgen jedes schwere Gerät für Sie.
          </p>
          <p>
            Als professioneller Dienstleister entsorgen wir Ihre Waschmaschine
            vorschriftsgemäß und zuverlässig in ganz Berlin. Wir regeln die
            saubere Trennung vom Wassernetz, den Abtransport und veranlassen die
            fachgerechte und umweltschonende Müllentsorgung sowie die Verwertung
            der Wertstoffe.
          </p>

          <p>
            Zuverlässigkeit, Termintreue und die Ausrichtung am Kundenwunsch
            bilden das Herz unserer Services. Kraftzone entsorgt für Sie jedes
            noch so sperrige Objekt.
          </p>
        </div>

        {/* Right Column */}
        <div className="text-gray-800 space-y-4">
          <h4>Unser Entsorgungs-Service für Sie</h4>
          <p>
            Je nach Bedarf und der Ausgangssituation erstellen wir Ihnen gern
            ein individuelles Angebot. Nutzen Sie dazu am besten unseren
            Express-Service. Das Kraftzone-Team kommt dann innerhalb von 24
            Stunden zu Ihnen und erstellt ein Angebot für die Abholung und
            Entsorgung Ihrer Waschmaschine. Buchen Sie Kraftzone – Ihre
            Entsorgungsexperten in Berlin:
          </p>

          <ul className="list-disc list-inside text-sm">
            <li>Express-Service</li>
            <li>Angebotserstellung innerhalb von 24 Stunden möglich</li>
            <li>Wir entsorgen jedes Gerät für Sie</li>
            <li>Fachmännische Demontage</li>
            <li>Umweltschonende Entsorgung</li>
            <li>In und um Berlin</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WashmachineDisposalInfo;

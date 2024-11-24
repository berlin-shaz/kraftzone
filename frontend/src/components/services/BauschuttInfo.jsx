import React from "react";

function BauschuttInfo() {
  return (
    <section className="bg-gray-100 p-8 w-full md:px-40 mx-auto">
      <h1 className=" font-bold mb-6">
        Wir entsorgen Bauschutt in der Hauptstadt - in ganz Berlin.
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="text-gray-800 space-y-4">
          <p>
            Als professionelles Entsorgungsunternehmen entsorgen wir Ihren
            Bauschutt vorschriftsgemäß in ganz Berlin. Dank langjähriger
            Erfahrung arbeitet unser Team sicher, sauber und zuverlässig und
            verfügt auch über das nötige Equipment zur Entsorgung größerer
            Mengen von Bauschutt.
          </p>
          <p>
            Suchen Sie einen kompetenten Dienstleister in dem Bereich Entsorgung
            von Bauschutt auf Baustellen in Berlin? Wir führen fachgerecht und
            preisgünstig die Trennung und Entsorgung von Bauschutt durch oder
            stellen Ihnen die benötigten Bauschutt-Container bereit.
          </p>

          <p>
            Abfuhr und Entsorgung von Elektroschrott aller Art in Berlin und
            Umgebung bietet Ihnen der Entsorgungsdienst Kraftzone. Als
            erfahrener Dienstleister entsorgen wir Ihren Elektroschrott
            garantiert schnell, preiswert und umweltgerecht.
          </p>
        </div>

        {/* Right Column */}
        <div className="text-gray-800 space-y-4">
          <h4>Was zählt zu Bauschutt ?</h4>
          <p>
            Bei Bau- und Sanierungsarbeiten fallen stets große Mengen an
            Bauschutt an. Dabei muss mit Rücksicht auf die Umwelt eine strikte
            Aufteilung des Bauabfalls erfolgen. Zu Bauschutt zählen sowohl
            schwere als auch leichte Baumaterialien wie beispielsweise
            Backsteine, Mörtelreste, Fliesen, Klinkersteine, Bims, Porenziegel
            und vieles mehr. Falls Sie nicht sicher sein sollten, ob Ihre
            Abfälle zum Bauschutt gehören, fragen Sie einfach nach.
          </p>

          <p>
            Nach aufwändigen Bauarbeiten nimmt auch die Entsorgung des
            Bauschutts viel Zeit und Energie. Kraftzone kümmert sich um eine
            schnelle und saubere Entsorgung des anfallenden Schutts.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BauschuttInfo;

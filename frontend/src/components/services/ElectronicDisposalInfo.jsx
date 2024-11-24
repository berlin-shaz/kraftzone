import React from "react";
import { HiOutlineChatAlt2 } from "react-icons/hi";

function ElectronicDisposalInfo() {
  return (
    <section className="bg-gray-100 p-8 w-full md:px-40 mx-auto">
      <h2 className=" font-bold mb-6">
        Elektroschrott Entsorgung Berlin – Abholung & Entsorgung
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="text-gray-800 space-y-4">
          <p>
            Wir veranlassen die Trennung des Elektroschrotts in seine
            Bestandteile – ob es sich um eine Klimaanlage in Ihrer Privatwohnung
            oder um die Ausstattung einer Arztpraxis handelt, bei deren Umzug
            medizinische Geräte ausrangiert und verschrottet werden sollen –
            Kraftzone hilft schnell und kompetent. Unser Rückruf- und
            24h-Express-Service ermöglichen Ihnen eine einfache und schnelle
            Terminabsprache. Gern führen wir im Anschluss eine kostenfreie
            Besichtigung durch, um Ihnen einen Kostenvoranschlag erstellen zu
            können. Kontaktieren Sie Kraftzone – Ihre zuverlässige
            Entsorgungsfirma in Berlin!
          </p>
          <h3>Abholung und Entsorgung von Elektroschrott in Berlin</h3>
          <p>
            Abfuhr und Entsorgung von Elektroschrott aller Art in Berlin und
            Umgebung bietet Ihnen der Entsorgungsdienst Kraftzone. Als
            erfahrener Dienstleister entsorgen wir Ihren Elektroschrott
            garantiert schnell, preiswert und umweltgerecht.
          </p>
        </div>

        {/* Right Column */}
        <div className="text-gray-800 space-y-4">
          <h3>Was zählt zu Elektroschrott ?</h3>

          <ul className="text-sm list-inside list-disc">
            <li>Haushaltsgeräte und automatische Ausgabegeräte</li>
            <li>Informations- und Kommunikationsgeräte</li>
            <li>Kühl- und Klimageräte</li>
            <li>Geräte der Unterhaltungselektronik</li>
            <li>Haushaltsgeräte (Waschmaschinen, Wäschetrockner, etc.)</li>
            <li>Überwachungs- und Kontrollinstrumente, medizinische Geräte</li>
            <li>Sport- und Freizeitgeräte usw.</li>
          </ul>

          <h3>Elektroschrott fachgerecht entsorgen und recyceln</h3>
          <p>
            Es ist nicht unüblich, dass sich auf Lagerflächen, in Garagen oder
            Kellern mit den Jahren eine beachtliche Menge an Elektroschrott
            ansammelt. Küchenmaschinen, Telefonanlagen oder auch Computer
            gehören zur Kategorie Elektroschrott. Seit 2011 müssen sie nach
            EU-Recht gesondert entsorgt werden. Damit sollen sowohl Umwelt als
            auch wertvolle Ressourcen geschont werden.
            <p></p>Küchenmaschinen, Telefonanlagen oder auch Computer gehören
            zur Kategorie Elektroschrott. Seit 2011 müssen sie nach EU-Recht
            gesondert entsorgt werden. Damit sollen sowohl Umwelt als auch
            wertvolle Ressourcen geschont werden.
            <p></p>Angesichts der sinkenden Preise von Neugeräten lohnt es sich
            finanziell meist gar nicht, defekte Geräte reparieren zu lassen.
            Unser Team übernimmt den Abtransport und die Beseitigung Ihres
            Elektroschrotts. Dieser wird anschliessend bei Berliner
            Wertstoff-Annahmestellen zerlegt, getrennt und wieder verwertet.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ElectronicDisposalInfo;

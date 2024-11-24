import React from "react";
import { HiOutlineChatAlt2 } from "react-icons/hi";

function WasteCollectionInfo() {
  return (
    <section className="bg-gray-100 p-8 w-full md:px-40 mx-auto">
      <h2 className=" font-bold mb-6">
        Kraftzone entsorgt Ihren Sperrmüll – günstig & professionell
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="text-gray-800 space-y-4">
          <p>
            Egal, ob im Rahmen einer Wohnungsauflösung Berlin bzw.
            Haushaltsauflösung in Berlin oder nach dem Kauf neuer Möbel oder
            großer Elektrogeräte, immer wieder sammelt sich Sperrmüll an, der
            entsorgt werden muss. Große sperrige Gegenstände, für die kein Platz
            mehr zu Hause ist, müssen dem städtischen Entsorgungssystem
            ordnungsgemäß zugeführt werden. In die regulären Abfalltonnen passen
            sie nicht hinein und gehören da auch nicht hin, also muss man den
            Sperrmüll zu einem dafür vorgesehenen Recyclinghof schaffen. Ein
            geeignetes Fahrzeug wird benötigt und die Entsorgung kann ziemlich
            teuer werden. Außerdem muss man einiges an Körperkraft investieren,
            um solche Objekte wie Fahrräder, Möbel, Elektrogeräte, Teppiche oder
            Kinderwagen aus den Räumlichkeiten zu schaffen, in den Wagen zu
            befördern und bei der Entsorgung in Berlin wieder raus zu schaffen.
            Sperrmüll darf nicht einfach auf die Straße gestellt werden, auch
            wenn dies in Berlin immer noch häufig geschieht. Die Strafen sind
            hoch und der Schaden an der Umwelt kann es auch werden. Mit einer
            professionellen Sperrmüllentsorgung in Berlin mit dem Kraftzone-Team
            ist eine fachgerechte, umweltschonende und günstige Entsorgung Ihres
            Sperrmülls gewährleistet.
          </p>
        </div>

        {/* Right Column */}
        <div className="text-gray-800 space-y-4">
          <h3>
            Was gehört zum Sperrmüll? Wie erfolgt die Wohnungsauflösung in
            Berlin?
          </h3>
          <p>
            Als Sperrmüll bezeichnet man alle sperrigen Einrichtungs- und
            Haushaltsgegenstände, die aufgrund ihrer Größe oder ihres Gewichts
            nicht in die zugelassenen Abfalltonnen passen. Sperrmüll muss daher
            gesondert vom Restmüll abgeholt und entsorgt werden.
          </p>
          <p>
            Wir nehmen die Entrümpelung und Entsorgung in Berlin unter anderem
            in folgenden Fällen vor:
          </p>
          <p>
            Büroentrümpelungen, Dachbodenentrümpelung, Kellerentrümpelungen,
            Wohnungsentrümpelung, Gewerbeentrümpelung, Lagerräumungen,
            Grundstücksentrümpelungen und die Entsorgung von Sperrmüll jeder
            Art.
          </p>
          <p>
            Standardmäßig zählen folgende Einrichtungsgegenstände zum Sperrmüll
            in Berlin:
          </p>

          <ul className="text-sm list-inside list-disc">
            <li>Möbel</li>
            <li>Matratzen, Teppiche, Laminat</li>
            <li>Holzteile, Tür- und Fensterrahmen</li>
            <li>Plastikteile, Dachrinnen und Rohre</li>
            <li>Drahtglas und Fensterglas</li>
            <li>Teile von Sanitäranlagen</li>
          </ul>

          <p>
            Sperrmüll in Berlin wird in der Regel vom Hausmüll getrennt gelagert
            und kann selbst zu Recycling-Firmen gebracht werden. Oder Sie finden
            ein Entsorgungsunternehmen wie Kraftzone Berlin, das die meist
            zeitraubende und aufwendige Entsorgung des Sperrmülls für Sie
            schnell und preisgünstig übernimmt.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WasteCollectionInfo;

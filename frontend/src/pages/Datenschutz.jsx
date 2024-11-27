import React, { useEffect } from "react";

function Datenschutz() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="py-10"></div>
      <section>
        <div className="px-8 md:px-60 text-justify">
          <h1 className="text-center">Datenschutzerklärung gemäß DSGVO.</h1>

          <ul className="text-base list-decimal text-orange-500">
            <li>
              <h3>Datenschutz auf einen Blick</h3>
              <div>
                <h4 className="py-2">Allgemeine Hinweise</h4>
                <p className="text-gray-800">
                  Die folgenden Hinweise geben Ihnen gemäß DSGVO einen einfachen
                  Überblick darüber, was mit Ihren personenbezogenen Daten
                  passiert, wenn Sie diese Website besuchen. Personenbezogene
                  Daten sind alle Daten, mit denen Sie persönlich identifiziert
                  werden können. Ausführliche Informationen zum Thema
                  Datenschutz entnehmen Sie unserer unter diesem Text
                  aufgeführten Datenschutzerklärung.
                </p>
              </div>

              <div>
                <h4 className="py-2">Datenerfassung auf dieser Website</h4>

                <p className="text-gray-800">
                  Wer ist verantwortlich für die Datenerfassung auf dieser
                  Website?
                </p>
                <p className="text-gray-800">
                  Die Datenverarbeitung auf dieser Website erfolgt durch den
                  Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
                  „Hinweis zur verantwortlichen Stelle“ in dieser
                  Datenschutzerklärung entnehmen.
                </p>

                <p className="text-gray-800">Wie erfassen wir Ihre Daten?</p>
                <p className="text-gray-800">
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns
                  diese mitteilen. Hierbei kann es sich z. B. um Daten handeln,
                  die Sie in ein Kontaktformular eingeben.
                </p>

                <p className="text-gray-800">
                  Andere Daten werden automatisch oder nach Ihrer Einwilligung
                  beim Besuch der Website durch unsere IT-Systeme erfasst. Das
                  sind vor allem technische Daten (z. B. Internetbrowser,
                  Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung
                  dieser Daten erfolgt automatisch, sobald Sie diese Website
                  betreten.
                </p>

                <p className="text-gray-800">Wofür nutzen wir Ihre Daten?</p>
                <p className="text-gray-800">
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie
                  Bereitstellung der Website zu gewährleisten. Andere Daten
                  können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </p>

                <p className="text-gray-800">
                  Welche Rechte haben Sie bezüglich Ihrer Daten?
                </p>
                <p className="text-gray-800">
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über
                  Herkunft, Empfänger und Zweck Ihrer gespeicherten
                  personenbezogenen Daten zu erhalten. Sie haben außerdem ein
                  Recht, die Berichtigung oder Löschung dieser Daten zu
                  verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung
                  erteilt haben, können Sie diese Einwilligung jederzeit für die
                  Zukunft widerrufen. Außerdem haben Sie das Recht, unter
                  bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
                  personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen
                  ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                </p>

                <p className="text-gray-800">
                  Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können
                  Sie sich jederzeit an uns wenden.
                </p>
                <h4 className="py-2">
                  Analyse-Tools und Tools von Dritt­anbietern
                </h4>
                <p className="text-gray-800">
                  Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
                  ausgewertet werden. Das geschieht vor allem mit sogenannten
                  Analyseprogrammen.
                </p>

                <p className="text-gray-800">
                  Detaillierte Informationen zu diesen Analyseprogrammen finden
                  Sie in der folgenden Datenschutzerklärung.
                </p>
              </div>
            </li>

            <li>
              <h3>Hosting</h3>
              <h4 className="py-2">Webgo</h4>
              <p className="text-gray-800">
                Wir hosten unsere Website bei webgo. Anbieter ist die webgo
                GmbH, Heidenkampsweg 81, 20097, Hamburg (nachfolgend „webgo“)
                Wenn Sie unsere Website besuchen, erfasst webgo verschiedene
                Logfiles inklusive Ihrer IP-Adressen. Details entnehmen Sie der
                Datenschutzerklärung von webgo:
                https://www.webgo.de/datenschutz/. Die Verwendung von webgo
                erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben
                ein berechtigtes Interesse an einer möglichst zuverlässigen
                Darstellung unserer Website. Sofern eine entsprechende
                Einwilligung abgefragt wurde, erfolgt die Verarbeitung
                ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und
                § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von
                Cookies oder den Zugriff auf Informationen im Endgerät des
                Nutzers (z. B. für Device-Fingerprinting) im Sinne des TTDSG
                umfasst. Die Einwilligung ist jederzeit widerrufbar.
              </p>
              <h4 className="py-2">Auftragsverarbeitung</h4>
              <p className="text-gray-800">
                Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit dem
                oben genannten Anbieter geschlossen. Hierbei handelt es sich um
                einen datenschutzrechtlich vorgeschriebenen Vertrag, der
                gewährleistet, dass dieser die personenbezogenen Daten unserer
                Websitebesucher nur nach unseren Weisungen und unter Einhaltung
                der DSGVO verarbeitet.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Datenschutz;

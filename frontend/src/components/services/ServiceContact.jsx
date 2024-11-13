import React, { useState } from "react";
import { AiOutlineFile, AiOutlinePicture } from "react-icons/ai";

import { imgServiceContact } from "../../assets/images";

const ServiceContact = () => {
  const [step, setStep] = useState(1);
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    const updatedFiles = uploadedFiles.map((file) => ({
      file,
      progress: 100, // Assume upload is complete for demo purposes
    }));
    setFiles((prevFiles) => [...prevFiles, ...updatedFiles].slice(0, 10)); // Limit to 10 files
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  return (
    <div
      className="bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${imgServiceContact})` }}
    >
      <div className="flex flex-col md:flex-row bg-black bg-opacity-10 max-w-6xl mx-auto">
        {/* Left Text Section */}
        <div className="flex-1 pr-8">
          <h1 className="text-base text-orange-500 mb-4">
            Sie möchten die Wohnungsauflösung den Experten überlassen? Nutzen
            Sie unsere Schnellanfrage.
          </h1>
          <ul className="space-y-3 text-lg">
            <li className="flex items-center">
              <span className="text-orange-500 mr-2">✓</span> Wir antworten
              innerhalb von 24 Stunden
            </li>
            <li className="flex items-center">
              <span className="text-orange-500 mr-2">✓</span> Komplett kostenlos
              und unverbindlich
            </li>
            <li className="flex items-center">
              <span className="text-orange-500 mr-2">✓</span> Schnell in 2
              Minuten ausgefüllt
            </li>
            <li className="flex items-center">
              <span className="text-orange-500 mr-2">✓</span> Bequem zum
              individuellen Angebot
            </li>
          </ul>
        </div>

        {/* Right Form Section */}
        <div className="flex-1 bg-black bg-opacity-40 p-4 rounded-lg">
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold">Schnellanfrage</h2>
              <p className="text-yellow-500 mt-1 mb-4">Schritt 1/2</p>

              <div className="space-y-4">
                <div>
                  <label className="block mb-0">
                    Was möchten Sie entrümpeln? *
                  </label>
                  <select className="w-full p-1 bg-gray-800 text-white rounded-md">
                    <option value="">- Bitte wählen -</option>
                    <option value="Haus">Haus</option>
                    <option value="Wohnung">Wohnung</option>
                    <option value="Garage">Garage</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-0">
                    Wann möchten Sie entrümpeln? *
                  </label>
                  <input
                    type="date"
                    className="w-full p-1 bg-gray-800 text-white rounded-md"
                  />
                </div>

                <div>
                  <label className="block mb-2">
                    Wo möchten Sie entrümpeln? *
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 bg-gray-800 text-white rounded-md"
                    placeholder="Straße, Plz Ort"
                  />
                </div>

                <div>
              <label className="block mb-2">Haben Sie aussagekräftige Fotos?</label>
              <div className="border-2 border-dashed border-gray-500 p-4 rounded-md text-center">
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  onChange={handleFileChange}
                  multiple
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <AiOutlinePicture className="mx-auto text-3xl mb-2" />
                  <p>Datei hier ablegen oder Dateien durchsuchen</p>
                </label>
                <p className="text-gray-400 mt-1">{`${files.length} of 10`}</p>
              </div>
              {files.map((fileObj, index) => (
                <div key={index} className="mt-2 flex items-center">
                  <AiOutlineFile className="text-xl mr-2" />
                  <p className="flex-1 truncate">{fileObj.file.name} ({(fileObj.file.size / 1024).toFixed(2)} KB)</p>
                  <p className="text-sm text-gray-400">100%</p>
                  <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${fileObj.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

                <div>
                  <label className="block mb-2">Anmerkungen / Details</label>
                  <textarea
                    className="w-full p-2 bg-gray-800 text-white rounded-md"
                    rows="3"
                  ></textarea>
                </div>
              </div>

              <button
                onClick={handleNextStep}
                className="w-full bg-yellow-500 text-black font-semibold py-2 mt-4 rounded-md hover:bg-yellow-600"
              >
                Weiter
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold">Schritt 2</h2>
              <p className="text-yellow-500 mt-1 mb-4">
                Weitere Informationen...
              </p>
              {/* Add the rest of your form fields for step 2 here */}
              <button
                onClick={() => setStep(1)}
                className="w-full bg-gray-500 text-white font-semibold py-2 mt-4 rounded-md hover:bg-gray-600"
              >
                Zurück
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceContact;

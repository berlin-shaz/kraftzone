import React, { useState } from "react";
import axios from "axios";
import { AiOutlineFile, AiOutlinePicture } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Inquiry = () => {
  const [step, setStep] = useState(1);
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    address: "",
    number: "",
    orderDate: "",
    service: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(""); // Clear previous status messages

    try {
      await axios.post("http://localhost:5001/send-order", formData);
      setStatus("Email sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
        address: "",
        number: "",
        orderDate: "",
        service: "",
      }); // Reset form
    } catch (error) {
      setStatus("Failed to send email. Please try again.");
    }
  };

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
    <div className=" items-center justify-center py-8 px-4">
        <div className="w-full md:px-56">
          Sie haben etwas zu entrümpeln?
          <h2>Jetzt unverbindliches Angebot anfordern</h2>
          <p>
            Sie planen eine Entrümpelung Ihres Kellers, Ihrer Garage oder Ihres
            Gartens? Auch komplette Haushalts- und Wohnungsauflösungen sind für
            unsere Entrümpelungsprofis kein Problem. Gerne senden wir Ihnen ein
            individuelles und kostenloses Angebot zu. Nutzen Sie hierfür einfach
            unser unverbindliches Anfrageformular. Unsere Mitarbeiter antworten
            Ihnen innerhalb von 48 Stunden.</p><p> Selbstverständlich erreichen Sie uns
            zum Beispiel für ein kostenloses Beratungsgespräch oder die
            kurzfristige Terminvereinbarung auch telefonisch unter der Rufnummer
            030 – 817 999 80
          </p>
          <p className="text-end mt-12">Alle mit einem <span className="text-red-500">*</span> gekennzeichneten Felder sind Pflichtangaben.</p>
        </div>
      <div className="w-full flex flex-col md:flex-row md:px-56 mx-auto">
        
        {/* Right Form Section */}
        <div className="flex-1 bg-gray-300 bg-opacity-20 p-4 rounded-lg">
          {status && <p className="mb-4 text-orange-400">{status}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block mb-1 px-4">Anrde</label>
            <div className="flex items-center space-x-4 px-4">
              {/* Man Option */}
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="man"
                  className="form-radio h-5 w-5 text-orange-500 focus:ring-orange-400"
                />
                <span className="text-gray-700">Herr</span>
              </label>

              {/* Woman Option */}
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="woman"
                  className="form-radio h-5 w-5 text-orange-500 focus:ring-orange-400"
                />
                <span className="text-gray-700">Frau</span>
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
              <div>
                <label className="block mb-1">Vollständiger Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 bg-white text-black rounded-md"
                  placeholder="Name"
                />
              </div>

              <div>
                <label className="block mb-1">Telefonnummer</label>
                <input
                  type="text"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  className="w-full p-2 bg-white text-black rounded-md"
                  placeholder="telefone nummer"
                />
              </div>

              <div>
                <label className="block mb-1">E-Mail</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 bg-white text-black rounded-md"
                  placeholder="E-Mail Adresse"
                />
              </div>

              <div>
                <label className="block mb-1">Was möchten Sie?</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-2 bg-white text-black rounded-md"
                >
                  <option>--bitte wahlen Sie ein Service--</option>
                  <option>Hausauflösung</option>
                  <option>Büroauflösung</option>
                  <option>Küchenentrümpelung</option>
                  <option>Sperrmüllabholung</option>
                  <option>Kellerentrümpelung</option>
                  <option>Tatortreinigung</option>
                  <option>Kühlschrank Entsorgung</option>
                  <option>Waschmaschine Entsorgung</option>
                  <option>Küchen Entsorgung</option>
                  <option>Bauschutt Entsorgung</option>
                  <option>Elektroschrut Entsorgung</option>
                </select>
              </div>

              <div>
                <label className="block mb-2">
                  Wann möchten Sie entrümpeln? *
                </label>
                <input
                  type="date"
                  name="orderDate"
                  value={FormData.orderDate}
                  onChange={handleChange}
                  className="w-full p-1 bg-white text-black rounded-md"
                />
              </div>

              <div>
                <label className="block mb-2">
                  Wo möchten Sie entrümpeln?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  value={FormData.address}
                  onChange={handleChange}
                  className="w-full p-2 bg-white text-black rounded-md"
                  placeholder="Straße, Plz Ort"
                />
              </div>
            </div>
            <div className="px-4">
            <label className="block mb-1">Anmerkungen / Details</label>
              <textarea
                name="message"
                value={FormData.message}
                onChange={handleChange}
                className="w-full p-2 bg-white text-black rounded-md"
                rows="3"
                placeholder="Anmerkungen / Details"
              ></textarea>
            </div>

            {
              <div className="px-4">
                <label className="block mb-2">
                  Haben Sie aussagekräftige Fotos?
                </label>
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
                    <p className="flex-1 truncate">
                      {fileObj.file.name} (
                      {(fileObj.file.size / 1024).toFixed(2)} KB)
                    </p>
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
            }

            <div className="px-4">
              <div className="p-4 border-gray-300 border-4 rounded-md">
                <p>
                  Wir verwenden Ihre Daten ausschließlich gemäß unserer
                  <NavLink to={'/datenschutz'} className="text-orange-500"> Datenschutzerklärung.</NavLink>
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white font-semibold py-2 mt-4 rounded-md hover:bg-orange-600"
              >
                Senden
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Inquiry;

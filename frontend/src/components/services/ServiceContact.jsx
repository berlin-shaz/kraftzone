import React, { useState } from "react";
import axios from "axios";
import { AiOutlineFile, AiOutlinePicture } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";


const ServiceContact = () => {
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
    <div className="flex items-center justify-center py-8 px-4">
      <div className="flex flex-col md:flex-row md:px-40 mx-auto">
        {/* Left Text Section */}
        <div className="flex-1 w-full md:min-w-[600px]">
          <p className="text-xs mt-8">
            Kontaktieren Sie Kraftzone – Ihre Fachleute für Haushaltsauflösungen
            in Berlin!
          </p>
          <h2 className="text-base text-orange-500 mb-2">
            Unverbindliches Angebot anfordern.{" "}
          </h2>
          <p className="">
            Fordern Sie jetzt ein unverbindliches Angebot an Planen Sie, Ihren
            Keller, Ihre Garage oder Ihren Garten zu entrümpeln? Auch komplette
            Haus- und Wohnungsräumungen sind für unsere Räumungsprofis kein
            Problem. Gerne unterbreiten wir Ihnen ein individuelles und
            kostenloses Angebot. Nutzen Sie einfach unser unverbindliches
            Anfrageformular. Unsere Mitarbeiter werden Ihnen innerhalb von
            wenigen Stunden antworten.
          </p>
          <ul className="py-8 text-sm">
            <li className="flex items-center">
              <span className="text-orange-500 mr-2">
                <FaCheckCircle />
              </span>{" "}
              Wir antworten innerhalb von 24 Stunden
            </li>
            <li className="flex items-center">
              <span className="text-orange-500 mr-2">
                <FaCheckCircle />
              </span>{" "}
              Komplett kostenlos und unverbindlich
            </li>
            <li className="flex items-center">
              <span className="text-orange-500 mr-2">
                <FaCheckCircle />
              </span>{" "}
              Schnell in 2 Minuten ausgefüllt
            </li>
            <li className="flex items-center">
              <span className="text-orange-500 mr-2">
                <FaCheckCircle />
              </span>{" "}
              Bequem zum individuellen Angebot
            </li>
          </ul>
        </div>

        {/* Right Form Section */}
        <div className="flex-1 bg-orange-500 bg-opacity-20 p-4 rounded-lg">
          <h2 className="text-gray-700 font-bold">Schnellanfrage</h2>
          {status && <p className="mb-4 text-orange-400">{status}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
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
              <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full p-2 bg-white text-black rounded-md">
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
              {/* <label className="block mb-2">
                    Wann möchten Sie entrümpeln? *
                  </label> */}
              <input
                type="date"
                name="orderDate"
                value={FormData.orderDate}
                onChange={handleChange}
                className="w-full p-1 bg-white text-black rounded-md"
              />
            </div>

            <div>
              {/* <label className="block mb-2">
                    Wo möchten Sie entrümpeln? *
                  </label> */}
              <input
                type="text"
                name="address"
                value={FormData.address}
                onChange={handleChange}
                className="w-full p-2 bg-white text-black rounded-md"
                placeholder="Straße, Plz Ort"
              />
            </div>

           {/*  <div>
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
                    {fileObj.file.name} ({(fileObj.file.size / 1024).toFixed(2)}{" "}
                    KB)
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
            </div> */}

            <div>
              {/* å */}
              <textarea
                name="message"
                value={FormData.message}
                onChange={handleChange}
                className="w-full p-2 bg-white text-black rounded-md"
                rows="3"
                placeholder="Anmerkungen / Details"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white font-semibold py-2 mt-4 rounded-md hover:bg-orange-600"
            >
              Senden
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceContact;

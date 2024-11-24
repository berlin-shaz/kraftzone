// src/components/ContactForm.js
import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(""); // Clear previous status messages

    try {
      await axios.post("http://localhost:5001/send-email", formData);
      setStatus("Email sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      setStatus("Failed to send email. Please try again.");
    }
  };

  return (
    <div className="w-full bg-white flex flex-col md:flex-row p-8 md:px-44">
      {/* right side */}
      <div className="w-full md:w-1/2 mt-16">
        <h2>Sie haben etwas zu entsorgen?</h2>
        <p>Wenn Sie noch weitere Informationen benötigen, rufen Sie uns bitte an, oder senden Sie uns eine E-Mail.</p>
      </div>

      {/* left side */}
    <div className="mx-auto bg-gray-100 p-6 rounded-lg w-full md:w-1/2">
      <h2 className="mb-4">Kontakt Uns</h2>
      {status && <p className="mb-4 text-orange-400">{status}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Nachricht</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600 hover:marker"
        >
          Absenden
        </button>
      </form>
    </div>
    </div>
  );
};

export default ContactForm;

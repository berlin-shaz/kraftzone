import React, { useState } from 'react';

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    sendCopy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formular erfolgreich gesendet!');
    setFormData({
      name: '',
      email: '',
      message: '',
      sendCopy: false,
    });
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
      <div className="max-w-3xl w-full bg-gray-50 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-semibold text-center mb-6 text-orange-500">Noch Frage ?</h2>
        
        {/* Kontaktformular */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-100 text-orange-500"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-Mail-Adresse"
            required
            className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-100 text-orange-500"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Nachricht"
            required
            className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-100 text-orange-500 h-32 resize-none"
          ></textarea>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              name="sendCopy"
              checked={formData.sendCopy}
              onChange={handleChange}
              className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
            />
            <label htmlFor="sendCopy" className="ml-2 text-orange-500 text-sm">
              Schicken Sie mir eine Kopie dieser Nachricht
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-400 transition-colors duration-300"
          >
            SENDEN
          </button>
        </form>
      </div>
    </div>
  );
}

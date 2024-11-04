import React from "react";

const Price = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-white">
      {/* Header Section */}
      <div className="mb-10">
        <h3 className="text-sm uppercase text-gray-400 font-semibold mb-2">Pricing Table</h3>
        <h2 className="text-4xl font-light text-gray-800 mb-4">
          The best pricing to help you!
        </h2>
        <p className="text-gray-600">
          We carefully screen all of our cleaners, so you can rest assured that your home would receive the absolute highest quality of service providing.
        </p>
      </div>

      {/* Pricing Cards Section */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Small Business Card */}
        <div className="p-6 border rounded-xl shadow-md text-gray-800">
          <h4 className="text-lg font-medium text-gray-500">Small Business</h4>
          <div className="flex items-baseline mt-4 mb-4">
            <span className="text-3xl font-bold text-gray-800">$</span>
            <span className="text-5xl font-bold text-gray-800">299</span>
            <span className="text-lg font-medium text-gray-500">/mo</span>
          </div>
          <ul className="text-gray-600 mb-6 space-y-2">
            <li>✅ Custom Schedules Everyday</li>
            <li>✅ Washrooms Cleaning</li>
            <li>✅ Waiting Area Cleaning</li>
            <li>✅ Desks And Workstations Cleaning</li>
            <li>✅ Floor Cleaning</li>
          </ul>
          <button className="bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-full w-full">
            Purchase Now &rarr;
          </button>
        </div>

        {/* Large Business Card (Highlighted) */}
        <div className="p-6 rounded-xl shadow-md text-gray-800 bg-orange-500">
          <h4 className="text-lg font-medium text-gray-700">Large Business</h4>
          <div className="flex items-baseline mt-4 mb-4">
            <span className="text-3xl font-bold text-gray-800">$</span>
            <span className="text-5xl font-bold text-gray-800">350</span>
            <span className="text-lg font-medium text-gray-500">/mo</span>
          </div>
          <ul className="text-gray-700 mb-6 space-y-2">
            <li>✅ Custom Schedules Everyday</li>
            <li>✅ Washrooms Cleaning</li>
            <li>✅ Waiting Area Cleaning</li>
            <li>✅ Desks And Workstations Cleaning</li>
            <li>✅ Floor Cleaning</li>
          </ul>
          <button className="bg-gray-900 text-white font-semibold py-2 px-4 rounded-full w-full">
            Purchase Now &rarr;
          </button>
        </div>

        {/* Big Business Card */}
        <div className="p-6 border rounded-xl shadow-md text-gray-800">
          <h4 className="text-lg font-medium text-gray-500">Big Business</h4>
          <div className="flex items-baseline mt-4 mb-4">
            <span className="text-3xl font-bold text-gray-800">$</span>
            <span className="text-5xl font-bold text-gray-800">499</span>
            <span className="text-lg font-medium text-gray-500">/mo</span>
          </div>
          <ul className="text-gray-600 mb-6 space-y-2">
            <li>✅ Custom Schedules Everyday</li>
            <li>✅ Washrooms Cleaning</li>
            <li>✅ Waiting Area Cleaning</li>
            <li>✅ Desks And Workstations Cleaning</li>
            <li>✅ Floor Cleaning</li>
          </ul>
          <button className="bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-full w-full">
            Purchase Now &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Price;

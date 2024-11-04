import React from "react";

const Reference = () => {
  return (
    <div className="bg-gray-50 p-10 rounded-xl max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
      {/* Left Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src="https://via.placeholder.com/500" // Replace with the actual image URL
          alt="Satisfied Client"
          className="rounded-xl object-cover"
        />
      </div>

      {/* Right Testimonial Section */}
      <div className="w-full md:w-1/2 text-gray-800">
        <h3 className="text-sm font-semibold text-gray-400 uppercase mb-2">Testimonials</h3>
        <h2 className="text-3xl font-light text-gray-900 mb-6">
          Trusted by thousands of people & companies.
        </h2>

        <blockquote className="text-xl italic text-gray-600 mb-6">
          “I would recommend practitioners at this center to everyone! They are
          great to work with and are excellent trainers. Thank you all!”
        </blockquote>

        {/* Client Info */}
        <div className="flex items-center mb-6">
          <img
            src="https://via.placeholder.com/40" // Replace with the client's image URL
            alt="Adeline Wood"
            className="w-10 h-10 rounded-full mr-4"
          />
          <div>
            <p className="font-semibold text-gray-800">Adeline Wood</p>
            <p className="text-sm text-gray-500">Satisfied Client</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex items-center gap-4">
          <div className="text-5xl font-bold text-gray-800">460+</div>
          <p className="text-gray-600">
            Professional and Experienced staff ready to help you
          </p>
        </div>

        {/* Navigation buttons */}
        <div className="mt-6 flex space-x-4">
          <button className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center">
            &lt;
          </button>
          <button className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reference;

import React, { useState } from 'react';

const BeforeAfterSlider = ({ beforeImage, afterImage }) => {
  /* const [sliderPosition, setSliderPosition] = useState(50); // Start in the middle

  const handleMouseMove = (e) => {
    const container = e.currentTarget.getBoundingClientRect();
    const position = ((e.clientX - container.left) / container.width) * 100;
    setSliderPosition(position);
  }; */

  const [sliderPosition, setSliderPosition] = useState(50); // Start slider in the middle

  const handleMouseMove = (e) => {
    const container = e.currentTarget.getBoundingClientRect();
    const position = ((e.clientX - container.left) / container.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position))); // Clamp values between 0 and 100
  };

  return (
    <div 
      className="relative w-full h-[400px] overflow-hidden group" 
      onMouseMove={handleMouseMove}
    >
      {/* Before Image */}
      <div
        className="absolute inset-0 z-10"
        style={{
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
        }}
      >
        <img
          src={beforeImage}
          alt="bevor"
          title='schmutzig'
          loading='lazy'
          width={612}
          height={408}
          className="h-full w-full object-cover"
        />
      </div>

      {/* After Image */}
      <div className="absolute inset-0">
        <img
          src={afterImage}
          alt="nach"
          title='sauber'
          loading='lazy'
          width={612}
          height={408}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Divider */}
      <div
        className="absolute inset-y-0"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="w-2 h-full bg-orange-500 transform -translate-x-1/2"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center cursor-pointer">
          ↔️
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;

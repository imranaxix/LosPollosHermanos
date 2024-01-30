import React from 'react';

const MapLoader = () => {
  return (
    <div className='h-[400px] w-[100%] bg-gray-300 animate-pulse relative'>
      {/* Custom styling to resemble a map */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300 opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-gray-350 w-3/4 h-3/4 rounded-lg"></div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg">
        Loading Map...
      </div>
    </div>
  );
};

export default MapLoader;

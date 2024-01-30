import React from 'react'

const loaderFood = () => {
  return (
    <div className="rounded-2xl flex flex-col justify-center items-center py-10 bg-gray-100 border-2 border-[gray-100] animate-pulse">
      <div className="h-[200px] mb-4 w-[300px] bg-gray-300"></div>
      <div className="p-4 text-center w-[280px] border-t-2">
        <h1 className="text-2xl font-bold mb-4 bg-gray-300 h-6">‎ </h1>
        <p className="max-w-28 text-lg bold py-[1px] bg-gray-300 h-4"></p>
      </div>
    </div>
  );
};

export default loaderFood

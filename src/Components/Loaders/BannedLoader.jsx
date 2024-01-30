import React from 'react';

const BannedLoader = () => {
  return (
    <div className='px-10 lg:px-24 grid my-20'>

      <div className='flex items-center text-3xl mb-6 font-bold'>
        <div className='bg-gray-300 w-10 h-10 animate-pulse mr-4'></div>
        <div className='bg-gray-300 w-20 h-6 animate-pulse'></div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0'>
        <div className='bg-gray-300 w-full h-[250px] lg:h-[350px] animate-pulse'></div>
        <div className={`flex flex-col items-center justify-center text-gray-300`}>
         <div className='bg-gray-300 w-4/5 h-4 animate-pulse mb-4'></div>
          <div className='bg-gray-300 w-3/5 h-4 animate-pulse'></div>
        </div>
      </div>
      
    </div>
  );
};

export default BannedLoader;

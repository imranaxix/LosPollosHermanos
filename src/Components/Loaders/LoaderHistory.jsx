import React from 'react';

const LoaderHistory = () => {
  return (
    <div className='px-10 lg:px-24 grid my-20'>

      <div className='flex items-center text-3xl mb-6 font-bold '>
        <div className='bg-gray-300 w-full h-full px-[250px] py-[150px] mr-[100px] animate-pulse hidden lg:block'></div>
        <div >
        <div className='bg-gray-300 w-20 h-6 px-[150px] lg:px-[200px] animate-pulse mb-6 rounded-xl'></div>
        <div className='bg-gray-300 w-20 h-6 ml-4 px-[125px] lg:px-[150px] animate-pulse  mb-6 rounded-xl'></div>
        <div className='bg-gray-300 w-20 h-6 ml-8 px-[100px] lg:px-[100px] animate-pulse rounded-xl'></div>
        </div>
      </div>

      
      
    </div>
  );
};

export default LoaderHistory;

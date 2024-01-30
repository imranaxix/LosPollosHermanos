import React from 'react'

const LoaderPeople = () => {
  return (
    <div>
      <div className='flex justify-start items-start mb-12'>
        <div className='w-[65px] h-[65px] bg-gray-200 object-cover mr-4 rounded-full animate-pulse'></div>
        <div className=' flex flex-col justify-start items-center my-2'>
          <div className='bg-gray-300 w-10 h-4 px-[60px] animate-pulse mb-4 rounded-xl'></div>
         
          <div className='bg-gray-300 w-10 h-4 px-[50px]  animate-pulse rounded-xl'></div>
          
          
        </div>
      </div>
    </div>
  );
};

export default LoaderPeople

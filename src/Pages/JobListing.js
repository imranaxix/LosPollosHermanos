import React, { useEffect } from 'react';
import { useDarkMode } from '../Components/DarkModeContex'

import Navbar from '../Components/Navbar';
import Jobs from '../Components/Jobs';
import Footer from '../Components/Footer';




const JobListing = () => {
  const { darkMode } = useDarkMode();
  useEffect(() => {
    
    document.body.style.backgroundColor = darkMode ? '#1a1d1d' : 'white';
    window.scrollTo(0, 0);
    return () => {
      document.body.style.backgroundColor = ''; 
    };
  }, [darkMode]);

  return (
    <div className={` w-full h-auto duration-75 ease-in flex flex-col ${darkMode?'bg-[#171818]  text-yellow-400':'bg-[#f7f7f7] text-red-700'}`}>
      <Navbar/>
      <Jobs/>
      <Footer/>
      
    </div>
  )
}

export default JobListing
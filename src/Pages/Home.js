import React, { useEffect } from 'react';
import { useDarkMode } from '../Components/DarkModeContex'

import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Service from '../Components/Service';
import Footer from '../Components/Footer';

const Home = () => {
  const { darkMode } = useDarkMode();
  useEffect(() => {
    
    document.body.style.backgroundColor = darkMode ? '#1a1d1d' : 'white';
    window.scrollTo(0, 0);
    return () => {
      document.body.style.backgroundColor = ''; 
    };
  }, [darkMode]);

  return (
    <div className={`w-full h-auto duration-75 ease-in ${darkMode ? 'bg-[#1a1d1d] text-yellow-400' : 'bg-gray-100 text-red-700'}`}>
      <Navbar />
      <Hero  />
      <Service/>
      <Footer/>
    </div>
  );
};

export default Home;

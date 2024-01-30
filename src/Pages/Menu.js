import React, { useEffect } from 'react';
import { useDarkMode } from '../Components/DarkModeContex'
import Navbar from '../Components/Navbar'
import MenuComp from '../Components/MenuComp'
import Footer from '../Components/Footer';



const Menu = () => {
  const { darkMode } = useDarkMode();
  useEffect(() => {
    
    document.body.style.backgroundColor = darkMode ? '#1a1d1d' : 'white';
    window.scrollTo(0, 0);
    return () => {
      document.body.style.backgroundColor = ''; 
    };
  }, [darkMode]);




  return (
    <div className={` w-full h-auto duration-75 ease-in flex flex-col ${darkMode?'bg-[#1a1d1d] text-yellow-400':'bg-gray-100 text-red-700'} `}>
      <Navbar />
      <MenuComp/>
      <Footer/>
    </div>
  )
}

export default Menu
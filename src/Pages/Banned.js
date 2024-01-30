import React, {useEffect} from 'react'
import { useDarkMode } from '../Components/DarkModeContex'
import Navbar from '../Components/Navbar'
import BannedToLph from '../Components/BannedToLph'
import Footer from '../Components/Footer'



const Banned = () => {
  const { darkMode } = useDarkMode();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.backgroundColor = darkMode ? '#1a1d1d' : 'white';

    return () => {
      document.body.style.backgroundColor = ''; 
    };
  }, [darkMode]);

  return (
    <div className={` w-full h-auto duration-75 ease-in flex flex-col ${darkMode?'bg-[#1a1d1d] text-yellow-400':'bg-gray-100 text-red-700'} `}>
      <Navbar/>
      <BannedToLph/>
      <Footer/>
    </div>
  )
}

export default Banned
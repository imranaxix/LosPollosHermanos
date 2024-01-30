import React, {useEffect} from 'react'
import { useDarkMode } from '../Components/DarkModeContex'
import Navbar from '../Components/Navbar'
import History from '../Components/history'
import Footer from '../Components/Footer'




const OurHistory = () => {
  const { darkMode } = useDarkMode();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.backgroundColor = darkMode ? '#1a1d1d' : 'white';

    return () => {
      document.body.style.backgroundColor = ''; 
    };
  }, [darkMode]);
  return (
    <div className={` w-full h-auto duration-75 ease-in flex flex-col ${darkMode?'bg-[#171818] text-yellow-400':'bg-[#fefefe] text-red-700'} `}>
      <Navbar/>
      <History/>
      
      <Footer/>
    </div>
  )
}

export default OurHistory
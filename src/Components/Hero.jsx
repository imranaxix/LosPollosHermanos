import React, {useEffect} from 'react';
import BgCover from '../../src/Components/assests/vector3.png';
import Gus from '../../src/Components/assests/gus.png';
import Fring from '../../src/Components/assests/Fring.png';
import { useDarkMode } from './DarkModeContex';

const bgImg = {
  backgroundImage: `url(${BgCover})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  width: '100%',
  height: '100%',
};

const Hero = () => {
  const { darkMode } = useDarkMode();
  
  useEffect(() => {
    
    document.body.style.backgroundColor = darkMode ? '#1a1d1d' : 'white';

    return () => {
      document.body.style.backgroundColor = ''; 
    };
  }, [darkMode]);

  return (
    <div style={bgImg} className={`min-h-[500px] md:min-h-[550px] ${darkMode?'bg-[#121315]':'bg-[#f7f7f7]'} sm:min-h-[600px] flex justify-center items-center mt-8 md:mt-20 `} >
      <div className='container pb-0 mx-auto'>
        <div className='flex justify-center items-center sm:pl-0 pl-5'>
          <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-start md:text-center sm:text-left '>
            <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>Welcome!</h1>
            <p className={`text-base max-w-[30rem] ${darkMode?'text-white':'text-black'}`}>"It's the best ingredients. The spiciest spices. All prepared with loving care! And always delivered with a friendly smile. That's the Los Pollos Hermanos promise."</p>
            <span className='flex sm:justify-end justify-start ml-10 font-bold text-lg'>Gus Fring — {darkMode ? 'Drug Lord' : 'Owner and Proprietor'}</span>
          </div>

          <div className='flex justify-center items-center'>
            <img src={darkMode ? Fring : Gus} className='lg:w-[450px] mx-auto w-[400px] hidden md:block' alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

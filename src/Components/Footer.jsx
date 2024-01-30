import React, {useEffect} from 'react';
import { useDarkMode } from './DarkModeContex';
import logo from './assests/logo.png'
import play from './assests/play.jpg'
import app from './assests/app.jpg'
import pay from './assests/pay.png'
import './style.css';




const Footer = () => {
  const { darkMode} = useDarkMode();
  useEffect(() => {
    
    document.body.style.backgroundColor = darkMode ? '#1a1d1d' : 'white';

    return () => {
      document.body.style.backgroundColor = ''; 
    };
  }, [darkMode]);
  return (
    
    <div className={`flex flex-wrap flex-row justify-center md:justify-between items-start py-16 px-20 text-base w-full h-full ${darkMode?'bg-[#1c1e21] text-white ftr1 ':'bg-gray-100 text-black ftr'}`}>
       <div className='flex justify-between items-start py-10 md:py-6 lg:py-0'>
       <img className=" sm:w-[7rem] sm:h-[7rem] w-[4rem] h-[4rem] hidden sm:block" src={logo} alt="logo"/>
       

      <div className='flex flex-col items-start pl-10 w-full'>
      <h4 className='font-bold my-2'>Contact</h4>
      <div className='text-gray-500 text-sm flex-wraps w-[300px]'>
      <p><strong>Address: </strong>12100 Coors Rd Albuquerque, New Mexico 87045</p>
      <p><strong>Phone: </strong> (505) 148-3369 \ (505) 503-4455</p>
      <p><strong>Working time: </strong> 7am - 10pm</p>
      </div>
      <div className='text-base py-2'>
        <h4 className='pb-1 font-semibold'>Follow US</h4>
        <div className='grid grid-cols-5 items-center gap-2 cursor-pointer'>
        <ion-icon name="logo-facebook"></ion-icon>
        <ion-icon name="logo-instagram"></ion-icon>          
        <ion-icon name="logo-twitter"></ion-icon>          
        <ion-icon name="logo-pinterest"></ion-icon>          
        <ion-icon name="logo-youtube"></ion-icon>        
        </div>
        </div>
      </div>
      </div>

      

      <div className='grid grid-cols-2 gap-20 items-start my-4 mb-4 lg:my-0'>
      <div className='flex flex-col items-start text-sm '>
      <h4 className='font-bold mb-2 text-base'>About</h4>
      <a href="/">About Us</a>
      <a href="/">Banned from LPH</a>
      <a href="/">Privacy Policy</a>
      <a href="/">Term & Condition</a>
      <a href="/">Contact Us</a>
      </div>

      <div className='flex flex-col items-start text-sm'>
      <h4 className='font-bold mb-2 text-base w-[100px]'>My Account</h4>
      <a href="/">Sign In</a>
      <a href="/">View Cart</a>
      <a href="/">My Wishlist</a>
      <a href="/">Track My Order</a>
      <a href="/">Help</a>
      </div>
      </div>



      <div className="flex flex-col items-start md:my-4 my-10 lg:my-0 text-sm">
      <h4 className='font-bold mb-2 text-base'>Install App</h4>
      <p>From App Store or Google Play Store</p>
      <div className='flex justify-start items-center w-[100px] py-2 cursor-pointer'>

        <img src={app} alt="" className='mr-2'/>
        <img src={play} alt=""/>
      </div>
      <div>
      <p className='pb-2 italic'>Secured Payment Gateways</p>
      <img src={pay} className='w-[200px]' alt=""/>
    
    </div>
    </div>



    </div>
  )
}

export default Footer

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../src/Components/assests/logo.png';
import './style.css';
import { useDarkMode } from './DarkModeContex';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const location = useLocation();

  useEffect(() => {
    
    document.body.style.backgroundColor = darkMode ? '#1a1d1d' : 'white';

    return () => {
      document.body.style.backgroundColor = ''; 
    };
  }, [darkMode]);

  let [open, setOpen] = useState(false);

  let NavLinks = [
    { name: 'Home', link: '/' },
    { name: 'Menu', link: '/menu' },
    { name: 'Job-Listing', link: '/job' },
    { name: 'Banned from LPH', link: '/banned' },
    { name: 'Our History', link: '/history' },
    { name: 'Contact us', link: '/contact' },
  ];

  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-[1]'>
      <div
        className={`md:flex items-center justify-between py-3 md:pr-10 md:pl-10 px-5 mx-auto duration-75  ease-in ${
          darkMode ? 'bg-[#1c1e21] text-yellow-400' : 'bg-[#fefefe] text-red-700'
        }`}
      >
        <Link to={'/'}>
        <div className='font-bold text-2xl cursor-pointer flex flex-row items-center font-[Poppins] '>
          <img
            src={Logo}
            alt=''
            className='w-[3.5rem] h-[3.5rem] mr-2 select-none'
          />
          <h3
            className={`font-nanum-brush whitespace-nowrap text-2xl   ${
              darkMode ? 'text-yellow-400' : 'text-red-700'
            }`}
          >LOS POLLOS HERMANOS</h3>
        </div>
        </Link>

        <div
          onClick={() => setOpen(!open)}
          className={`text-3xl absolute right-6 top-6 cursor-pointer md:hidden }`}
        >
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div> 

        <>
          <ul
            className={`md:flex md:items-center justify-end select-none md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-12 duration-75 ease-in ${
              open ? 'top-24 opacity-100' : 'top-[-490px]'
            } md:opacity-100 opacity-0 ${darkMode ? 'bg-[#1c1e21] ' : 'bg-[#fefefe]'}`}
          >
            {NavLinks.map((NavLink) => (
              <li
                key={NavLink.name}
                className={`md:ml-8 text-base md:my-0 my-7 transition duration-100 ease-in ${
                  location.pathname === NavLink.link ? 'active' : ''
                } ${darkMode?'active2':'active1'}`}
              >
                <div>
                  <Link
                    to={NavLink.link}
                    className={`${
                      darkMode ? 'navHover2 ' : 'navHover '
                    } font-semibold`}
                  >
                    {NavLink.name}
                  </Link>
                </div>

                
              </li>
            ))}
              <div
                  onClick={toggleDarkMode}
                  className={` text-2xl flex justify-center items-center lg:ml-6 -ml-2 cursor-pointer px-2 py-2 rounded-lg text-white  bg-red-700 max-w-24`}
                >
                  <h3 className='flex text-sm mr-2 md:justify-center justify-start font-semibold items-center '>
                    Theme
                  </h3>
                  <ion-icon
                    name={darkMode ? 'contrast' : 'contrast'}
                    alt='Theme' className=''
                  ></ion-icon>
                </div>
          </ul>

        </>

        <hr
          className={`border-t-1 mt-4 ${open ? '' : 'hidden'} md:hidden ${
            darkMode ? 'border-yellow-400 ' : ' border-black'
          }`}
        />
      </div>
    </div>
  );
};

export default Navbar;

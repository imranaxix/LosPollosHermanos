import React, {useState ,useEffect} from 'react';
import { useDarkMode } from './DarkModeContex';

import MapLoader from './Loaders/MapLoader'
import LoaderPeople from './Loaders/LoaderPeople';
import Gus from './assests/gus2.jpg'
import lyle from './assests/manager.jpg'
import finger from './assests/finger.jpg'

import './style.css'

const contacts = [
  {
    name: 'Gus Fring',
    role: 'Owner and Proprietor',
    phone: '(505) 148-3369',
    email: 'gustavo@lph.com',
    image: Gus,
  },
  {
    name: 'Lyle',
    role: 'Branch Manager',
    phone: '(505) 503-4455',
    email: 'lyleballz@lph.com',
    image: lyle,
  },
  {
    name: 'Mike Ehrmantrauts',
    role: 'Delivery Guy',
    phone: '(505) 969-6969',
    email: 'mikepop@lph.com',
    image: finger,
  },
];

const formFields = [
  { type: 'text', placeholder: 'Your Name', id:'1' },
  { type: 'text', placeholder: 'E-mail', id:'2' },
  { type: 'text', placeholder: 'Subject', id:'3' },
];


const ContactComp = () => {
  const { darkMode } = useDarkMode();

  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(delay); 
  }, []);


  useEffect(() => {
    
    document.body.style.backgroundColor = darkMode ? '#1a1d1d' : 'white';

    return () => {
      document.body.style.backgroundColor = ''; 
    };
  }, [darkMode]);

  const handleImageLoad = () => {
    setLoading((prevLoading) => prevLoading - 1 === 0);
  };




  return (
    <div className={`pt-28 flex justify-center pb-10 items-center flex-col ${darkMode?'bg-[#171818]' : 'bg-[#f7f7f7]'}`}>
      <div className='container mx-5'>

        <div className='max-w-[400px] mx-auto mb-10 flex flex-col justify-center items-center'>
          <h1 className='text-3xl font-bold mb-4'>Let's talk</h1>
          <p className='text-xs text-gray-500 text-center'>LEAVE A MESSAGE, We love to hear from you!</p>
        </div>

        <div className={`grid grid-cols-1 px-6 lg:grid-cols-2 place-items-start lg:place-items-center my-8 py-10 ${darkMode?'text-white':'text-black'}`}>
          <div className='mb-10'>
            <span className='text-sm font-bold pb-4 pt-8'>GET IN TOUCH</span>
            <h2 className='text-base py2'>Visit one of our agency locations or contact us today</h2>
            <h3 className='text-3xl font-bold pt-8 pb-4'>Head Office</h3>
            <div className='contact z-10'>
        <li>
        <ion-icon name="home-outline"></ion-icon>
          <p>12100 Coors Rd Albuquerque, New Mexico 87045</p>
        </li>
        <li>
        <ion-icon name="mail-outline"></ion-icon>
          <p>losPolosHarmanos@lph.com</p>
        </li>
        <li>
        <ion-icon name="call-outline"></ion-icon>
          <p>(505) 148-3369 \ (505) 503-4455</p>
        </li>
        <li>
        <ion-icon name="time-outline"></ion-icon>
          <p>7am - 10pm & 7am - 12pm (Friday to Sunday)</p>
        </li>
      </div>
          </div>

          <div className=' h-[400px] w-[100%]'>
          {
            <MapLoader/>
          }
          </div>

        </div>

        
      <div className={`grid grid-cols-1 lg:grid-cols-2 place-items-center border-2 mx-4 lg:mx-0 py-20 px-10 lg:px-20  mt-32 rounded-lg  ${darkMode?'bg-[#1c1e21] border-transparent':'bg-[#fefefe] border-[gray-100]'}`} >
      
      <form action="" className='w-[100%] flex flex-col items-start'>
          <span>LEAVE A MESSAGE</span>
          <h2 className='text-3xl font-bold pt-4 pb-6'>We love to hear from you</h2>

          {formFields.map((field, index) => (
            <input
              key={index.id}
              className={`w-full py-3 px-3 outline-none mb-5 rounded-sm shadow-sm ${darkMode ? 'bg-[#171818] text-white' : 'bg-[#f7f7f7] border-2 border-[gray-100] text-black'}`}
              placeholder={field.placeholder}
            />
            
          ))}
           <textarea className={`w-full py-3 px-4 outline-none mb-5 rounded-sm ${darkMode?'bg-[#171818] text-white':'bg-[#f7f7f7] border-2 border-[gray-100] text-black'} `}name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
          <button className="bg-red-700 text-white border-transparent rounded-md py-2 px-4">Submit</button>
    </form>


          
          
    <div className={`text-sm flex flex-col justify-center items-start mt-20 ${darkMode ? 'text-white' : 'text-black'}`}>
            {loading ? (
              <>
                <LoaderPeople />
                <LoaderPeople />
                <LoaderPeople />
              </>
            ) : (
              contacts.map((contact) => (
                <div key={contact.name} className='flex justify-center items-start mb-12'>
                  <img src={contact.image} onLoad={handleImageLoad} className='w-[65px] h-[65px] object-cover mr-4 rounded-full' alt={contact.name} />
                  <p>
                    <span className='block font-semibold'>{contact.name}</span> {contact.role} <br />
                    Phone: {contact.phone} <br />
                    Email: {contact.email}
                  </p>
                </div>
              ))
            )}
          </div>



    </div>
    </div>
    
    </div>
  )
}

export default ContactComp

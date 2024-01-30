import React, {useEffect} from 'react';
import { useDarkMode } from './DarkModeContex';

const joblist = [
  {
    id: '1',
    job : 'Executive Liaison to Owner/Proprietor',
    p1 : 'We are seeking an executive assistant for the Albuquerque-based Owner/Proprietor of our establishment. Experience is welcome, but not imperative -- our fearless leader is willing to take a chance on someone who is got what it takes. You could say he sees things in people.',
    p2 : 'This is the perfect opportunity for someone hoping to learn the ins and outs of building an empire. Must have an interest in business and negotiation. Late nights and travel may be required with little or no notice.',
    skill1: 'A "will-do-anything" (and we do mean ANYTHING) attitude',
    skill2: 'Professionalism and discretion -- must have the ability to hide in plain sight when needed',
    skill3: 'Knowledge of logistics and shipping across international borders',
    skill4: 'Attention to detail -- as personal assistant to our Owner/Proprietor, you must never make the same mistake twice',
  },
  {
    id: '2',
    job : 'Restaurant Manager',
    p1 : 'We are currently in search of a skilled Restaurant Manager to join Los Pollos Hermanos in Albuquerque. Prior experience is beneficial, but not mandatory – our leader is open to taking a chance on individuals displaying the right capabilities.',
    p2 : 'This role presents a unique opportunity for someone eager to gain insights into running a thriving restaurant empire, with a focus on business operations and negotiation. The position may involve late-night shifts and occasional travel with short notice. If you are passionate about the restaurant industry and possess strong leadership skills, we encourage you to consider the Restaurant Manager position at Los Pollos Hermanos.',
    skill1: 'Manage, train and discipline employees',
    skill2: 'Interview candidates for potential employment; must be a good judge of character',
    skill3: 'Organize and oversee community outreach programs',
    skill4: 'Coordinate marketing and promotional campaigns to entice customers and keep them coming back for more',
  },
  {
    id: '3',
    job : 'Fry Cook',
    p1 : 'We are currently seeking a skilled Fry Cook to join our culinary team at Los Pollos Hermanos. In charge of ensuring that every dish meets our delicious standards, the Fry Cook will be responsible for cooking orders with the love and care that every family deserves. From overseeing the kitchen and storage areas to unpacking deliveries, this role plays a crucial part in maintaining the quality of our renowned dishes',
    p2 : 'This position requires someone with a passion for culinary excellence, attention to detail, and a commitment to consistently delivering top-notch meals. If you are enthusiastic about creating delightful dining experiences and thrive in a fast-paced kitchen environment, we invite you to explore the exciting opportunity of becoming our next Fry Cook at Los Pollos Hermanos',
    skill1: 'In charge of making sure something delicious is always cooking',
    skill2: 'Assist with unpacking deliveries and storing supplies in the kitchen and storage area',
    skill3: 'Make sure all orders are up to Los Pollos Hermanos standards',
    skill4: 'Cook each order with the love and care that every family deserves',
  },
  {
    id: '4',
    job : 'Truck Driver / Transportation Logistics',
    p1 : 'As a Truck Driver / Transportation Logistics professional at Los Pollos Hermanos, you will play a pivotal role in our supply chain. Responsible for picking up and transporting products and supplies, including our famous fry batter, you will ensure timely deliveries from our local farms and suppliers just south of the border to locations throughout the US',
    p2 : 'This role requires individuals who go above and beyond to provide the best service for our patrons. Successful candidates should be able to take direction and initiative without questions, possess a Class B license, and share our commitment to delivering exceptional products. If you are ready to be a vital part of our logistics team, consider joining Los Pollos Hermanos as our Truck Driver.',
    skill1: 'Go above and beyond to provide the best service for our patrons',
    skill2: 'Be able to take direction and initiative, no questions asked',
    skill3: 'Own a Class B license',
    skill4: 'Have basic knowledge of Guns',
  },
  

];

const Jobs = () => {
  const { darkMode } = useDarkMode();
  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? '#1a1d1d' : 'white';
    return () => {
      document.body.style.backgroundColor = ''; 
    };
  }, [darkMode]);

  return (
    <div className={`pt-32 flex justify-evenly pb-10 lg:px-10 px-4 items-center flex-col  `}>
      <div className='container mx-auto'>

        <div className=' mx-auto mb-10 flex flex-col justify-center items-center '>
          <h1 className='text-2xl lg:text-3xl font-bold mb-10'>Job Listings</h1>
          
          

          {joblist.map((jobs)=>(
            <div key={jobs.id} className={`flex justify-between items-center mt-10 mb-5 md:pt-20 pt-10 pb-14 px-8 md:px-16 rounded-2xl ${darkMode?'bg-[#1c1e21]':'bg-[#fefefe] border-2 border-[gray-100]'}`}>
              <div className='w-full'>

                <div  className=''>
                <h1 className='text-2xl font-bold'>{jobs.job} </h1>
                <br />
                <div className={`duration-75 ease-in ${darkMode?'text-white':'text-black'} text-sm md:text-base`}>
                <h3 className='text-xl font-bold mb-4'>Job Description:</h3>
                
                <p className='mb-4'>{jobs.p1}</p>
                
                <p>{jobs.p2}</p>
                
                <br />
                <h3 className='text-xl font-bold mb-4'>Required Skills:</h3>
                
                  <ul className='list-disc ml-6 md:ml-10 text-base'>
                  <li className='mb-2'>{jobs.skill1}</li>
                  <li className='mb-2'>{jobs.skill2}</li>
                  <li className='mb-2'>{jobs.skill3}</li>
                  <li className='mb-2'>{jobs.skill4}</li>
                  </ul>
                </div>
  
                  <div className='flex justify-center items-center mt-16'>
                  <button className='bg-red-700 text-white border-transparent rounded-md py-2 px-2'>Apply Now</button>
                  </div>
                </div>

              </div>
            </div>
          ))}
              
            </div>
            

          </div>

        
        </div>

        
  );
};

export default Jobs;

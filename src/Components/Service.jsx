import React, {useState ,useEffect} from 'react';
import { useDarkMode } from './DarkModeContex';

import Loader from './Loaders/loaderFood'


import Img1 from '../../src/Components/assests/item1.png'
import Img3 from '../../src/Components/assests/item2.png'
import Img4 from '../../src/Components/assests/item3.png'
import Img5 from '../../src/Components/assests/item4.png'
import Img6 from '../../src/Components/assests/item5.png'
import Img7 from '../../src/Components/assests/item6.png'
import Img8 from '../../src/Components/assests/item7.png'
import Img9 from '../../src/Components/assests/item8.png'








const Services = [
  {id:1,
   img: Img1,
   name:"Rancheros Platters",
   desc: "All Rancheros Platters come with panfried potatoes, slow cooked pinto beans, two eggs of choice, jack cheese and a side flour tortilla",
  },
  {id:2,
    img: Img3,
    name:"American Platters",
    desc: "Two Egg Special comes with Two eggs, panfried potatoes, choice of HAM, SAUSAGE or BACON & choice of white or wheat toast",
   },
   {id:3,
    img: Img4,
    name:"Pollos Burritos",
    desc: "It comes with your choice of meat, beans, then topped with Pollos fries smothered with Red or Green Chile, cheese, lettuce & tomato.",
   },
   {id:4,
    img: Img5,
    name:"New Mexico Platters",
    desc: "All platters come with meat, beans, spanish rice, lettuce, tomato & cheese with Pollos fries smothered with Red or Green Chile",
   },
   {id:5,
     img: Img6,
     name:"Burgers",
     desc: "All burgers Comes with lettuce, tomato, onion, mustard & ketchup, meat of the choice , special los polos fries and cold drink",
    },
    {id:6,
     img: Img7,
     name:"Grilled Sandwiches",
     desc: "Boneless grilled chicken Sandwiches Comes with mayonnaise, lettuce & tomato, special los polos fries and cold drink",
    },
    {id:7,
      img: Img8,
      name:"Taccos",
      desc: "Taccos of los pollos harmanos are so tasty so spicey so salamanca comes with los polos fries and cold drink",
     },
     {id:8,
      img: Img9,
      name:"Pastas",
      desc: "All Pastas Comes with lettuce, tomato, onion, mustard & ketchup, meat of the choice , special los polos fries and cold drink",
     },
];


const Service = () => {

  const { darkMode} = useDarkMode();
  
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
    <div className={`py-20 ${darkMode ? 'bg-[#121315] text-yellow-400' : 'bg-white text-red-700 px-4'}`}>
      <div className='container mx-auto'>

        <div className='mb-20 max-w-[400px] mx-auto flex flex-col justify-center items-center'>
        <p className='text-sm'>Services</p>
        <h1 className='text-3xl font-bold'>Our Services</h1>
        <p className='text-xs text-gray-500 text-center'>We always have something delicious cooking, be it our crispy fried chicken,
         new spicy curly fries, or delicious dipping sauces.</p>
       </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14 md:gap-6 place-items-center '>
         
         {loading?(
          <>
         <Loader/>
         <Loader/>
         <Loader/>
         <Loader/>
         </>
         )
         :
          
           ( Services.map((service)=>(
              <div className={`rounded-2xl  flex flex-col justify-center items-center  py-4 ${darkMode?'bg-[#1c1e21]': 'bg-[#f7f7f7] border-2 border-[gray-100]'} `}key={service.id} >
                <div className='h-[100px] mb-14'>
                  <img src={service.img} alt={service.name} onLoad={handleImageLoad} className='max-w-[200px] block mx-auto  '/>
                </div>
                
                <div className={`p-4 text-center border-t-2 my-4 ${darkMode?'border-yellow-400':'border-red-700'}`}>
                  <h1 className='text-2xl font-bold mb-2'>{service.name}</h1>
                  <p className={`text-xs max-w-[300px] italic ${darkMode?'text-white':'text-black'}`}>{service.desc}</p>
                </div>
              </div>
            )))
          }
          
        </div>

      </div>
    </div>
  )
}

export default Service

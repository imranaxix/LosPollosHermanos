import React, {useEffect, useState} from 'react'
import { useDarkMode } from './DarkModeContex';

import Loader from './Loaders/loaderFood'

import Img1 from '../../src/Components/assests/item1.png';
import Img3 from '../../src/Components/assests/item2.png';
import Img4 from '../../src/Components/assests/item3.png';
import Img5 from '../../src/Components/assests/item4.png';
import Img6 from '../../src/Components/assests/item5.png';
import Img7 from '../../src/Components/assests/item6.png';
import Img8 from '../../src/Components/assests/item7.png';
import Img9 from '../../src/Components/assests/item8.png';
import Img10 from '../../src/Components/assests/item10.png';
import Img11 from '../../src/Components/assests/item11.png';
import Img12 from '../../src/Components/assests/item12.png';
import Img13 from '../../src/Components/assests/item13.png';
import Img14 from '../../src/Components/assests/item14.png';
import Img15 from '../../src/Components/assests/item15.png';
import Img16 from '../../src/Components/assests/item16.png';
import Img2 from '../../src/Components/assests/item9.png';
import button from '../Components/assests/button.png'

const bgImg = {
  backgroundImage: `url(${button})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  width: '100%',
  height: '120%',
};

const data = [
  {
    id: 1,
    name: 'Polos Plater',
    category: 'mexican',
    image: Img1,
    price: '$8.3',
  },
  {
    id: 2,
    name: 'New Mexico Plater',
    category: 'mexican',
    image:Img3,
    price: '$8.5',
  },
  {
    id: 3,
    name: 'Polos Burritos',
    category: 'mexican',
    image:
      Img4,
    price: '$5.5',
  },
  {
    id: 4,
    name: 'Rancho Plater',
    category: 'mexican',
    image:
    Img5,
    price: '$5.5',
  },
  {
    id: 5,
    name: 'Chese Burger',
    category: 'american',
    image:
    Img6,
    price: '$6.0',
  },
  {
    id: 6,
    name: 'Polos Sandwich',
    category: 'american',
    image:
    Img7,
    price: '$5.0',
  },
  {
    id: 7,
    name: 'Tacos',
    category: 'mexican',
    image: Img8,
    price: '$5.0',
  },
  {
    id: 8,
    name: 'Spaghetti',
    category: 'italian',
    image: Img9,
    price: '$8.5',
  },
  {
    id: 9,
    name: 'Onion Rings',
    category: 'mexican',
    image: Img10,
    price: '$4.5',
  },
  {
    id: 10,
    name: 'Hot dog',
    category: 'american',
    image: Img2,    
    price: '$5.0',
  },
  {
    id: 11,
    name: 'Pizza',
    category: 'italian',
    image:Img11,    
    price: '$10.0',
  },
  {
    id: 12,
    name: 'Pasta',
    category: 'italian',
    image: Img12,
    price: '$9.5',
  },
  {
    id: 13,
    name: 'Wings',
    category: 'american',
    image: Img13,
    price: '$4.5',
  },
  {
    id: 14,
    name: 'Lasagne',
    category: 'italian',
    image:Img14,
    price: '$9.5',
  },
  {
    id: 15,
    name: 'Chow Mein',
    category: 'chinese',
    image: Img15,
    price: '$8.0',
  },
  {
    id: 16,
    name: 'Sushi',
    category: 'chinese',
    image:Img16,
    price: '$12',
  },
];


const MenuComp = () => {
  const { darkMode } = useDarkMode();
  const [selectedCategory, setSelectedCategory] = useState('all');
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



  const filteredData =
    selectedCategory === 'all'
      ? data
      : data.filter((item) => item.category === selectedCategory);



  return (
    <div className={`pt-28 flex justify-center pb-10 items-center flex-col ${darkMode ? 'bg-[#171818]' : 'bg-[#fefefe]'}`}>
      <div className="container mx-5">
        <div className="mb-20 max-w-[400px] mx-auto flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold mb-4">MENU</h1>
          <p className="text-xs text-gray-500 text-center">
            We always have something delicious cooking, be it our crispy fried
            chicken, new spicy curly fries, or delicious dipping sauces.
          </p>
        </div>

        <div className="mb-6 flex justify-center items-center">
          <h2 className='text-lg font-semibold mr-4'>Filter by</h2>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className={`category-select bg-red-700 border-transparent py-2 px-2 rounded-md text-white ${darkMode ? 'dark-mode' : ''}`}
          >
            <option value="all">All</option>
            <option value="american">American</option>
            <option value="mexican">Mexican</option>
            <option value="italian">Italian</option>
            <option value="chinese">Chinese</option>
          </select>
        </div>

      </div>

      
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14 md:gap-6 place-items-center px-4 py-6 `}>
        
        {loading ? (
          
          <>
            <Loader />
            <Loader />
            <Loader />
            <Loader />
          </>
        ) : 
        
        (
          filteredData.map((item) => (
            <div className={`rounded-2xl flex flex-col justify-center items-center py-10 ${darkMode ? 'bg-[#1c1e21]' : 'bg-gray-100 border-2 border-[gray-100]'}`} key={item.id}>
              <div className="h-[100px] mb-14 flex justify-center items-center">
                <img src={item.image} alt={item.name} className="w-[300px] h-[100px] object-contain" />
              </div>
              <div className={`p-4 text-center w-[280px] border-t-2 flex flex-col justify-center items-center ${darkMode ? 'border-yellow-300' : 'border-red-700'}`}>
                <h1 className="text-2xl font-bold mb-4">{item.name}</h1>
                <p style={bgImg} className={`max-w-28 text-lg bold py-[1px] ${darkMode ? 'text-white' : 'text-red-700'}`}>{item.price}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MenuComp;
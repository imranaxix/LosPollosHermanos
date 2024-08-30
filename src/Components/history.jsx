import React, { useState, useEffect } from 'react';
import LoaderHistory from './Loaders/LoaderHistory';
import history1 from './assests/history1.jpg';
import history2 from './assests/history2.jpg';

const HistoryPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(delay);
  }, []);

  const handleImageLoad = () => {
    setLoading((prevLoading) => prevLoading - 1 === 0);
  };

  
  return (
    <div className={`pt-32 flex justify-evenly pb-10 lg:px-10 px-0 items-center flex-col `}>
      <div className='container mx-auto'>
        <div className='max-w-[600px] mx-auto mb-10 flex flex-col justify-center items-center'>
          <h1 className='text-2xl lg:text-3xl font-bold mb-20'>OUR CULTURE & VALUES</h1>
          
          {
            loading?(<LoaderHistory/>):(
              <div className='flex justify-between items-center pb-10 '>
            <img src={history1} alt="Los Pollos Hermanos" className='max-w-[500px] h-[350px] mb-4 hidden lg:block' />
            <div className='lg:w-[500px] lg:ml-10 px-4'>
            <p className='text-md text-gray-500 lg:ml-4 '>
              Los Pollos Hermanos, meaning "The Chicken Brothers" in Spanish, started as a small family-owned
              restaurant in Mexico. The founders, Gustavo and his brother, faced challenges and hardships
              while trying to establish themselves in the competitive culinary world.
            </p><br />
            <p className='text-md text-gray-500 lg:ml-4'>
              Despite the initial struggles, their dedication and passion for crafting exceptional chicken dishes
              allowed Los Pollos Hermanos to gain popularity in Mexico. The restaurant became known for its unique
              and delicious recipes, attracting locals and visitors alike.
          </p><br />
          <p className='text-md text-gray-500 lg:ml-4 py-4'>
              Seeking new opportunities and aiming for broader horizons, Gustavo Fring eventually made a strategic
              decision to move Los Pollos Hermanos to the United States. This move marked a significant chapter in
              the restaurant's history, bringing the legacy of Los Pollos Hermanos to a new audience in the U.S.

          </p><br />
            </div>
          </div>
            )
          }
         

          {
            loading?
            (<LoaderHistory/>)
            :
            (
              <div className='flex justify-between py-10 px-4'>
                
                <div className='lg:w-[500px] lg:mr-10'>
                  <p className='text-md text-gray-500 lg:mr-4 '>
                    Los Pollos Hermanos knows what family tastes like and we bring that warmth and goodness into our food every single day. We always have something delicious cooking, be it our crispy fried chicken, new spicy curly fries, or delicious dipping sauces.
                  </p>
                  <br />
                  <p className='text-md text-gray-500 lg:mr-4'>
                    We know how important it is to feed your family right, and we hold those values near and dear to our heart. Every meal we feed you will be FLAVORFUL, WARM, FRESH, and filled with LOVE and CARE. That is our promise to you.
                  </p>
                  <br />
                  <p className='font-bold'> Our motto: "Los Pollos Hermanos! Taste the Family!"</p>
                </div>

                <img src={history2} onLoad={handleImageLoad} alt="Los Pollos Hermanos" className='max-w-[500px] h-[350px] hidden lg:block mb-4' />

              </div>
            )
          }

        </div>

        
      </div>
    </div>
  );
};

export default HistoryPage;

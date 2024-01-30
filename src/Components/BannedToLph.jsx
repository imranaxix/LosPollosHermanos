import React, {useState, useEffect} from 'react';
import { useDarkMode } from './DarkModeContex';
import BannedLoader from './Loaders/BannedLoader';
import person1 from './assests/lalo.jpeg'
import person2 from './assests/hector.jpeg'
import person3 from './assests/Eladio.jpeg'
import person4 from './assests/person4.jpg'
import person5 from './assests/person5.png'





const banPeople = [
  {
    id: 1,
    name: 'Lalo Salamanca',
    image: person1,
    p1: "We regret to inform our esteemed clientele that Lalo Salamanca, a figure notorious for his association with illicit activities and disruptive behavior, has been permanently banned from Los Pollos Hermanos. Lalo's actions, including instances of intimidation, disregard for the serene dining atmosphere, and disruption of the peace, have led to this necessary measure. We prioritize the safety and comfort of our customers, and such behavior is incompatible with the standards upheld at Los Pollos Hermanos",
    p2: 'The decision to ban Lalo Salamanca is rooted in our commitment to providing a welcoming and secure environment for all patrons. We appreciate the understanding and support of our loyal customers as we strive to ensure a dining experience that is both enjoyable and free from any disturbances. Your continued trust in Los Pollos Hermanos is of utmost importance to us, and we remain dedicated to upholding the highest standards of service and hospitality.',
  },
  {
    id: 2,
    name: 'Hector Salamanca',
    image: person2,
    p1: "We regret to inform our valued patrons that Hector Salamanca, known for his association with unsavory activities, has been permanently barred from Los Pollos Hermanos. Hector's disruptive presence, marked by inappropriate behavior and a blatant disregard for the peaceful dining environment, has compelled us to take this necessary step. At Los Pollos Hermanos, we prioritize the safety and comfort of our esteemed customers, and such conduct is incompatible with the standards we uphold.",
    p2: "The decision to ban Hector Salamanca is a testament to our unwavering commitment to maintaining a secure and welcoming atmosphere for all our patrons. We extend our gratitude for the understanding and support of our loyal customers as we work diligently to ensure an enjoyable dining experience, free from disturbances. Furthermore, it should be noted that Hector Salamanca once made an inappropriate request to see the manager's private parts, further reinforcing the necessity of his ban from our establishment.",
  },
  {
    id: 3,
    name: 'Eladio Vuente',
    image: person3,
    p1: "We regret to inform our esteemed patrons that Don Eladio, a former visitor to Los Pollos Hermanos, has been permanently banned from our establishment. This decision comes in response to Don Eladio's association with illicit activities, posing a threat to the safety and well-being of our customers. Don Eladio's involvement in criminal enterprises and disregard for the law have led to this necessary measure. At Los Pollos Hermanos, we prioritize the safety, comfort, and enjoyment of our customers, and such behavior is incompatible with the high standards we uphold.",
    p2: 'We appreciate the understanding and support of our loyal customers as we take proactive steps to maintain a secure and welcoming environment. Your trust in Los Pollos Hermanos is of utmost importance to us, and we remain dedicated to providing exceptional service and hospitality.',
  },
  {
    id: 4,
    name: 'Daniel Wormald',
    image: person4,
    p1: "We regret to inform our esteemed patrons that Daniel Wormald, who had previously enjoyed the privilege of dining at Los Pollos Hermanos, has been permanently banned from our establishment. Daniel's actions, including running out without settling his bill and engaging in illicit activities related to drugs, have led to this regrettable decision. Such behavior is unacceptable and goes against the principles of integrity and responsibility we uphold at Los Pollos Hermanos.",
    p2: "It is disheartening to note that Daniel Wormald, despite holding a medical job, chose to engage in activities incompatible with the values of our establishment. We believe in fostering a positive and responsible atmosphere, and his actions were contrary to this ethos.",
  },
  {
    id: 5,
    name: 'Werner Ziegler',
    image: person5,
    p1: "We regret to inform our valued customers that Werner Ziegler has been permanently banned from Los Pollos Hermanos due to his involvement in spreading false accusations and engaging in disruptive behavior. Werner, who was previously associated with the construction of our facilities, has made baseless claims against our owner, Gus Fring. His unfounded accusations include alleging the misuse of his skills in constructing a basement for a meth lab.",
    p2: "We appreciate the understanding and support of our loyal customers as we take necessary measures to ensure that Los Pollos Hermanos remains a place of trust, quality, and exceptional dining experiences. Your continued patronage is vital to us, and we remain committed to providing an environment free from unwarranted disruptions and false accusations.",
  },
];

const BannedToLph = () => {
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

  return (
    <div className='mt-32'>
      <div className="container mx-auto ">

      <div className=' mx-auto flex flex-col justify-center items-center mb-20'>
          <div className=' '>
          <h1 className='text-3xl font-bold mb-10'>Banned from LPH</h1>
          </div>

          <div className={`px-6 md:px-10 ${darkMode?'text-white':'text-black'}`} >
            <p>We deeply regret to inform our valued patrons that access to the esteemed Los Pollos Hermanos establishment has been restricted for certain individuals. This exclusive list encompasses those who have exhibited behavior contrary to the refined atmosphere we aim to uphold. Notable personalities such as Hector Salamanca and Lalo Salamanca find themselves among those restricted. Los Pollos Hermanos is dedicated to providing a haven for those who genuinely appreciate the culinary masterpieces crafted within our kitchen.We extend our sincere gratitude to our loyal customers who have consistently demonstrated a profound understanding of the unique dining experience we offer. If you believe there has been a misunderstanding or wish to address any concerns, our dedicated support team is ready to assist you at <strong className='text-red-700'>support@lospolloshermanos.com.</strong></p> 
            <br />
            <p>The decision to ban Lalo Salamanca is rooted in our commitment to providing a welcoming and secure environment for all patrons. We appreciate the understanding and support of our loyal customers as we strive to ensure a dining experience that is both enjoyable and free from any disturbances. Your continued trust in Los Pollos Hermanos is of utmost importance to us, and we remain dedicated to upholding the highest standards of service and hospitality.</p>
          </div>
        </div>


          {
            loading?
            (<>
            <BannedLoader/>
            <BannedLoader/>
            <BannedLoader/>
            <BannedLoader/>
            <BannedLoader/>
            </>):
            (banPeople.map((ban=>(
              <div key={ban.id}>
                <div className='px-10 lg:px-24 grid my-20'>
                  <div className='flex items-center text-3xl mb-6 font-bold'>
                    <h1 className='px-4 py-1 mr-4 text-white bg-red-700 '>{ban.id}</h1>
                    <h1>{ban.name}</h1>
                  </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0'>
                  <img src={ban.image} className='max-w-[400px] h-[250px] lg:max-w-[500px] lg:h-[350px]' alt="" />
                  <div className={`flex flex-col items-center justify-center ${darkMode?'text-white':'text-black'}`}>
                  <p>{ban.p1}</p>
                  <br />
                  <p>{ban.p2}</p>
                  </div>
                </div>
              </div>
            </div>
            ))))
          }
          
      

    </div>
    </div>
  );
};

export default BannedToLph;

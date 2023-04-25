import React, { useState } from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
import { Link } from 'react-scroll';
import Rocket from '../assets/rocket.png'

const Footer = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid  gap-8 text-gray-300'>
      <div>
        <div className='flex justify-center '>
          <button >
            <a href='https://github.com/arrow881118'>
              <FaGithubSquare size={30} />
            </a>
          </button>
          {/* <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} /> */}
          {/* <FaDribbbleSquare size={30} /> */}
        </div>

        <div className='grid grid-rows-2'>
          <h1 className='w-full py-2 text-2xl font-bold text-[#00df9a] text-center'>Designed & Built by Pin-Chia Wang</h1>
          <button className='w-[60px] mx-auto'>
            <Link to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={handleNav} >
              <img className='w-10 h-10 mx-auto' src={Rocket} alt="/" />
            </Link>
            <p className=' text-white  font-serif text-center'>go top!</p>
          </button>



        </div>

      </div>
      {/* <button className='bottom-0 right-0'>
        <Link to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={handleNav} >
          <img className='w-10 h-10 mx-auto mt-[-3rem] bg-transparent' src={Rocket} alt="/" />
        </Link>
      </button> */}
    </div>
  );
};

export default Footer;

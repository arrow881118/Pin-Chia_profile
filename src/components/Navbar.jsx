import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className='flex justify-between items-center bg-gray-700 max-w-full h-16 z-50 mx-auto px-4 text-white sticky top-0 '>
      <button>
        <Link to="home" spy={true} smooth={true} offset={-100} duration={500} className="text-3xl font-bold text-[#00df9a]">Pin-Chia.</Link>
      </button>
      {/* <span class="text-3xl font-bold text-[#00df9a]"> Pin-Chia.</span> */}
      {/* <h1 className='text-3xl font-bold text-[#00df9a] '>Pin-Chia.</h1> */}
      <ul className='hidden md:flex'>
        <li className='p-4'>
          <button>
            <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
          </button>
        </li>
        <li className='p-4'>
          <button>
            <Link to="about" spy={true} smooth={true} offset={-20} duration={500}>About</Link>
          </button>
        </li>
        <li className='p-4'>
          <button>
            <Link to="project" spy={true} smooth={true} offset={-64} duration={500}>Project</Link>
          </button>
        </li>
        <li className='p-4'>
          <button>
            <Link to="hobby" spy={true} smooth={true} offset={-64} duration={500}>Hobby</Link>
          </button>
        </li>
        <li className='p-4'>
          <button>
            <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>Contact</Link>
          </button>
        </li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full z-50 border-r border-r-gray-400 bg-gray-700 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Pin-Chia.</h1>
        <li className='p-4 border-b border-gray-200'>
          <button>
            <Link to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={handleNav} >Home</Link>
          </button>
        </li>
        <li className='p-4 border-b border-gray-200'>
          <button>
            <Link to="about" spy={true} smooth={true} offset={-20} duration={500} onClick={handleNav}>About</Link>
          </button>
        </li>
        <li className='p-4 border-b border-gray-200'>
          <button>
            <Link to="project" spy={true} smooth={true} offset={-50} duration={500} onClick={handleNav}>Project</Link>
          </button>
        </li>
        <li className='p-4 border-b border-gray-200'>
          <button>
            <Link to="hobby" spy={true} smooth={true} offset={-64} duration={500} onClick={handleNav}>Hobby</Link>
          </button>
        </li>
        <li className='p-4 border-b border-gray-200'>
          <button>
            <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} onClick={handleNav}>Contact</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

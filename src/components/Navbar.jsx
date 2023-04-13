import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center bg-gray-700 max-w-full h-24 mx-auto px-4 text-white sticky -top-0'>
      <span class="text-3xl font-bold text-[#00df9a]"> Pin-Chia.</span>
      {/* <h1 className='text-3xl font-bold text-[#00df9a] '>Pin-Chia.</h1> */}
      <ul className='hidden md:flex'>
        <li className='p-4'>
          <a href='/'>Home</a>
        </li>
        <li className='p-4'>
          <a href='/About'>About</a>
        </li>
        <li className='p-4'>
          <a href='/Project'>Project</a>
        </li>
        <li className='p-4'>
          <a href='/Hobby'>Hobby</a>
        </li>
        <li className='p-4'>
          <a href='/Contact'>Contact</a>
        </li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-400 bg-gray-700 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Pin-Chia.</h1>
        <li className='p-4 border-b border-gray-200'>
          <a href='/'>Home</a>
        </li>
        <li className='p-4 border-b border-gray-200'>
          <a href='/About'>About</a>
        </li>
        <li className='p-4 border-b border-gray-200'>
          <a href='/Project'>Project</a>
        </li>
        <li className='p-4 border-b border-gray-200'>
          <a href='/Hobby'>Hobby</a>
        </li>
        <li className='p-4 border-b border-gray-200'>
          <a href='/Contact'>Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

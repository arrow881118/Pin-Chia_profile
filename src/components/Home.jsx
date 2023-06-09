import React from 'react';
import Typed from 'react-typed';
import { Link } from '@react-email/link';

const Hero = () => {
  return (
    <section className='w-full text-black bg-white' id='home'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-2xl text-black font-bold p-2'>
          HELLO!
        </p>
        <h1 className='text-black md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          I'm
          <span class="text-[#00df9a]"> Pin-Chia Wang</span>
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            going to have
          </p>
          <Typed
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={[' steak ', ' pasta ', ' ramen ']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            for dinner.
          </p>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Ironically, struggle with the next meal but chose the university within a minute.</p>
        <button className='bg-[#00df9a] w-[100px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
          {/* <a href='https://www.canva.com/design/DAFf-QvBvNw/OkMRzLOWyUyPgiH41qFy1A/view?utm_content=DAFf-QvBvNw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink'>Resume</a> */}
          <Link href="https://www.canva.com/design/DAFf-QvBvNw/OkMRzLOWyUyPgiH41qFy1A/view?utm_content=DAFf-QvBvNw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">
            <p className='text-black'>Resume</p>
          </Link>
        </button>
      </div>
    </section >
  );
};

export default Hero;

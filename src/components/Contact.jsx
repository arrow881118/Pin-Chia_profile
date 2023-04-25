import React from 'react';
import { Link } from '@react-email/link';

const Newsletter = () => {
  return (
    <div className='w-full py-10 bg-gray-800 text-white px-4' id='contact'>
      <div className='max-w-[1240px] mx-auto grid-rows-3 text-center '>
        {/* <div className='grid text-center w-full'> */}
        {/* <div className='lg:col-span-2 my-4'> */}
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold'>
          Get In Touch
        </h1>
        <p className='py-4'>Whether you have a question or just want to say hi,<br></br> I’ll try my best to get back to you!</p>
        {/* </div> */}
        <button className='bg-[#00df9a] rounded-md font-medium w-[200px] h-[50px]'>
          {/* <a class="email-link" href="mailto:pinchiawang04@gmail.com" rel="noopener noreferrer" target="_blank">Say Hello</a> */}
          <Link href="mailto:pinchiawang04@gmail.com">
            <p className='text-black'>Say Hello</p>
          </Link>

        </button>

      </div>
    </div>
    // </div>
  );
};

export default Newsletter;

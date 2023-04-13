import React from 'react';
import Portrait from '../assets/portrait.png';

const Analytics = () => {
  return (
    <section className='w-full bg-blue-50 rounded-lg py-10 px-4' id='about'>
      {/* <span class="text-3xl font-bold text-black"> About.</span> */}
      <div className='py-12 max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[300px] mx-auto my-4 rounded-lg' src={Portrait} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#14377d] text-xl font-serif'>LIFE PHILOSOPHY</p>
          <p className='text-[#3c62af] font-serif'>子曰：「參乎！吾道一以貫之。」曾子曰：「唯。」子出。門人問曰：「何謂也？」曾子曰：「夫子之道，忠恕而已矣。」</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-5'>About me</h1>
          <p className=' text-xl py-1'>
            Although knowing the fact that the purpose of study in the university shouldn't be the bachelor
            degree, still a lot of graduated couldn't find the meaning in it, and have no choice but let the
            diploma be their most significant milestone in the past four years. However, base on what I
            have been through, I could tell you it is much more than that!<br/><br/>
            Long story short, these years I get to......
          </p>
          <p className='text-[#00df9a] text-xl font-mono'>
          -know myself better.<br/>
          -have deeper comprehension of being in a relationship (not limited in romantic). <br/>
          -Find Inner Peace
          </p>
          <p className='text-gray-400 font-sans'>
          <br/>Click the button below for the story that brings me here
          </p>
          
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Learn more about me</button>
        </div>
      </div>
    </section>
  );
};

export default Analytics;

import React, { useState } from 'react';
import Portrait from '../assets/portrait.png';
import Popup from './AboutPop';

const About = () => {

  const [showMyPopup, setShowMyPopup] = useState(false)
  const handleOnClose = () => setShowMyPopup(false)

  return (
    <section className='overscroll-contain w-full bg-white py-10 px-4 ' id='about'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 space-x-7 justify-center'>
        {/* <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'> */}
        <div className='max-w-[400px] mx-auto flex flex-col'>
          {/* <div className='w-[400px] mx-auto flex flex-col'> */}
          <img className='mx-auto my-auto rounded-lg' src={Portrait} alt='/' />
          <h1 className='mx-auto my-auto text-slate-900 font-serif'>LIFE PHILOSOPHY</h1>
          <p translation="Amanda go go go!" className='w-[300px] h-[24px] before:content-["子曰：「參乎！吾道一以貫之。」"] hover:before:content-[attr(translation)] mx-auto my-2 text-[#3664e1] md:text-xl sm:text font-serif text-center'></p>
        </div>
        {/* <div className=' mx-auto flex flex-col'> */}
        <div className='max-w-[400px] mx-auto flex flex-col'>
          <h1 className='mx-auto md:text-4xl text-slate-900 sm:text-3xl text-2xl font-bold py-5'>About me</h1>
          <p className='mx-auto  text-slate-600 md:text-xl sm:text-xs font-bold text-left '>
            Although knowing the fact that the purpose of study in the university shouldn't be the bachelor
            degree, still a lot of graduated couldn't find the meaning in it, and have no choice but let the
            diploma be their most significant milestone in the past four years. However, base on what I
            have been through, I could tell you it is much more than that!<br /><br />
            Long story short, these years I get to......
          </p>
          <p className='mx-auto text-[#00df9a] font-mono md:text-xl sm:text-xs'>
            -know myself better.<br />
            -have deeper comprehension of being in a relationship (not limited in romantic). <br />
            -Find Inner Peace
          </p>
          <p className='mx-auto text-gray-400 font-sans text-xs'>
            <br />Click the button below for the story that brings me here
          </p>
          <button onClick={() => setShowMyPopup(true)} className='mx-auto bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3'>
            Learn more about me
          </button>
        </div>
        <Popup onClose={handleOnClose} visible={showMyPopup} />
      </div>
    </section>
  );
};

export default About;

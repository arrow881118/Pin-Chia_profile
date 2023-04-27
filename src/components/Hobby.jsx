import React, { useState } from 'react';
import Motor from '../assets/motorcycle.png'
import Bouldering from '../assets/bouldering.png'
import Motorpop from './motorpop';
import Boulderingpop from './boulderingpop';

const Cards = () => {
    const [mshowMyPopup, msetShowMyPopup] = useState(false)
    const mhandleOnClose = () => msetShowMyPopup(false)

    const [bshowMyPopup, bsetShowMyPopup] = useState(false)
    const bhandleOnClose = () => bsetShowMyPopup(false)

    return (
        <div className='w-full py-10 px-4 bg-white text-black grid justify-start-center' id='hobby'>
            <h1 class="text-4xl font-bold text-black text-center"> Hobby.</h1>
            <div className='py-28 max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className=' w-full shadow-xl justify-center bg-white flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 '>
                    <img className='rounded-lg w-40 h-32 mx-auto mt-[-3rem] bg-white' src={Motor} alt="/" />
                    <h2 className='text-3xl font-bold text-center py-5'>Motorcycle</h2>
                    <p className='text-gray-600 text-center text-xl font-medium'>Repair and Maintenance</p>
                    <div className='text-center font-medium'>
                        <p className='mx-8 text-xs pt-8 text-left'>Why</p>
                        <p className=' border-b mx-8 '>Responsible for vehicle condition<br></br>before hit on the road</p>
                        <p className='mx-8 text-xs pt-8 text-left'>Benefit</p>
                        <p className=' border-b mx-8'>Self-learning skill improved</p>
                    </div>
                    <button onClick={() => msetShowMyPopup(true)}  className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>2016 Honda Grom</button>
                </div>
                <div className='w-full shadow-xl bg-white flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                    <img className='rounded-lg w-40 h-32 mx-auto mt-[-3rem] bg-transparent' src={Bouldering} alt="/" />
                    <h2 className='text-3xl font-bold text-center py-5'>Bouldering</h2>
                    <p className='text-gray-600 text-center text-xl font-medium'>University art exhibition</p>
                    <div className='text-center font-medium'>
                        <p className='mx-8 text-xs pt-8 text-left'>Why</p>
                        <p className=' border-b mx-8  text-center'>Solving bouldering puzzles feels<br></br>like I am one of the Mario bros</p>
                        <p className='mx-8 text-xs pt-8 text-left'>Benefit</p>
                        <p className=' border-b mx-8 text-center'>Closer to be 8th HOKAGE</p>
                    </div>
                    <button onClick={() => bsetShowMyPopup(true)} className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Github</button>
                </div>
                <div className='w-full shadow-xl bg-white flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                    <img className='rounded-lg w-40 h-32 mx-auto mt-[-3rem] bg-white' src={Bouldering} alt="/" />
                    <h2 className='text-3xl font-bold text-center py-5'>Single User</h2>
                    <p className='text-gray-600 text-center text-xl font-medium'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='mx-8 text-xs pt-8 text-left'>Why</p>
                        <p className=' border-b mx-8  text-centert'>Feels like a ninja</p>
                        <p className='mx-8 text-xs pt-8 text-left'>Control device</p>
                        <p className=' border-b mx-8 text-center'>Logitech G29/Keyboard</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>
                <Motorpop onClose={mhandleOnClose} visible={mshowMyPopup} />
                <Boulderingpop onClose={bhandleOnClose} visible={bshowMyPopup} />
            </div>
        </div>
    );
};

export default Cards;

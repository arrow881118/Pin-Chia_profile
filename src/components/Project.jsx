import React from 'react';
import Traffic from '../assets/traffic.png'
import VR from '../assets/vr.png'
import LG from '../assets/LG.png'
import { Link } from '@react-email/link';

const Cards = () => {
    return (
        <div className='w-full py-10 px-4 bg-white text-black grid justify-start-center' id='project'>
            <h1 class="text-4xl font-bold text-black text-center"> Project.</h1>
            <div className='py-28 max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>

                <div className=' w-full shadow-xl justify-center bg-white flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 '>
                    <img className='w-20 h-20 mx-auto mt-[-3rem] bg-white' src={Traffic} alt="/" />
                    <h2 className='text-3xl font-bold text-center py-5'>Traffic Simulator</h2>
                    <p className='text-gray-600 text-center text-xl font-medium'>Driving Concept Education</p>
                    <div className='text-center font-medium'>
                        <p className='mx-8 text-xs pt-8 text-left'>Development</p>
                        <p className=' border-b mx-8  text-center'>Unity/Blender/RenderDoc</p>
                        <p className='mx-8 text-xs pt-8 text-left'>Control device</p>
                        <p className=' border-b mx-8 text-center'>Logitech G29/Keyboard</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>
                        {/* <a href='https://github.com/arrow881118/Traffic-Simulator'>Github</a> */}
                        <Link href="https://github.com/arrow881118/Traffic-Simulator">
                            <p className='text-black'>Github</p>
                        </Link>
                    </button>
                </div>
                <div className='w-full shadow-xl bg-white flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 h-20 mx-auto mt-[-3rem] bg-transparent' src={VR} alt="/" />
                    <h2 className='text-3xl font-bold text-center py-5'>VR Art Exhibition</h2>
                    <p className='text-gray-600 text-center text-xl font-medium'>University art exhibition</p>
                    <div className='text-center font-medium'>
                        <p className='mx-8 text-xs pt-8 text-left'>Development</p>
                        <p className=' border-b mx-8  text-center'>Unity/SteamVR/Blender</p>
                        <p className='mx-8 text-xs pt-8 text-left'>Control device</p>
                        <p className=' border-b mx-8 text-center'>Vive VR</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>
                        {/* <a href='https://github.com/arrow881118/Art-Exhibition-VR'>Github</a> */}
                        <Link href="https://github.com/arrow881118/Art-Exhibition-VR">
                            <p className='text-black'>Github</p>
                        </Link>
                    </button>
                </div>
                <div className='w-full shadow-xl bg-white flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 h-20 mx-auto mt-[-3rem] bg-white' src={LG} alt="/" />
                    <h2 className='text-3xl font-bold text-center py-5'>LG Robot Vacuum</h2>
                    <p className='text-gray-600 text-center text-xl font-medium'>Currently Working Project</p>
                    <div className='text-center font-medium'>
                        <p className='mx-8 text-xs pt-8 text-left'>Model Type</p>
                        <p className=' border-b mx-8  text-center'>(LrV790R)</p>
                        <p className='mx-8 text-xs pt-8 text-left'>Purpose</p>
                        <p className=' border-b mx-8 text-center'>Mapping System</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Working...</button>
                </div>
            </div>
        </div>
    );
};

export default Cards;

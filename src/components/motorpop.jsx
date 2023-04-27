import React from 'react'
import motor1 from '../assets/motor1.png';
import CNN from '../assets/CNN.png';
import ridesafe from '../assets/ridesafe.png';
import john from '../assets/john.png';
import msx from '../assets/motorcycle.png';


export default function popup({ visible, onClose }) {

    const handleOnClose = (e) => {
        if (e.target.id === "container") {
            onClose()
        }
    }

    if (!visible) return null;

    return (
        <div id="container" onClick={handleOnClose} className='fixed -inset-7 mx-auto my-auto bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            <div className=' overflow-auto overscroll-contain max-h-[650px] max-w-[1000px] bg-white p-2 rounded m-14'>
                <h1 className='border-b-2 border-gray-500 text-2xl py-4 text-slate-600 capitalize text-center font-serif'>
                    Oct 2019.
                </h1>
                <section className='py-6 mx-auto grid md:grid-cols-2 my-auto item-center border-b-2 border-gray-200'>
                    <img className='mx-auto my-auto w-[200px] flex rounded-lg' src={motor1} alt='/' />
                    <p className='mx-auto my-auto text-slate-600 py-2 font-serif '>
                        It was a bright cold day in October. One of my friend asked me if I am interseting
                        in motorcycle. I have nothing to do back then, so this is how the story started.
                    </p>
                </section>
                <section className='py-6 mx-auto grid md:grid-cols-2 my-auto item-center border-b-2 border-gray-200'>
                    <img className='mx-auto my-auto w-[400px] flex rounded-lg py-2' src={CNN} alt='/' />
                    <p className='mx-auto my-auto text-slate-600 py-2 font-serif text-justify'>
                        Because of our world-famous dangerous roads, Parents in Taiwan forbid their
                        children choose motorcycle as their transportation. Without exception, I confront
                        the same problems when I discussed the topic with my family. In order to prove them
                        that I took it serious and not going to hit on the road until we all think I am able
                        to do this. I started to took extra lesson on Motorcycle Safety Training and do tons
                        of online research......
                    </p>
                </section>
                <section className='py-6 mx-auto grid md:grid-cols-2 border-b-2 border-gray-200'>
                    <img className='mx-auto my-auto w-[200px] grid rounded-lg py-2' src={ridesafe} alt='/' />
                    <p className='mx-auto my-auto text-slate-600 py-2 font-serif text-center'>Dec 2020 Motorcycle Safety Training.</p>
                    <img className='mx-auto my-auto w-[200px] grid rounded-lg py-2' src={john} alt='/' />
                    <p className='mx-auto my-auto text-slate-600 py-2 font-serif text-center'>Partzilla - Learning motorcycle structure from John Talley.</p>
                </section>
                <section className='py-6 mx-auto grid border-b-2 border-gray-200'>
                    <p className='mx-auto my-auto text-slate-600 font-serif text-center'>About 3 years later......</p>
                </section>
                <h2 className='border-b-2 border-gray-500 text-2xl py-4 text-slate-600 capitalize text-center font-serif'>
                    May 2022.
                </h2>
                <section className='py-6 mx-auto grid md:grid-cols-2 my-auto item-center border-b-2 border-gray-200'>
                    <img className='mx-auto my-auto w-[200px] flex rounded-lg' src={msx} alt='/' />
                    <p className='mx-auto my-auto text-slate-600 py-2 font-serif text-justify'>
                        This is a 2016 Honda Grom. The reason I bought a second hand bike instead of a brand
                        new one is because of the lower price and known issues on this model usually solved by the
                        former owner. So as long as fimiliar the way of check on bike's condition and do not feel
                        necessary to big a new one, second hand bike often means a better deal.
                    </p>
                </section>
                <h3 className='border-b-2 border-gray-500 text-2xl py-4 text-slate-600 capitalize text-center font-serif'>
                    April 2023.
                </h3>
                <section className='py-6 mx-auto grid md:grid-cols-2 my-auto item-center border-b-2 border-gray-200'>
                    <img className='mx-auto my-auto w-[200px] flex rounded-lg' src={msx} alt='/' />
                    <p className='mx-auto my-auto text-slate-600 py-2 font-serif '>
                        It's almost a year since I bought this bike and several parts of it have been modified by myself.
                        The list below is the part have been modified.<br></br><br></br>
                        -Front fork<br></br>
                        -Dashcam<br></br>
                        -Sprocket(front/rear)<br></br>
                        -Chain<br></br>
                        -Front brake Pad<br></br>
                        -Indicator<br></br>
                        -Exhaust silencer<br></br><br></br>
                        I done all these work by myself except front fork, because the tool to do gonna
                        cost a fortune.<br></br>
                    </p>
                </section>
                <h3 className='border-b-2 border-gray-500 text-2xl py-4 text-slate-600  text-center font-serif'>
                Modified.<br></br>
                    <p className='mx-auto my-auto text-slate-600 py-2 font-serif text-xs'>
                        I did not take videos or photos when I working scince it is already been to buzy for that. But I am going to
                        introduce some of my special tools to you.
                    </p>
                </h3>
                <section className='py-6 mx-auto grid md:grid-cols-2 my-auto item-center border-b-2 border-gray-200'>
                    <img className='mx-auto my-auto w-[200px] flex rounded-lg' src={msx} alt='/' />
                    <div>
                        <p className='mx-auto my-auto text-slate-600 text-xl py-2 font-serif '>
                            My Basement<br></br>
                        </p>
                        <p className='mx-auto my-auto text-slate-600 py-2 font-serif '>
                            This is where the magic happens.
                        </p>
                    </div>
                </section>
                <section className='py-6 mx-auto grid md:grid-cols-2 my-auto item-center border-b-2 border-gray-200'>
                    <img className='mx-auto my-auto w-[200px] flex rounded-lg' src={msx} alt='/' />
                    <div>
                        <p className='mx-auto my-auto text-slate-600 text-xl py-2 font-serif '>
                            Torque wrench<br></br>
                        </p>
                        <p className='mx-auto my-auto text-slate-600 py-2 font-serif '>
                            With this tool you can control and apply a specific torque to a fastener such as a bolt or a nut.
                            I use torque wrench on every bolts, it allow us ride saftly.
                        </p>
                    </div>
                </section>
                <section className='py-6 mx-auto grid md:grid-cols-2 my-auto item-center border-b-2 border-gray-200'>
                    <img className='mx-auto my-auto w-[200px] flex rounded-lg' src={msx} alt='/' />
                    <div>
                        <p className='mx-auto my-auto text-slate-600 text-xl py-2 font-serif '>
                            Chain breaker<br></br>
                        </p>
                        <p className='mx-auto my-auto text-slate-600 py-2 font-serif text-justify '>
                            You can cut the chain to the length you need.
                            The origin chain on this bike was sized 420. It works, but scince the size are
                            not firm enough, I have to adjust the rear tire to keeps the chain tight by week.
                            That's too exhausted, so I change it to sized 428. Science then, never worried about it!<br></br>
                            Bad news, to change to sized of the chain you have to replace the sprocket in
                            same sized too. And that is a lot of work (Included to tear the rear tire down).
                        </p>
                    </div>
                </section>
            </div>
        </div >

    )
}

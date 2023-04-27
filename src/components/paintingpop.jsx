import React from 'react'
import adidas from '../assets/adidas.jpg';
import egypt from '../assets/egypt.jpg';
import Lily from '../assets/Calla Lily.png';
import sun from '../assets/sun.jpg';
import Strelitzia from '../assets/Strelitzia reginae.jpg';
import Strelitzia2 from '../assets/Strelitzia reginae2.jpg';
import portrait from '../assets/portrait.jpg';
import chicken from '../assets/chicken.jpg';
import dragon from '../assets/dragon.jpg';
import Lily2 from '../assets/Calla Lily2.jpg';
import goldfish from '../assets/goldfish.jpg';
import peacock from '../assets/peacock.jpg';




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
                    Art Class.
                </h1>
                <section className='py-6 mx-auto grid border-b-2 border-gray-200'>
                    <p className='mx-auto my-auto text-slate-600 font-serif  text-justify'>
                        According to my parent, they sent me to learned painting since I was four. After study in junior high, there was no time for art class anymore, so the last work of mime end in 2012.<br></br>
                        Most of my work is preserved by my dad. Although I don't paint as much as I used to be, art class still affect a alot in different ways to my life.
                        And I'll never forget that teacher told me to keeps imagination, creative and always be the "one".
                    </p>
                </section>
                <h1 className='border-b-2 border-gray-500 text-2xl py-4 text-slate-600 capitalize text-center font-serif'>
                    2007.
                </h1>
                <section className='py-6 mx-auto grid md:grid-cols-2 my-auto item-center border-b-2 border-gray-200'>
                    <img className='mx-auto my-auto w-[200px] grid rounded-lg' src={adidas} alt='/' />
                    <p className='mx-auto my-auto text-slate-600 py-2 font-serif text-center'>
                        Adidas Shoes<br></br>It was made of plaster and I made it right after the my dad bought me our first pair of father and son shoes.
                    </p>
                </section>
                <section className='py-6 mx-auto grid md:grid-cols-2 my-auto item-center border-b-2 border-gray-200'>
                    <img className='mx-auto my-auto w-[200px] grid rounded-lg' src={egypt} alt='/' />
                    <p className='mx-auto my-auto text-slate-600 py-2 font-serif text-center'>
                        Egypt Gods.<br></br>I painted the whole plastic board then scratched the color off to draw.
                    </p>
                </section>
                <h1 className='border-b-2 border-gray-500 text-2xl py-4 text-slate-600 capitalize text-center font-serif'>
                    2008.
                </h1>
                <section className='py-6 mx-auto grid md:grid-cols-2 my-auto item-center border-b-2 border-gray-200'>
                    <img className='mx-auto my-auto w-[200px] grid rounded-lg' src={Lily} alt='/' />
                    <p className='mx-auto my-auto text-slate-600 py-2 font-serif text-center'>
                        Moth Orchid. <br></br>I love that I could still tell the theme of it without see the label.
                    </p>
                </section>
                <h1 className='border-b-2 border-gray-500 text-2xl py-4 text-slate-600 capitalize text-center font-serif'>
                    2009.
                </h1>
                <section className='py-6 mx-auto grid md:grid-cols-2 border-b-2 border-gray-200'>
                    <img className='mx-auto my-auto w-[200px] grid rounded-lg' src={sun} alt='/' />
                    <p className='mx-auto my-auto text-slate-600 py-2 font-serif text-center'>
                        Vincent Van Gogh Imitations.<br></br>You can still see the painting was made by hundred of lines.
                    </p>
                    <p className='mx-auto my-auto text-slate-600 py-2 font-serif text-center'></p>
                </section>
                <h1 className='border-b-2 border-gray-500 text-2xl py-4 text-slate-600 capitalize text-center font-serif'>
                    2010.
                </h1>
                <section className='py-6 mx-auto grid md:grid-cols-2 border-b-2 border-gray-200'>
                    <img className='mx-auto my-auto w-[200px] grid rounded-lg' src={Strelitzia} alt='/' />
                    <img className='mx-auto my-auto w-[200px] grid rounded-lg' src={Strelitzia2} alt='/' />
                    <p className='mx-auto my-auto text-slate-600 py-2 font-serif text-center'>
                        Bird of Paradise Flower.<br></br>
                    </p>
                    <p className='mx-auto my-auto text-slate-600 py-2 font-serif text-center'>
                        I always remember I had drawn a unusual plant.
                    </p>
                    <p className='mx-auto my-auto text-slate-600 py-2 font-serif text-center'></p>
                </section>
                <section className='py-6 mx-auto grid md:grid-cols-2 border-b-2 border-gray-200'>
                    <img className='mx-auto my-auto w-[200px] grid rounded-lg' src={portrait} alt='/' />
                    <p className='mx-auto my-auto text-slate-600 py-2 font-serif text-center'>
                        Self Portrait.<br></br>What kinds of sick person draw himself like this......, I thought I was happy back then.
                    </p>
                    <p className='mx-auto my-auto text-slate-600 py-2 font-serif text-center'></p>
                </section>
                <h1 className='border-b-2 border-gray-500 text-2xl py-4 text-slate-600 capitalize text-center font-serif'>
                    2011.
                </h1>
                <section className='py-6 mx-auto grid md:grid-cols-2 border-b-2 border-gray-200'>
                    <img className='mx-auto my-auto w-[200px] grid rounded-lg' src={chicken} alt='/' />
                    <p className='mx-auto my-auto text-slate-600 py-2 font-serif text-center'>
                        Cockfighting.<br></br>I watched lot of cockfight that week, that when I realized butcher are not the only one could make things bloody.
                    </p>
                    <p className='mx-auto my-auto text-slate-600 py-2 font-serif text-center'></p>
                </section>
                <section className='py-6 mx-auto grid md:grid-cols-2 border-b-2 border-gray-200'>
                    <img className='mx-auto my-auto w-[200px] grid rounded-lg' src={dragon} alt='/' />
                    <p className='mx-auto my-auto text-slate-600 py-2 font-serif text-center'>
                        Dragon.<br></br>I love how the letter looks like, it means dragon and had been used thousand years ago. The one we use now is "龍".
                    </p>
                    <p className='mx-auto my-auto text-slate-600 py-2 font-serif text-center'></p>
                </section>
                <section className='py-6 mx-auto grid md:grid-cols-2 border-b-2 border-gray-200'>
                    <img className='mx-auto my-auto w-[200px] grid rounded-lg' src={Lily2} alt='/' />
                    <p className='mx-auto my-auto text-slate-600 py-2 font-serif text-center'>
                        Calla Lily<br></br>This is my favorite plant.
                    </p>
                    <p className='mx-auto my-auto text-slate-600 py-2 font-serif text-center'></p>
                </section>
                <h1 className='border-b-2 border-gray-500 text-2xl py-4 text-slate-600 capitalize text-center font-serif'>
                    2012.
                </h1>
                <section className='py-6 mx-auto grid md:grid-cols-2 border-b-2 border-gray-200'>
                    <img className='mx-auto my-auto w-[200px] grid rounded-lg' src={goldfish} alt='/' />
                    <p className='mx-auto my-auto text-slate-600 py-2 font-serif text-center'>
                        Goldfish.
                    </p>
                    <p className='mx-auto my-auto text-slate-600 py-2 font-serif text-center'></p>
                </section>
                <section className='py-6 mx-auto grid md:grid-cols-2 border-b-2 border-gray-200'>
                    <img className='mx-auto my-auto w-[200px] grid rounded-lg' src={peacock} alt='/' />
                    <p className='mx-auto my-auto text-slate-600 py-2 font-serif text-center'>
                        Peacock.
                    </p>
                    <p className='mx-auto my-auto text-slate-600 py-2 font-serif text-center'></p>
                </section>

            </div>
        </div >
    )
}

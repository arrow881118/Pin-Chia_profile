import React from 'react'
import hokage from '../assets/hokage.png';
import store from '../assets/store.png';
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
                    Jan 2023.
                </h1>
                <section className='py-6 mx-auto grid md:grid-cols-2 my-auto item-center border-b-2 border-gray-200'>
                    <img className='mx-auto my-auto w-[400px] flex rounded-lg' src={store} alt='/' />
                    <p className='mx-auto my-auto text-slate-600 py-2 font-serif text-justify'>
                        Since my sister came back to Taiwan while I still not finished my complsury military
                        service, we could only met each other once a week. So when she purposed to went
                        bouldering on my Chinese New Year vacation, I didn't think twice but accepted the idea.
                        Normally I would reject it because it's on my limited vacation, all I wanted to do
                        was took a rest so that mt exhausted boby could recovered. But she is pretty persuasive
                        and insist that it a great opportunity for us to have a quality time, so I caved.
                    </p>
                </section>
                <section className='py-6 mx-auto grid md:grid-cols-2 my-auto item-center border-b-2 border-gray-200'>
                    <img className='mx-auto my-auto w-[400px] flex rounded-lg' src={hokage} alt='/' />
                    <p className='mx-auto my-auto text-slate-600 py-2 font-serif text-justify'>
                        When I'm climbing on the wall, it's feels like travel back to the time when I was ten
                        and the dreamed to become the next HOKAGE. Once I realized there's not much differences
                        between bouldering and being a ninja. I had a really great time.
                    </p>
                </section>
                <h2 className='border-b-2 border-gray-500 text-2xl py-4 text-slate-600 capitalize text-center font-serif'>
                    Mar 2023.
                </h2>
                <section className='py-6 mx-auto grid md:grid-cols-2 border-b-2 border-gray-200'>
                    {/* <img className='mx-auto my-auto w-[200px] grid rounded-lg py-2' src={ridesafe} alt='/' /> */}
                    <p className='mx-auto my-auto text-slate-600 py-2 font-serif text-center'>
                        After I finished my military service, I could finally have some time 
                        to go bouldering.
                    </p>
                    {/* <img className='mx-auto my-auto w-[200px] grid rounded-lg py-2' src={john} alt='/' /> */}
                    <p className='mx-auto my-auto text-slate-600 py-2 font-serif text-center'></p>
                </section>
                <section className='py-6 mx-auto grid border-b-2 border-gray-200'>
                    <p className='mx-auto my-auto text-slate-600 font-serif text-center'>To be continue......</p>
                </section>

            </div>
        </div >
    )
}

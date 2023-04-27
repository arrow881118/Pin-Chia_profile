import React from 'react'
import Swing from '../assets/swing.gif';
import Friendship from '../assets/friendship.png';
import Family from '../assets/family.png';
import Family2 from '../assets/family2.png';

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
                <h1 className='border-b-2 border-gray-500 text-2xl text-slate-600 capitalize text-center font-serif'>
                    know myself better.
                </h1>
                <section className='py-6 mx-auto grid md:grid-cols-2 my-auto item-center border-b-2 border-gray-200'>
                    <img className='mx-auto my-auto w-[200px] flex rounded-lg' src={Swing} alt='/' />
                    <p className='mx-6 text-justify text-slate-600 py-2'>
                        This is Pin-Chia Wang from Taiwan. Growing up in a city near Taipei with parents spending most of their savings on
                        their children’s education, and considering how Taiwan's education system and labor
                        market work, I was always pressured to study.  Still, I didn’t find the meaning in
                        doing so and had always been discontent about not being able to make my own choices.
                        I was so disappointed in the world and everyone around me that I failed all of my
                        subjects intentionally so that I could be suspended from the University.  However,
                        all of this changed when Chen, then an acquaintance,  proposed to help me prepare
                        for my finals knowing that I’d dropped out otherwise.<br></br>
                        That was the first time I actually cared about my academic performance.
                        After becoming motivated to at least finished my bachelor's program, I passed a
                        coding exam that would make me qualified to start with my bachelor project.
                        I was genuinely happy since working on that project allows me to explore the
                        topic that I really care about and the technology that I wasn’t familiar with
                        at that time, and moreover, help me understand the meaning of college education.
                    </p>
                </section>

                <h2 className='border-b-2 border-gray-500 text-2xl text-slate-600 capitalize text-center font-serif'>
                    Deeper Comprehension of Being in a Relationship
                </h2>
                <section className='py-6 mx-auto grid md:grid-cols-2 my-auto item-center border-b-2 border-gray-200'>
                    <img className='mx-auto my-auto w-[200px] flex rounded-lg' src={Friendship} alt='/' />
                    <p className='mx-6 text-slate-600 py-2'>
                        This is a graduation photo of me and my two dearest friends (from left to right is 
                        Liu, Chen and I).


                    </p>
                </section>
                <h3 className='border-b-2 border-gray-500 text-2xl text-slate-600 capitalize text-center font-serif'>
                    Find Inner Peace
                </h3>
                <section className='py-6 mx-auto grid md:grid-cols-2 my-auto item-center border-b-2 border-gray-200'>
                    <img className='mx-auto my-auto w-[200px] flex rounded-lg' src={Family} alt='/' />
                    <p className='mx-6 text-slate-600 py-2'>
                        family
                    </p>
                </section>
            </div>
        </div>
    )
}

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
                        for my finals knowing that I’d dropped out otherwise.<br></br><br></br>
                        That was the first time I actually cared about my academic performance.
                        After becoming motivated to at least finished my bachelor's program, I passed a
                        coding exam that would make me qualified to start with my bachelor project.
                        I was genuinely happy since working on that project allows me to explore the
                        topic that I really care about and the technology that I wasn’t familiar with
                        at that time, and moreover, help me understand the meaning of college education.
                    </p>
                </section>

                <h2 className='border-b-2 border-gray-500 text-2xl text-slate-600 text-center font-serif'>
                    Deeper Comprehension of Being in a Relationship
                </h2>
                <section className='py-6 mx-auto grid md:grid-cols-2 my-auto item-center border-b-2 border-gray-200'>
                    <img className='mx-auto my-auto w-[200px] flex rounded-lg' src={Friendship} alt='/' />
                    <p className='mx-6 text-slate-600 py-2 text-justify'>
                        This is a graduation photo of me and my two dearest friends (from left to right is 
                        Liu, Chen and I). I'm never a social kind of guy and have some trouble with expressing 
                        myself, so if anyone expect me to start a conversation, they gonna wait for 
                        a long long time. Same things happened on the first couple months when we worked on 
                        the school project, but they just be really patient with me and do their best
                        to avoid me from feeling being the thrid wheel any time around them. So, as time go by
                        we became really close friends.<br></br><br></br>
                        Since being friend with them I become a happier and much more familier with how to 
                        express myself because Chen always ask me bunch of odd questions and Liu always 
                        took care of me by doing some nice gesture like asking me to ride home safely after we 
                        finished dinner together or bought my family some souvenir when she go out.<br></br>
                        <br></br>
                        Being in this friendship means a lot to me and makes me realized what I can offer
                        in a relationship and the appropriate way to do so. The things I precious the most 
                        in this friendship is that we all care enough and share the same value of being sensitive
                         to everythings, no matter is personal or not, we all try as hard as we could to avoid 
                         hurting others.
                    </p>
                </section>
                <h3 className='border-b-2 border-gray-500 text-2xl text-slate-600 capitalize text-center font-serif'>
                    Find Inner Peace
                </h3>
                <section className='py-6 mx-auto grid md:grid-cols-2 my-auto item-center border-b-2 border-gray-200'>
                    <img className='mx-auto my-auto w-[200px] flex rounded-lg' src={Family} alt='/' />
                    <p className='mx-6 text-slate-600 py-2 text-justify'>
                        Althrough growing up in a family that hanging out with relatives all the time, I didn't 
                        think a lot about how it means to me until all the children in the family grown up and about 
                        to having their own carreer ,lifestyle choices or even thinking whether start a family with 
                        others. I guess that the idea of everyone around me move on with their lives caught me off guard,
                        so there was a time of me don't know how to deal with my life. But after a period of time of 
                        thinking and learning, I realized that as long as I know where my heart is, eveythings gonna be alright.
                    </p>
                </section>
            </div>
        </div>
    )
}

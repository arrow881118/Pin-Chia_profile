import React from 'react'
import Portrait from '../assets/portrait.png';
import Friendship from '../assets/friendship.png';
import Family from '../assets/family.png';

export default function popup({ visible, onClose }) {

    const handleOnClose = (e) => {
        if (e.target.id === "container") {
            onClose()
        }

    }

    if (!visible) return null;

    return (
        <div id="container" onClick={handleOnClose} className='fixed -inset-7 mx-auto my-auto bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            <div className=' overflow-auto overscroll-contain max-h-[700px] max-w-[1000px] bg-white p-2 rounded m-14'>
                <h1 className='text-2xl text-slate-600 capitalize text-center font-serif'>
                    know myself better.
                </h1>
                <section className='flex py-6'>
                    <img className='mx-auto my-auto w-[200px] flex rounded-lg' src={Portrait} alt='/' />
                    <p className='mx-6 text-slate-600 py-2'>
                        一直以來我都清楚自己是個實作比理論強的人，在專題課程我學到如何將理論應用於實作，進而找到能發揮所長的領域，因此有強烈的學習動機。我認為自己在待人處事上最大的兩個特點是細心與真誠，無論是製作專案時的討論還是私底下和組員們的相處皆是如此，這讓他們覺得我有盡最大努力的了解他們的想法，了解他們目前得出的這個想法是從何而來，因而相信我對於這個想法的看法，是建立在盡可能客觀思考其可行性後的評論。在目前合作過兩個專案小組，擁有上述的特點，讓我深受組員的認同與信任，因此協調組內分工時，總能在幫助大家釐清問題，找出策略方向的同時，周全的考慮每個組員的感受，讓專案順利進行。協調組內分工讓我熟知各個組員的工作進度，而為了讓專案能順利進行，我也時常在完成份內工作後向其他組員提供幫助，優良的自學能力讓我能迅速了解他們的分工內容，進而提供有效幫助。我認為在研究所我能提供優秀的實作能力，而無論是個人的獨立作業還是多人的團隊研究，我都能幫助小組成員，為團隊創造良好的研究氣氛，讓研究順利進行。除了能學習到更專業的專業技能外，我也希望自己在Uni Freiburg 能學習不同領域的課程，遇到不同領域的人，學習其思考方式，增加思想層面的深度和廣度，因為我認為比起得到好工作和賺大錢，更重要的是做個全人。
                    </p>
                </section>

                <h2 className='text-2xl text-slate-600 capitalize text-center font-serif'>
                    Have Deeper Comprehension of Being in a Relationship
                </h2>
                <section className='flex py-6'>
                    <img className='mx-auto my-auto w-[200px] flex rounded-lg' src={Friendship} alt='/' />
                    <p className='mx-6 text-slate-600 py-2'>
                        高中畢業後，感情上的挫折使我意志消沉，一直以來性格上的缺失也隨之更加明顯。大學四年中，兩年半的時間，學業成績墊底，在學校認識的人屈指可數，對於生活毫無目標的我，找不到讀大學的意義，甚至一度打算利用成績不達標被退學，出去找工作，只因為當時認為，那樣的生活或許更適合我。然而在大三上學期，認識了大學時期影響我最多的朋友——陳羽綸，雖然只講過幾次話，卻在知道我將因學業成績不佳而被退學之後，主動提議幫我補習。一個簡單的想法—知道若是離開學校就不太可能再有機會認識這樣的人，在期末考前一個禮拜我開始努力學習，把握每個留在學校的機會，成績公佈時，我心情異常激動，不只為能繼續留在學校，更是為找到讀大學的意義而快樂。對目前的我而言，讀研究所的理由，基本上和大學的理由一致，皆是為了提升自己思想層面的深度和邏輯思考的清晰度。
                    </p>
                </section>
                <h3 className='text-2xl text-slate-600 capitalize text-center font-serif'>
                    Find Inner Peace
                </h3>
                <section className='flex py-6'>
                    <img className='mx-auto my-auto w-[200px] flex rounded-lg' src={Family} alt='/' />
                    <p className='mx-6 text-slate-600 py-2'>
                        family
                    </p>
                </section>
            </div>
        </div>
    )
}

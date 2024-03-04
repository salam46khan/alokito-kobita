import missionPic from '../../assets/img/mission-2.jpg'
const Mission = () => {
    return (
        <div className="py-10 md:py-16 px-3 container mx-auto flex items-center flex-col md:flex-row-reverse gap-6">
            <div className="w-full md:w-3/5">
                <img className='w-full' src={missionPic} alt="" />
            </div>
            <div className="w-full md:w-2/5">
                <h2 className='text-NavyBlue font-bold text-4xl'>Our Mission</h2>
                <hr className='w-[280px] border-4 border-NavyBlue' />
                <p className='my-8'>
                    At Alokito Kobita, our mission is simple: to cultivate a thriving community of poets and poetry lovers and to promote the appreciation and creation of poetry as a vital form of expression. We strive to provide a platform where poets from diverse backgrounds can showcase their work, connect with fellow writers, and engage with an audience passionate about the written word.
                    <br />
                    <br />
                    Join us as we celebrate the magic of language and the boundless possibilities of the human spirit
                </p>
            </div>
        </div>
    );
};

export default Mission;
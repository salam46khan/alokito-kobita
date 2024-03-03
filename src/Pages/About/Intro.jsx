import introPic from '../../assets/img/writing.jpg'
const Intro = () => {
    return (
        <div className="container mx-auto pt-16 px-3 flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/2">
                <img className='w-full' src={introPic} alt="" />
            </div>
            <div className='w-full md:w-1/2'>
                <h2 className='text-NavyBlue font-bold text-4xl'>Introduction</h2>
                <hr className='w-[280px] border-4 border-NavyBlue' />
                <p className='my-8'>
                    Welcome to Alokito Kobita, a digital haven for poetry enthusiasts and wordsmiths alike. At Alokito Kobita, we believe in the power of poetry to inspire, heal, and unite.
                    <br /> <br />
                    Our platform is dedicated to celebrating the art of verse in all its forms and providing a welcoming space for poets and readers to connect, share, and explore the beauty of language.
                    <br />
                    Join us as we celebrate the magic of language and the boundless possibilities of the human spirit
                </p>
            </div>
        </div>
    );
};

export default Intro;
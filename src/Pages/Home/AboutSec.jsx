import { Link } from 'react-router-dom';
import AboutPic from '../../assets/img/Hand holding pen.gif'
import { Button } from '@material-tailwind/react';
import { FaArrowRight } from 'react-icons/fa6';
const AboutSec = () => {
    return (
        <div className="py-8 px-3">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 ">
                    <img className='w-4/5 mx-auto p-8' src={AboutPic} alt="" />
                </div>
                <div className='w-full md:w-1/2'>
                    <h2 className='text-NavyBlue font-bold text-4xl'>About</h2>
                    <hr className='w-[280px] border-4 border-NavyBlue' />
                    <p className='my-8'>
                        Welcome to Alokito Kobita, a digital haven for poetry enthusiasts and wordsmiths alike. At Alokito Kobita, we believe in the power of poetry to inspire, heal, and unite.
                            <br /> <br />
                        Our platform is dedicated to celebrating the art of verse in all its forms and providing a welcoming space for poets and readers to connect, share, and explore the beauty of language.
                    </p>
                    <Link to={'/about'}>
                        <Button className="bg-cyan-200 mt-4 flex items-center gap-2 text-black">
                            Post Now
                            <FaArrowRight />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutSec;
import { Link } from 'react-router-dom';
import img from '../assets/img/bg.jpg'
import { Button } from '@material-tailwind/react';
import { FaArrowRight } from 'react-icons/fa6';
import prof from '../assets/img/profile.jpg'
import PropTypes from 'prop-types';

const PoemCard = ({poemItem}) => {
    const {poem, poem_name, category, date, _id} = poemItem;
    // console.log(poemItem);
    return (
        <div className="card outline-none shadow-lg hover:-translate-y-2 duration-200 hover:shadow-[#0006] rounded-2xl overflow-hidden bg-NavyBlue w-full max-w-xs">
            <div className='h-[180px] w-full overflow-hidden relative'>
                <div className=' h-[120px] w-full absolute bottom-0 left-0 bg-gradient-to-b from-transparent to-NavyBlue z-10 text-white'></div>
                <div className='absolute top-10 py-1 left-10 -rotate-45 px-16 -translate-y-1/2 -translate-x-1/2 bg-ElectricBlue'>
                    <p>{category}</p>
                </div>
                <img className='w-full h-auto object-fill' src={img} alt="" />
            </div>
            <div className='p-3'>
                <h2 className='text-ElectricBlue font-semibold text-2xl text-center'>{poem_name}</h2>
                <div className='text-gray-200 text-center my-3 h-[120px] overflow-hidden'>
                    {poem}
                </div>
                <hr />
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2 items-center'>
                        <img className='h-10 w-10 rounded-full' src={prof} alt="" />
                        <div className=''>
                            <p className='text-ElectricBlue font-semibold'>Name of poetry</p>
                            <p className='text-gray-300 text-xs'>{date}</p>
                        </div>
                    </div>
                    <div>
                        <Link to={`/poem/:${_id}`}>
                            <Button className="bg-cyan-200 mt-4 flex items-center mx-auto gap-2 text-black">
                                Details
                                <FaArrowRight />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

PoemCard.propTypes = {
    poemItem: PropTypes.object
}

export default PoemCard;
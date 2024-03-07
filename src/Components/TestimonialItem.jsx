import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import PropTypes from 'prop-types'
import pro from '../assets/img/profile.jpg'
const TestimonialItem = ({review}) => {
    const {name, avater, testimonial} = review
    return (
        <div className="flex justify-center px-3 pb-10">
            <div className="bg-white md:mt-16 w-full max-w-2xl shadow-xl shadow-[#0003] rounded-2xl md:rounded-full p-5 text-center relative">
                <div className="h-28 w-28 mx-auto md:absolute md:top-0 md:left-1/2 md:-translate-y-1/2 md:-translate-x-1/2 rounded-full shadow-md  overflow-hidden">
                    <img className="border-4 border-white rounded-full h-full w-full shadow-inner shadow-gray-700" src={avater? avater: pro} alt="" />
                </div>
                <p className="text-2xl font-bold md:mt-10">{name}</p>
                <div>
                    <div className="py-2">
                        <div className='relative py-4'>
                            <FaQuoteLeft className='absolute top-0 left-1/2 mx-auto -translate-x-1/2 text-center w-12 h-8 bg-transparent' />
                        </div>
                        <p className="text-center text-NavyBlue px-3">{testimonial}</p>
                        <div className='relative py-4'>
                            <FaQuoteRight className='absolute top-0 left-1/2 mx-auto -translate-x-1/2 text-center w-12 h-8 bg-transparent' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

TestimonialItem.propTypes = {
    review: PropTypes.object
}
export default TestimonialItem;
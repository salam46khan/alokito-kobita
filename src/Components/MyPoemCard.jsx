import { Button } from "@material-tailwind/react";
import { FaRegEdit } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

// import img from '../assets/img/bg.jpg'

const MyPoemCard = ({ myPoem }) => {
    const { category, poem_name, poem, cover_photo, _id } = myPoem
    return (
        <div className="p-2 rounded-md shadow-lg shadow-[#0002] flex flex-col md:flex-row gap-2">
            <div className="w-full md:w-2/5 border">
                <img className="min-w-full min-h-full object-cover" src={cover_photo} alt="" />
            </div>
            <div className="w-full md:w-3/5 px-2">
                <p className="text-2xl">{poem_name}</p>
                <p className="font-bold text-sm">{category}</p>
                <p className="font-thin text-lg overflow-hidden h-[55px] text-gray-500">
                    {poem}
                </p>
                <div className="flex flex-wrap justify-between gap-2 my-1">
                    <div className="">
                        <Link to={`/poem/${_id}`}>
                            <Button className="bg-cyan-300 text-white px-6 py-2 md:px-3 flex items-center mx-auto gap-2">
                                <span className="hidden md:block">Details</span>
                                <FaArrowRight className="text-2xl md:text-lg" />
                            </Button>
                        </Link>
                    </div>
                    <div className="">
                        <Link to={`/update/${_id}`}>
                            <Button className="bg-green-300 text-white px-6 md:px-3 py-2 flex items-center mx-auto gap-2">
                                <span className="hidden md:block">Edit</span>
                                <FaRegEdit className="text-2xl md:text-lg" />
                            </Button>
                        </Link>
                    </div>
                    <div className="">
                        <Button className="bg-red-300 px-6 md:px-3 py-2 flex items-center mx-auto gap-2 text-white">
                            <span className="hidden md:block">Delete</span>
                            <MdDelete className="text-2xl md:text-lg" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

MyPoemCard.propTypes = {
    myPoem: PropTypes.object
}
export default MyPoemCard;
import { Link } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
import { FaArrowRight } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import PropTypes from 'prop-types';
import useAxiosPublic from '../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const MyFevCard = ({ myFevPoem }) => {
    const { poem_name, poetry_name, cover_photo, poem_id, _id } = myFevPoem
    const axiosPublic = useAxiosPublic()

    const handleRemoveFav = (id) => {
        // console.log(id);
        axiosPublic.delete(`/fev/${id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Your fev poem remove successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div className="p-2 rounded-md shadow-lg shadow-[#0002] flex items-center flex-col md:flex-row gap-2">
            <div className='w-full md:w-1/5'>
                <img className='min-h-full min-w-full object-cover' src={cover_photo} alt="" />
            </div>
            <div className='w-full md:w-2/5'>
                <p className='font-bold text-2xl'>{poem_name}</p>
                <p className='text-gray-500'>{poetry_name}</p>
            </div>
            <div className='w-full md:w-2/5 border flex justify-between items-center'>

                <Link to={`/poem/${poem_id}`}>

                    <Button className="bg-cyan-300 text-white px-6 py-2 md:px-3 flex items-center gap-2">
                        <span className="">Details</span>
                        <FaArrowRight className="text-[20px]" />
                    </Button>
                </Link>

                <Button onClick={() => handleRemoveFav(_id)} className="bg-red-300 text-white px-6 py-2 md:px-3 flex items-center  gap-2">
                    <span className="">Remove</span>
                    <MdDelete className="text-[20px]" />
                </Button>
            </div>
        </div>
    );
};

MyFevCard.propTypes = {
    myFevPoem: PropTypes.object
}
export default MyFevCard;
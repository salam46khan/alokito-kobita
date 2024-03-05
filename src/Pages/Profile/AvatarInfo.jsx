import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import LogoutBtn from "../Registation/LogoutBtn";

const AvatarInfo = () => {
    return (
        <div>
            <div>
                <div className="mb-5">
                    <div className='relative py-4'>
                        <FaQuoteLeft className='absolute top-0 left-1/2 mx-auto -translate-x-1/2 text-center w-12 h-8 bg-transparent' />
                    </div>
                    <p className="text-center font-semibold text-NavyBlue px-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, minima?</p>
                    <div className='relative py-4'>
                        <FaQuoteRight className='absolute top-0 left-1/2 mx-auto -translate-x-1/2 text-center w-12 h-8 bg-transparent' />
                    </div>
                </div>
                <div className="space-y-2">
                    <p>Address: </p>
                    <p>Phone: </p>
                    <p>Date of Bath: </p>
                    <p>Gender: </p>
                    <p>Poems: </p>
                    <p>Followers: </p>
                </div>

            </div>
            <div className="flex justify-start mt-8">
                <LogoutBtn></LogoutBtn>
            </div>
        </div>
    );
};

export default AvatarInfo;
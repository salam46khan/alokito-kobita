import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import LogoutBtn from "../Registation/LogoutBtn";
import PropTypes from 'prop-types'

const AvatarInfo = ({proInfo}) => {
    // console.log(proInfo);
    // const {address, phone, bathday, gender,} = proInfo;
    return (
        <div>
            <div>
                <div className="mb-5">
                    <div className='relative py-4'>
                        <FaQuoteLeft className='absolute top-0 left-1/2 mx-auto -translate-x-1/2 text-center w-12 h-8 bg-transparent' />
                    </div>
                    <p className="text-center font-semibold text-NavyBlue px-3">{proInfo?.bio ? proInfo.bio : 'Write somthing about you in bio'}</p>
                    <div className='relative py-4'>
                        <FaQuoteRight className='absolute top-0 left-1/2 mx-auto -translate-x-1/2 text-center w-12 h-8 bg-transparent' />
                    </div>
                </div>
                <div className="space-y-2">
                    <p>Address: {proInfo?.address}</p>
                    <p>Phone: {proInfo?.phone}</p>
                    <p>Date of Bath: {proInfo?.birthday}</p>
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

AvatarInfo.propTypes ={
    proInfo: PropTypes.object
}
export default AvatarInfo;
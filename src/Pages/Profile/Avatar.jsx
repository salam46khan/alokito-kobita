import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import profile from '../../assets/img/profile.jpg'
import { Button } from "@material-tailwind/react";
import { RiUserFollowLine } from "react-icons/ri";
import { IoMailOpenOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

const Avatar = () => {
    const { user } = useContext(AuthContext)


    return (
        <div className="container mx-auto flex flex-col md:flex-row gap-3">
            <div className="w-full md:w-1/4 relative py-3">
                <div className="h-40 w-40 mx-auto md:absolute md:top-0 md:left-1/2 md:-translate-y-1/2 md:-translate-x-1/2 rounded-full shadow-md  overflow-hidden">
                    <img className="border-4 border-white rounded-full h-full w-full shadow-inner shadow-gray-700" src={user?.photoURL ? user?.photoURL : profile} alt="" />
                    <img src={user.photoURL} alt="" />
                </div>
            </div>
            <div className="w-full md:w-3/4 py-3 text-center md:text-start flex flex-col md:flex-row justify-between items-center">
                <div className="space-y-1">
                    <h2 className="text-3xl font-bold text-NavyBlue">{user?.displayName}</h2>
                    <div className="flex items-center gap-2 text-gray-400">
                        <IoMailOpenOutline />
                        <p>{user.email}</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                        <FaPhoneAlt />
                        <p>017---</p>
                    </div>
                    
                </div>
                <div>
                    <Link to={'/add-poem'}>
                        <Button className="bg-cyan-200  flex items-center mx-auto gap-2 text-NavyBlue">
                            Add Poem
                            <RiUserFollowLine className="text-xl" />
                        </Button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Avatar;
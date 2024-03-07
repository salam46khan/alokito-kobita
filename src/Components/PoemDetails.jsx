import PageBanner from "./PageBanner";
import { Button } from "@material-tailwind/react";
import { IoBookmarks } from "react-icons/io5";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { AuthContext } from "../Provider/AuthProvider";
const PoemDetails = () => {

    const {user} = useContext(AuthContext)
    const [thisPoem, setThisPoem] = useState({})
    const { poem_name, poem, category, date, _id, viewer, cover_photo, avatar, poetry_name } = thisPoem;
    const respon = useParams()

    // console.log(respon);
    const axiosPublic = useAxiosPublic()

    axiosPublic.get(`/poem/${respon.id}`)
        .then(res => {
            // console.log(res.data);
            setThisPoem(res.data)
        })

    // console.log(thisPoem);


    const handleFev = (id) =>{
        console.log(id);
        const poem_id = id;
        const user_email = user.email;
        const fevPoem = {poem_id, user_email, poem_name, poetry_name, cover_photo, category}
        console.log(fevPoem);
    }
    return (
        <div>
            <PageBanner title={'Poem Details'}></PageBanner>
            <div className="container mx-auto px-3 py-10">
                <div className="h-[160px] md:h-[300px] overflow-hidden relative rounded-lg">
                    <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-30 flex justify-center items-center flex-col pt-6">
                        <p className="text-3xl font-bold text-ElectricBlue uppercase">{poem_name}</p>
                        <p className="text-xl text-white ">_ {poetry_name}</p>
                    </div>
                    <img className="w-full object-center" src={cover_photo} alt="" />
                </div>
                <div>
                    <div className="container mx-auto flex flex-col md:flex-row gap-3">
                        <div className="w-full md:w-1/4 relative py-3">
                            <div className="h-40 w-40 mx-auto md:absolute md:top-0 md:left-1/2 md:-translate-y-1/2 md:-translate-x-1/2 rounded-full shadow-md  overflow-hidden">
                                <img className="border-4 border-white rounded-full h-full w-full shadow-inner shadow-gray-700" src={avatar} alt="" />
                            </div>
                        </div>
                        <div className="w-full md:w-3/4 py-3 text-center md:text-start flex flex-col md:flex-row justify-between items-center">
                            <div className="space-y-1">
                                <p className="">Category: {category}</p>
                                <p className="">Published: {date}</p>
                                <p>View: {viewer}</p>
                            </div>
                            <div>
                                <Button onClick={()=> handleFev(_id)} className="bg-cyan-200  flex items-center mx-auto gap-2 text-NavyBlue">
                                    Add Fevorite
                                    <IoBookmarks className="text-xl" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="p-5">
                    <div className="w-full max-w-md shadow-2xl mx-auto shadow-gray-600 p-5 text-center">
                        <p className="whitespace-pre-line">
                            {poem}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PoemDetails;
import { Button } from "@material-tailwind/react";
import { FaArrowLeft, FaHouse } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="MyError h-screen w-full">
            <div className="container mx-auto h-full flex items-center justify-center font-NormalText">
                <div className="text-center w-full max-w-xl text-white space-y-5">
                    <h2 className="text-7xl md:text-9xl font-extrabold text-ElectricBlue font-TitleText">Oops!</h2>
                    <p className="text-2xl">The Page Not Found</p>
                    <div className="flex gap-5 justify-center">
                        <Link to={-1}>
                            <Button className="bg-cyan-200 flex items-center mx-auto gap-2 text-black">
                                Go Back
                                <FaArrowLeft />
                            </Button>
                        </Link>
                        <Link to={'/'}>
                            <Button className="bg-cyan-200  flex items-center mx-auto gap-2 text-black">
                                Go Home
                                <FaHouse />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;
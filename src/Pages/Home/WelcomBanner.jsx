import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";

const WelcomBanner = () => {
    return (
        <div className="h-screen w-full MyBanner">
            <div className="container mx-auto flex items-center justify-center h-full">
                <div className="max-w-2xl text-center p-3 space-y-2">
                    <p className="text-xl text-ElectricBlue">Welcome to</p>
                    <h1 className="font-TitleText text-4xl md:text-6xl text-white">Alokito Kobita</h1>
                    <p className="text-2xl text-ElectricBlue"></p>
                    <div>
                        <TypeAnimation
                            preRenderFirstString={true}
                            sequence={[
                                500,
                                'Where Poetry Comes Alive.', // initially rendered starting point
                                1000,
                                'Where Emotions Flow in Verse.',
                                1000,
                                'Where Poetry Blossoms.',
                                1000,
                                'Where Words Paint Emotions',
                                500,
                            ]}
                            speed={10}
                            className="text-2xl text-ElectricBlue font-bold"
                            repeat={Infinity}
                        />
                    </div>
                    <p className="text-gray-200">
                        At Alokito Kobita, we're passionate about fostering a vibrant community of poets and poetry lovers. Our platform serves as a sanctuary where diverse voices can share their stories, emotions, and perspectives through the art of poetry.
                    </p>
                    <Link className="" to={'/add-poem'}>
                        <Button className="bg-cyan-200 mt-4 flex items-center mx-auto gap-2 text-black">
                            Post Now
                            <FaArrowRight />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WelcomBanner;
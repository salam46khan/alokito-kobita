import { Button } from "@material-tailwind/react";
import { FaPhone } from "react-icons/fa6";

const CallAction = () => {
    return (
        <div className="py-14 px-3 MyOffer">
            <div className="container mx-auto">
                <div className="w-full max-w-3xl mx-auto text-center space-y-3">
                    <h2 className='text-NavyBlue font-bold text-4xl'>Call To Action</h2>
                    <hr className='w-[280px] mx-auto border-4 border-NavyBlue' />
                    <p className="text-gray-500">
                        Alokito Kobita Poetry Finds Its Voice and Hearts Find Their Song. Alokito Kobita invites you to explore the beauty and power of poetry in its myriad forms.
                    </p>
                    <div className="pt-5">
                        <Button className="bg-cyan-200 flex items-center mx-auto gap-2 text-black">
                            <FaPhone className="text-lg" />
                            Go Home
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallAction;
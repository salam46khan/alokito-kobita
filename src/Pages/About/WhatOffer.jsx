import { FaUsers } from "react-icons/fa6";
import { MdCollectionsBookmark, MdLocalOffer } from "react-icons/md";
const WhatOffer = () => {
    return (
        <div className="py-16 px-3 bg-light-blue-50 MyOffer">
            <div className="container mx-auto ">
                <div className="w-full max-w-3xl mx-auto space-y-2 text-center mb-10">
                    <h2 className='text-NavyBlue font-bold text-4xl'>Introduction</h2>
                    <hr className='w-[280px] mx-auto border-4 border-NavyBlue' />
                    <p className="text-gray-500">
                        Alokito Kobita Poetry Finds Its Voice and Hearts Find Their Song. Alokito Kobita invites you to explore the beauty and power of poetry in its myriad forms.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-stretch gap-4">
                    <div className="border w-full max-w-sm MyOfferCard rounded-md">
                        <div className="h-20 w-20 border-4 rounded-full flex justify-center items-center text-4xl mx-auto border-NavyBlue text-NavyBlue mb-4">
                            <MdLocalOffer className="CardIcon" />
                        </div>
                        <p className="text-2xl font-bold text-NavyBlue mb-2">Showcase Opoturnaty</p>
                        <p className="text-gray-500">
                            Alokito Kobita offers poets the opportunity to showcase their poems to a global audience. Whether you're a seasoned poet or just starting your journey
                        </p>
                    </div>
                    <div className="border w-full max-w-sm MyOfferCard rounded-md">
                        <div className="h-20 w-20 border-4 rounded-full flex justify-center items-center text-4xl mx-auto border-NavyBlue text-NavyBlue mb-4">

                            <MdCollectionsBookmark className="CardIcon" />
                        </div>
                        <p className="text-2xl font-bold text-NavyBlue mb-2">Curated Collection</p>
                        <p className="text-gray-500">
                            Dive into our curated collection of poems, spanning a wide range of themes, styles, and voices. From heartfelt sonnets to poignant haikus
                        </p>
                    </div>
                    <div className="border w-full max-w-sm MyOfferCard rounded-md">
                        <div className="h-20 w-20 border-4 rounded-full flex justify-center items-center text-4xl mx-auto border-NavyBlue text-NavyBlue mb-4">
                            <FaUsers className="CardIcon" />
                        </div>
                        <p className="text-2xl font-bold text-NavyBlue mb-2">Community Engagement</p>
                        <p className="text-gray-500">
                            Join our vibrant community of poets and readers and engage in meaningful discussions about poetry, creativity, and life.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WhatOffer;
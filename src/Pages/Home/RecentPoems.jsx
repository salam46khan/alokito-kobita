import { useState } from "react";
import PoemCard from "../../Components/PoemCard";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { FaArrowRight } from "react-icons/fa6";

const RecentPoems = () => {
    const [poem, setPoem] = useState([])
    fetch('fake-poem-data.json')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setPoem(data)
        })
    return (
        <div className="py-16 px-3 bg-gradient-to-tr from-[#e7fcfe] to-[#f0eeff] ">
            <div className="container mx-auto">
                <div className="w-full max-w-3xl mx-auto space-y-2 text-center mb-10">
                    <h2 className='text-NavyBlue font-bold text-4xl'>Recent Poems</h2>
                    <hr className='w-[280px] mx-auto border-4 border-NavyBlue' />
                    <p className="text-gray-500">
                        Alokito Kobita Poetry Finds Its Voice and Hearts Find Their Song. Alokito Kobita invites you to explore the beauty and power of poetry in its myriad forms.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center  gap-6">


                    {
                        poem.map(poem => <PoemCard key={poem.id} poemItem={poem}></PoemCard>)
                    }
                </div>
                <div className="mt-10">
                    <Link to={'/all-poem'}>
                        <Button className="bg-cyan-200 flex items-center mx-auto gap-2 text-black">
                            See All
                            <FaArrowRight />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RecentPoems;
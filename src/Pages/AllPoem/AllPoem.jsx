import { useState } from "react";
import PageBanner from "../../Components/PageBanner";
import PoemCard from "../../Components/PoemCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const AllPoem = () => {
    // const [poem] = usePoems()
    const axiosPublic = useAxiosPublic()
    const [expectPoem, setExpectPoem] = useState([]);
    axiosPublic.get('/poems')
        .then(res => {
            // console.log(res.data);
            setExpectPoem(res.data)
        })

    return (
        <div>
            <PageBanner title={'All Poem'}></PageBanner>
            <div className="py-14 px-3 font-NormalText">
                <div className="container mx-auto">
                    <div>
                        search section
                    </div>
                    <div>
                        {/* {
                            expectPoem.map(poem => <PoemCard key={poem._id} poemItem={poem}></PoemCard>)
                        } */}

                    </div>
                    <div className="flex flex-wrap justify-center  gap-6">
                        {
                            expectPoem.map(poem => <PoemCard key={poem._id} poemItem={poem}></PoemCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllPoem;
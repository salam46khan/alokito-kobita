import PageBanner from "./PageBanner";
import img from '../assets/img/bg.jpg'
import { Button } from "@material-tailwind/react";
import { IoBookmarks } from "react-icons/io5";
const PoemDetails = () => {
    return (
        <div>
            <PageBanner title={'Poem Details'}></PageBanner>
            <div className="container mx-auto px-3 py-10">
                <div className="h-[160px] md:h-[300px] overflow-hidden relative rounded-lg">
                    <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-30 flex justify-center items-center">
                        <p className="text-3xl font-bold text-ElectricBlue uppercase">Kobitar name</p>
                    </div>
                    <img className="w-full object-center" src={img} alt="" />
                </div>
                <div>


                    <div className="container mx-auto flex flex-col md:flex-row gap-3">
                        <div className="w-full md:w-1/4 relative py-3">
                            <div className="h-40 w-40 mx-auto md:absolute md:top-0 md:left-1/2 md:-translate-y-1/2 md:-translate-x-1/2 rounded-full shadow-md  overflow-hidden">
                                <img className="border-4 border-white rounded-full h-full w-full shadow-inner shadow-gray-700" src={img} alt="" />
                            </div>
                        </div>
                        <div className="w-full md:w-3/4 py-3 text-center md:text-start flex flex-col md:flex-row justify-between items-center">
                            <div className="space-y-1">
                                <h2 className="text-3xl font-bold text-NavyBlue">name of Kabi</h2>
                                <p className="">category</p>
                            </div>
                            <div>
                                
                                    <Button className="bg-cyan-200  flex items-center mx-auto gap-2 text-NavyBlue">
                                        Add Fevorite
                                        <IoBookmarks className="text-xl"/>
                                    </Button>
                                

                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="p-5">
                    <div className="w-full max-w-md shadow-2xl mx-auto shadow-gray-600 p-5 text-center">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, praesentium. Officiis quia commodi error architecto placeat obcaecati eligendi nobis, libero autem magnam, eius explicabo! Excepturi quibusdam maiores voluptatibus quas debitis? Officiis eos corporis odit. Libero vitae labore atque id culpa!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam esse tenetur assumenda sunt dolor voluptates ea exercitationem veniam nam commodi maxime qui nulla laborum error provident voluptatum, est fuga consequatur?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PoemDetails;
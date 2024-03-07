import PageBanner from "../../Components/PageBanner";
import alert from '../../assets/img/Alert! Alert! Alert!.png'

const UpdatePoem = () => {
    return (
        <div>
            <PageBanner title={'Update Poem'}></PageBanner>
            <div className="py-14 px-3">
                <div className="container mx-auto flex gap-4 flex-col md:flex-row-reverse">
                    <div className="w-full md:w-1/5 border shadow-md">
                        <img className="w-full" src={alert} alt="" />
                        <div className="mt-4 p-2">
                            <h1 className="text-xl font-bold text-red-500 text-center">Penalty of copyright</h1>
                            <p className="text-gray-400 mt-2 text-justify">
                                The infringement of copyright is a cognizable offence and is punishable with imprisonment for a period extending from six months to four years and a fine ranging from Tk. 50,000/- to Tk. 200,000/-.
                            </p>

                            <p className="font-extrabold text-center  shadow-inner mt-2 p-2">So avoid copying</p>
                        </div>
                    </div>
                    <div className="w-full md:w-4/5 p-2 flex justify-center">
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdatePoem;
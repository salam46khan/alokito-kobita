import { useState } from "react";
import PageBanner from "../../Components/PageBanner";
import alert from '../../assets/img/Alert! Alert! Alert!.png'
import { IoMdArrowDropdown } from "react-icons/io";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const UpdatePoem = () => {
    const respon = useParams()
    const poemId = respon.id;
    const [curentPoem, setCurentPoem] = useState({})
    const axiosPublic = useAxiosPublic()

    axiosPublic.get(`/poem/${poemId}`)
        .then(res => {
            // console.log(res.data);
            setCurentPoem(res.data)
        })

    const { poem, poem_name, category, cover_photo} = curentPoem;

    // select category start --------------------------------------------
    const [selectedOption, setSelectedOption] = useState(category);

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };
    // console.log(selectedOption);


    // upload img start-----------------------------------------------------
    const [image, setImage] = useState(null);

    const handleUploadImage = event => {
        event.preventDefault()
        const img = event.target.files[0]
        const formData = new FormData();
        formData.append('image', img);

        fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgKey}`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data.data);
                setImage(data.data.display_url)
            })
    }
    // console.log(image);

    const currentPhoto = image ? image : cover_photo;
    const currentCategory = selectedOption ? selectedOption : category ;
    // console.log(currentPhoto);
    const handleUpdatePoem = event => {
        event.preventDefault()

        const form = event.target;
        const poem_name = form.poem_name.value;
        const poem = form.poem.value;
        const category = currentCategory;
        const cover_photo = currentPhoto;
        

        const updatePoem = { poem_name, poem, category, cover_photo}
        // console.log(publishPoem);

        axiosPublic.patch(`/mypoem/${poemId}`, updatePoem)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Your Poem Update successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }
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

                        <div className="bg-white w-full max-w-3xl rounded-lg shadow-2xl shadow-[#0002] p-4 md:p-8">
                            <p className="text-center font-bold text-3xl mb-6">Update Your Poem</p>
                            <form onSubmit={handleUpdatePoem}>
                                <div className="flex gap-4 flex-col md:flex-row">
                                    <div className="w-full md:w-1/2">
                                        <div className=''>
                                            <label className="block text-NavyBlue text-md mb-2">
                                                Upload cover photo
                                            </label>
                                            <input
                                                onChange={handleUploadImage}
                                                className="shadow appearance-none border rounded-full w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline   relative m-0 block min-w-0 flex-auto cursor-pointer border-solid border-neutral-300 bg-clip-padding file:py-3  file:border-none file:px-5 file:mr-3 file:bg-NavyBlue file:text-ElectricBlue text-xs font-normal text-neutral-700 transition duration-300 ease-in-out  file:cursor-pointer file:overflow-hidden"
                                                type="file" />
                                        </div>
                                    </div>
                                    <div className="mb-4 w-full md:w-1/2">
                                        <label className="block text-NavyBlue text-md mb-2">
                                            Category
                                        </label>
                                        <div className="relative">
                                            <div className="absolute top-1/2 right-3 -translate-y-1/2 ">
                                                <IoMdArrowDropdown className="text-2xl" />
                                            </div>
                                            <select name="category" value={selectedOption} defaultValue={category} onChange={handleSelectChange} className="select select-bordered shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none caption-bottom bg-white focus:shadow-outline">
                                                <option value="love">Love</option>
                                                <option value="nature">Nature</option>
                                                <option value="romance">Romance</option>
                                                <option value="friendship">Friendship</option>
                                                <option value="spirituality">Spirituality</option>
                                                <option value="war">War</option>
                                                <option value="dreams">Dreams</option>
                                                <option value="adventure">Adventure</option>
                                            </select>
                                        </div>

                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-NavyBlue text-md mb-2">
                                        Poem Name
                                    </label>
                                    <input name='poem_name' className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" defaultValue={poem_name} />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-NavyBlue text-md mb-2">
                                        Poem
                                    </label>
                                    <textarea name='poem' className="shadow appearance-none border rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" defaultValue={poem} />
                                </div>
                                <div className="mt-5 flex justify-center">
                                    <input className="bg-cyan-200 rounded-full inline-block px-8 uppercase text-sm  focus:outline-none focus:shadow-outline py-3 shadow-md cursor-pointer shadow-gray-400 hover:shadow-lg hover:shadow-gray-400 font-semibold" type="submit" value={'Update'} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdatePoem;
import { useContext, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const AddedPoemForm = () => {
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()

// select category start ----------------------------------
    const [selectedOption, setSelectedOption] = useState('love');
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };
    console.log(selectedOption);
// select category end -------------------------------------


// img updoad start-----------------------------------------
    const [image, setImage] = useState(null);

    const handleUploadImage = event => {
        event.preventDefault()
        const img = event.target.files[0]
        const formData = new FormData();
        formData.append('image', img);

        fetch(`https://api.imgbb.com/1/upload?key=6df55e6740c278942407a5354eacc610`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data.data);
                setImage(data.data.display_url)
            })
    }
// img upload end---------------------------------------------------


//formated date --------------------------------------------------- 
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
  
    
// handlePublishPoem start ------------------------------------
    const handlePublishPoem = event => {
        event.preventDefault()
        const form = event.target;
        const poem_name = form.poem_name.value;
        const poem = form.poem.value;
        const category = selectedOption;
        const cover_photo = image;
        const avatar = user.photoURL;
        const poetry_name = user.displayName;
        const poetry_email = user.email;
        const date = formattedDate;
        const viewer = 0

        const publishPoem = { poem_name, poem, category, cover_photo, avatar, poetry_name, date, poetry_email, viewer}
        // console.log(publishPoem);

        axiosPublic.post('/poem', publishPoem)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Your Poem Publish successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset()
                }
            })
    }

    return (
        <div className="bg-white w-full max-w-3xl rounded-lg shadow-2xl shadow-[#0002] p-4 md:p-8">
            <p className="text-center font-bold text-3xl mb-6">Publish Your Poem</p>
            <form onSubmit={handlePublishPoem}>
                <div className="flex gap-4 flex-col md:flex-row">
                    <div className="w-full md:w-1/2">
                        <div className=''>
                            <label className="block text-NavyBlue text-md mb-2">
                                Upload cover photo
                            </label>
                            <input
                                onChange={handleUploadImage}
                                className="shadow appearance-none border rounded-full w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline   relative m-0 block min-w-0 flex-auto cursor-pointer border-solid border-neutral-300 bg-clip-padding file:py-3  file:border-none file:px-5 file:mr-3 file:bg-NavyBlue file:text-ElectricBlue text-xs font-normal text-neutral-700 transition duration-300 ease-in-out  file:cursor-pointer file:overflow-hidden hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                                type="file" required />
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
                            <select name="category" value={selectedOption} onChange={handleSelectChange} className="select select-bordered shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none caption-bottom bg-white focus:shadow-outline">
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
                    <input name='poem_name' className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="type your poem name" />
                </div>
                <div className="mb-4">
                    <label className="block text-NavyBlue text-md mb-2">
                        Poem
                    </label>
                    <textarea name='poem' className="shadow appearance-none border rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="type your poem name" />
                </div>
                <div className="mt-5 flex justify-center">
                    <input className="bg-cyan-200 rounded-full cursor-pointer inline-block px-8 uppercase text-sm  focus:outline-none focus:shadow-outline py-3 shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-400 font-semibold" type="submit" value={'Publish'} />
                </div>
            </form>
        </div>
    );
};

export default AddedPoemForm;
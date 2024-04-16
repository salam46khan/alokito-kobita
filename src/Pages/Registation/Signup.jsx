import { useContext, useState } from 'react';
import loginPic from '../../assets/img/Sign up(1).gif'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import GoogleLogin from './GoogleLogin';
import useAxiosPublic from '../../hooks/useAxiosPublic';
const Signup = () => {
    const { createUser } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location);


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
                console.log(data.data);
                setImage(data.data.display_url)
            })
    }
    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value
        // console.log(name, email, password, image);

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: image
                })                
                const userInfo = {
                    name,
                    email
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                    })
                navigate(location.state ? location.state : '/')
            })
            .catch(error => {
                // setError(error.message)
                console.log(error);
            })

    }
    return (
        <div className="MyReg py-10 px-3">
            <div className="container mx-auto flex justify-center items-center mt-16">
                <div className="w-full max-w-3xl bg-white shadow-lg shadow-gray-500 overflow-hidden rounded-lg flex flex-row-reverse justify-center items-center">
                    <div className="hidden md:block w-1/2 ">
                        <img className='w-full' src={loginPic} alt="" />
                    </div>
                    <div className="w-full md:w-1/2 p-8">
                        <p className='text-NavyBlue font-bold text-2xl text-center'>Sign up</p>
                        <form onSubmit={handleSignUp} className='mt-4'>
                            <div className="mb-4">
                                <label className="block text-NavyBlue text-md mb-2">
                                    Full Name
                                </label>
                                <input name='name' className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="full name" required />
                            </div>


                            <div className="mb-4">
                                <label className="block text-NavyBlue text-md mb-2">
                                    Email Address
                                </label>
                                <input name='email' className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="email address" required />
                            </div>

                            <div className="mb-4">
                                <label className="block text-NavyBlue text-md  mb-2">
                                    Password
                                </label>
                                <input name='password' className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="password" required />
                            </div>

                            <div className='mb-4 '>

                                <input
                                    onChange={handleUploadImage}
                                    className="shadow appearance-none border rounded-full w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline   relative m-0 block min-w-0 flex-auto cursor-pointer border-solid border-neutral-300 bg-clip-padding file:py-3  file:border-none file:px-5 file:mr-3 file:bg-NavyBlue file:text-ElectricBlue text-xs font-normal text-neutral-700 transition duration-300 ease-in-out  file:cursor-pointer file:overflow-hidden hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"

                                    type="file" required />
                            </div>
                            <div className="mb-4">
                                <input className="bg-cyan-200 rounded-full w-full uppercase text-sm  focus:outline-none focus:shadow-outline py-3 shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-400 " type="submit" value={'Sign Up'} />
                            </div>
                        </form>

                        <div>

                            <div className='relative py-3'>
                                <hr className='shadow-md  border-2' />
                                <p className='absolute top-0 left-1/2 mx-auto -translate-x-1/2 text-center w-8 bg-white'>or</p>
                            </div>
                            <GoogleLogin></GoogleLogin>
                        </div>
                        <div className='mt-4 text-center'>
                            <p>Already have an account! <Link className='text-blue-700 font-bold' to={'/login'}>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
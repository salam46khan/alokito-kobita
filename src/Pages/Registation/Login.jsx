// import { Button } from '@material-tailwind/react';
import loginPic from '../../assets/img/Mobile login.gif'
import { Link } from 'react-router-dom';
// import TextField from '@mui/material/TextField';

const Login = () => {
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }
    return (
        <div className="MyReg py-10 px-3">
            <div className="container mx-auto flex justify-center items-center mt-16">
                <div className="w-full max-w-3xl bg-white shadow-lg shadow-gray-500 overflow-hidden rounded-lg flex justify-center items-center">
                    <div className="hidden md:block w-1/2 ">
                        <img className='w-full' src={loginPic} alt="" />
                    </div>
                    <div className="w-full md:w-1/2 p-8">
                        <p className='text-NavyBlue font-bold text-2xl text-center'>Login</p>
                        <form onSubmit={handleLogin} className='mt-4'>
                            <div className="mb-4">
                                <label className="block text-NavyBlue text-md mb-2">
                                    Email Address
                                </label>
                                <input name='email' className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="email address" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-NavyBlue text-md  mb-2">
                                    Password
                                </label>
                                <input name='password' className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="password" />
                            </div>
                            <div className="mb-4">
                                <input className="bg-cyan-200 rounded-full w-full uppercase text-sm  focus:outline-none focus:shadow-outline py-3 shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-400 " type="submit" value={'Login'} />
                            </div>
                        </form>

                        <div>
                            <div className='relative py-3'>
                                <hr className='shadow-md  border-2'/>
                                <p className='absolute top-0 left-1/2 mx-auto -translate-x-1/2 text-center w-8 bg-white'>or</p>
                            </div>
                            <input name='password' className="bg-cyan-200 rounded-full w-full uppercase text-sm  focus:outline-none focus:shadow-outline py-3 shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-400 " type="submit" value={'Login'} />
                        </div>
                        <div className='mt-4 text-center'>
                            <p>Don't have an account yet! <Link className='text-blue-700 font-bold' to={'/signup'}>Registation</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
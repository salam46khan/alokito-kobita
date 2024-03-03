import { FaFacebookF, FaHouse, FaInstagram, FaPhone, FaXTwitter } from 'react-icons/fa6';
import { IoIosMail } from "react-icons/io";
import { SlSocialPintarest } from "react-icons/sl";
import logo from '../../public/logo.png'
import { Link } from 'react-router-dom';
import { IconButton } from '@material-tailwind/react';
const Footer = () => {
    return (
        <div className="px-3 py-10 bg-NavyBlue">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-3 text-gray-300 text-center">
                <div className="md:border-r px-1 md:text-left">
                    <img className='mx-auto md:mx-0 w-3/5' src={logo} alt="" />
                    <p>
                        "Welcome to Alokito Kobita, where we believe in the transformative power of poetry. Our mission is to provide a nurturing space for poets to share their creativity and for readers to immerse themselves in the beauty of verse"
                    </p>
                </div>
                <div className="md:border-r py-5 md:text-start">
                    <p className='text-xl font-bold mb-5 text-white'>Contact</p>
                    <div className='flex items-center justify-center md:justify-start gap-2 p-1'>
                        <FaHouse></FaHouse>
                        <p>Satkhira, Bangladesh</p>
                    </div>
                    <div className='flex items-center justify-center md:justify-start gap-2 p-1'>
                        <FaPhone></FaPhone>
                        <p>+8801575-235909</p>
                    </div>
                    <div className='flex items-center justify-center md:justify-start gap-2 p-1'>
                        <IoIosMail />
                        <p>alokitokobita@gmail.com</p>
                    </div>
                </div>
                <div className="md:border-r py-5 md:text-start">
                    <p className='text-xl font-bold mb-5 text-white'>Links</p>
                    <ul className='space-y-2'>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/about'}>About</Link></li>
                        <li><Link to={'/profile'}>My Profile</Link></li>
                        <li><Link to={'/fev-poem'}>My Favorite Poem</Link></li>
                        <li><Link to={'/trem'}>Trems and Condication</Link></li>
                        <li><Link to={'/contact'}>Contact Us</Link></li>
                    </ul>
                </div>
                <div className='py-5 md:text-start'>
                    <p className='text-xl font-bold mb-5 text-white'>Follow Us</p>

                    <div className='gap-3 flex justify-center md:justify-start'>
                        <Link to={'/'}>
                            <IconButton className="rounded-full bg-blue-300 text-2xl">
                                <FaFacebookF />
                            </IconButton>
                        </Link>
                        <Link to={'/'}>
                            <IconButton className="rounded-full bg-[#E4405F] text-2xl">
                                <FaInstagram />
                            </IconButton>
                        </Link>
                        <Link to={'/'}>
                            <IconButton className="rounded-full bg-black text-2xl">
                                <FaXTwitter />
                            </IconButton>
                        </Link>
                        <Link to={'/'}>
                            <IconButton className="rounded-full bg-[#c8232c] text-2xl">
                                <SlSocialPintarest />
                            </IconButton>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='container mx-auto pt-8'>
                <hr />
                <p className='text-gray-300 text-center mt-2'>&copy; Copyright Alokito Kobita - 2024 || All right reserved</p>
            </div>
        </div>
    );
};

export default Footer;
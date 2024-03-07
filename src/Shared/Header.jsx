import { Link, NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import { FaSignInAlt } from "react-icons/fa";
import logo from '../../public/logo.png'
import { Button } from '@material-tailwind/react';
import { GrClose } from "react-icons/gr";
import { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import profile from '../assets/img/profile.jpg'

const Header = () => {

    const { user } = useContext(AuthContext)

    const [toggle, setToggle] = useState(true)

    const NavLists = <>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About us</NavLink>
        <NavLink to={'/all-poem'}>All Poems</NavLink>
        <NavLink to={'/add-poem'}>Add Poems</NavLink>
        <NavLink to={'/contact'}>Contact us</NavLink>
    </>
    return (
        <div className="bg-NavyBlue fixed top-0 left-0 w-full py-1 z-50">
            <div className="container mx-auto flex z-50  items-center text-white relative px-2">
                <div className="z-40 md:hidden w-2/12">
                    <Button onClick={() => setToggle(!toggle)} variant="text" className='text-ElectricBlue text-2xl p-1'>

                        {
                            toggle ? <FaBars /> : <GrClose />
                        }
                    </Button>
                </div>
                <div className="flex-grow z-40 w-2/12 md:flex-none flex justify-center md:justify-start">
                    <Link className='' to={'/'}>
                        <img className='h-14 p-1' src={logo} alt="" />
                    </Link>
                </div>

                <div className='hidden md:block flex-1'>
                    <ul className='flex justify-center w-full gap-1 px-3 MyNav'>
                        {
                            NavLists
                        }
                    </ul>
                </div>
                <div className={`bg-NavyBlue md:hidden w-full  z-0 absolute duration-300 left-0 ${toggle ? '-top-[300px] opacity-0 ' : 'top-14 opacity-100'}`}>
                    <ul className='flex flex-col  w-full gap-5 p-3 MyNav'>
                        {
                            NavLists
                        }
                    </ul>
                </div>
                <div className="w-2/12 flex justify-end z-40">
                    {
                        user ?
                            <Link className='' to={'/profile'}>
                                <Button data-ripple-light="true" data-tooltip-target="tooltip" size="md" className='bg-cyan-200 py-2 px-2 md:px-5 rounded-full flex items-center gap-2 text-black text-md'>
                                    <img className='h-7 w-7 rounded-full' src={user?.photoURL ? user?.photoURL : profile} alt="" />
                                  
                                    <span className='hidden md:block'>{user.displayName}</span>
                                </Button>


                                
                            </Link>


                            :

                            <Link to={'/login'}>
                                <Button size="md" className='bg-cyan-200 py-2 px-2 md:px-5 rounded-full flex items-center gap-2 text-black text-md'>
                                    <span className='hidden md:block'>Login</span>
                                    <FaSignInAlt className='text-2xl' />
                                </Button>
                            </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;
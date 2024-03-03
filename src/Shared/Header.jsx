import { Link, NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import logo from '../../public/logo.png'
import { Button } from '@material-tailwind/react';
import { GrClose } from "react-icons/gr";
import { useState } from 'react';

const Header = () => {
    const [toggle, setToggle] = useState(false)

    const NavLists = <>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/all-poem'}>All Poems</NavLink>
        <NavLink to={'/add-poem'}>Add Poems</NavLink>
        <NavLink to={'/fev-poem'}>My Favorite</NavLink>
    </>
    return (
        <div className="bg-NavyBlue fixed top-0 left-0 w-full py-1">
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
                    <Link to={'/'}><Button size="md" className='bg-cyan-200 text-black'>Login</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import logo from '../../public/logo.png'
import { Button } from '@material-tailwind/react';
import { GrClose } from "react-icons/gr";
import { useState } from 'react';

const Header = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className="bg-NavyBlue fixed top-0 left-0 w-full h-14">
            <div className="container mx-auto flex z-50  items-center text-white relative px-2">
                <div className=" md:hidden w-2/12">
                    <Button onClick={()=> setToggle(!toggle)} variant="text" className='text-ElectricBlue text-2xl p-1'>
                        
                        {
                            toggle ? <FaBars /> : <GrClose />
                        }
                    </Button>
                </div>
                <div className="flex-grow w-2/12 md:flex-none flex justify-center md:justify-start">
                    <Link className='' to={'/'}>
                        <img className='h-14 p-1' src={logo} alt="" />
                    </Link>
                </div>
                <div className={`bg-NavyBlue md:block w-full flex-1 -z-30 absolute md:static duration-300 left-0 md:top-14 ${toggle? '-top-[300px] opacity-0 ': 'top-14 opacity-100'}`}>
                    <ul className='flex md:flex-row flex-col md:justify-center w-full gap-5 px-3'>
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'/about'}>About</NavLink>
                        <NavLink to={'/'}>All Poems</NavLink>
                        <NavLink to={'/'}>Add Poems</NavLink>
                        <NavLink to={'/'}>My Favorite</NavLink>
                    </ul>
                </div>
                <div className="w-2/12 flex justify-end">
                    <Link to={'/login'}><Button size = "md"  className='bg-ElectricBlue text-black'>Login</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
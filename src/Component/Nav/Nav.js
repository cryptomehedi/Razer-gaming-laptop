import React, { useState } from 'react';
import { MenuAlt1Icon, XIcon } from '@heroicons/react/solid'
import CustomLink from '../CustomLink/CustomLink';
const Nav = () => {
    const [open , setOpen] = useState(false)
    return (
        <nav className="bg-white">
            <div onClick={() => setOpen(!open)}className='w-8 md:hidden'>
                {open ? <XIcon></XIcon> : <MenuAlt1Icon></MenuAlt1Icon>}
            </div>
            <ul className={`md:flex justify-center absolute md:static bg-white md:bg-white w-full duration-500 ease-in ${open ? 'top-8' : 'top-[-120px]'} ${open ? 'px-14' : 'px-0' }`}>
                <CustomLink onClick={()=>setOpen(false)} className="mr-9" to="/">Home</CustomLink>
                <CustomLink onClick={()=>setOpen(false)} className="mr-9" to="/reviews">Reviews</CustomLink>
                <CustomLink onClick={()=>setOpen(false)} className="mr-9" to="/dashboard">Dashboard</CustomLink>
                <CustomLink onClick={()=>setOpen(false)} className="mr-9" to="/blog">Blog</CustomLink>
                <CustomLink onClick={()=>setOpen(false)} className="mr-9" to="/about">About</CustomLink>
                
            </ul>
        </nav>
    );
};

export default Nav;
import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
const Nav = () => {
    return (
        <nav>
            <ul className={`md:flex justify-center absolute md:static w-full duration-500 ease-in `}>
                <CustomLink  className="mr-9" to="/">Home</CustomLink>
                <CustomLink  className="mr-9" to="/reviews">Reviews</CustomLink>
                <CustomLink  className="mr-9" to="/dashboard">Dashboard</CustomLink>
                <CustomLink  className="mr-9" to="/blog">Blog</CustomLink>
                <CustomLink  className="mr-9" to="/about">About</CustomLink>
                
            </ul>
        </nav>
    );
};

export default Nav;
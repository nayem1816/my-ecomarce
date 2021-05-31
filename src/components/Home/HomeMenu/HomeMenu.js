import React from 'react';
import './HomeMenu.scss';
import { Link } from 'react-router-dom';

const HomeMenu = () => {
    return (
        <div className='border home-menu'>
            <h5 className="menu-link-heading">BROWSE CATEGORIES</h5>
           <Link className="link-style" to=''><span className='link-style-span'>Home</span></Link>
           <Link className="link-style" to=''><span className='link-style-span'>Categories</span></Link>
           <Link className="link-style" to=''><span className='link-style-span'>Products</span></Link>
           <Link className="link-style" to=''><span className='link-style-span'>Features</span></Link>
           <Link className="link-style" to=''><span className='link-style-span'>Blog</span></Link>
           <Link className="link-style" to=''><span className='link-style-span'>About Us</span></Link>
           <Link className="link-style" to=''><span className='link-style-span'>Contact Us</span></Link>
        </div>
    );
};

export default HomeMenu;
import React, {useState} from 'react';
import {MdMenuOpen} from 'react-icons/md';
import {MdClose} from 'react-icons/md';
import { Link } from 'react-router-dom';
import '../stylesheets/header-footer.css';
export default function Header() {
    const[showHeader,setShowHeader]= useState(false);
    const path = window.location.pathname;
    return(<div className='Header'>
        {showHeader ? ( <MdClose onClick={()=>setShowHeader(!showHeader)} className='menu-icon position-fixed top-0 end-0'/>)
        :( <MdMenuOpen onClick={()=>setShowHeader(!showHeader)} className='menu-icon position-fixed top-0 end-0'/>)}
        <ul className={`${showHeader ? 'show-header' : 'hide-header'} n-box1`}>
            <li className={`${path=='/' && 'active'}`}><Link to="/">Home</Link></li>
            <li className={`${path=='/projects' && 'active'}`}><Link to="/projects">Projects</Link></li>
            <li className={`${path=='/about' && 'active'}`}><Link to="/about">About</Link></li>
            <li className={`${path=='/contact' && 'active'}`}><Link to="/contact">Contact</Link></li>
        </ul>
    
    </div>);
}

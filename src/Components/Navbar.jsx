import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

import './Navbar.css'
import logo from '../pictures/RAZÍTKO.svg';




function Navbar({ goToFooter, goToAbout, goToProject, goToSkills, homeSec, goToHome }) {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)
    return (
        <div>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    <img className='logo' src={logo} alt="logo" ref={homeSec} onClick={goToHome} />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-links' onClick={() => { goToAbout(); closeMobileMenu(); }}>About Me</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/services' className='nav-links' onClick={() => { goToProject(); closeMobileMenu(); }}>Projects <i className='fas fa-caret-down'></i></Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={() => { goToSkills(); closeMobileMenu(); }}>Skills</Link>
                    </li>
                    <li className='nav-item'>
                        <a to='/sign-up' className='nav-links-mobile' onClick={() => { goToFooter(); closeMobileMenu(); }} >Contact Me</a>
                    </li>
                </ul>
                <Button onClick={goToFooter}></Button>
            </nav>
        </div>
    )
}

export default Navbar;

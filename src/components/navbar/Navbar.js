import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaLinkedin, FaPinterest, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import crown from '../../assets/crown.png';



function Navbar() {
    // useState to alternate between different sizing for navbar logo image
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // use useState to handle user click in .mobile-menu and adjust which icon is rendered
    const [showXMark, setShowXMark] = useState(true);

    // state for controlling the visibility of the mobile menu
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    return (
        <div className="nav-container">
            <nav> {/* nav element contains elements for both desktop and mobile - visibility for these is controlled by width  */ }
                <div className="logo">
                    <Link to='/'>
                        <img alt="Curtis King Logo" src={crown} width={windowWidth > 500 ? "60" : "30"} height={windowWidth > 500? "60" : "30"} />
                    </Link>
                </div>
                <ul className="desktop-menu">
                    
                    <li>
                        <Link to='/'>HOME</Link>
                    </li>
                    <li>
                        <Link to='/voice-demo'>DEMOS</Link>
                    </li>
                    <li>
                        <Link to='about-page'>ABOUT</Link>
                    </li>
                    <li>
                        <Link to='/contact-page'>CONTACT ME</Link>
                    </li>
                </ul>

                             {/* mobile screen dropdonw menu -------------------- */}
                <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <FaTimes className="xmark-icon" /> : <FaBars className="bars-icon" />}
                </div>
                <ul className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
                    <li>
                        <Link to='/'>HOME</Link>
                    </li>
                    <li>
                    <Link to='/voice-demo'>DEMOS</Link>
                    </li>
                    <li>
                        <Link to='/about-page'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact-page'>CONTACT ME</Link>
                    </li>
                </ul>
                    {/* ---------------------------------------------------------- */}

            </nav>
            {/* wrapper for contacts section of navbar */}
            <div className="contact-container">
                <div className="social-media">
                    <a href="https://www.linkedin.com/in/curtking83">
                        <FaLinkedin className='linkedin-icon icons' />
                    </a>
                    <a href="https://twitter.com/CDevlife">
                        <FaTwitter className='twitter-icon icons' />
                    </a>
                    <a href="https://www.instagram.com/">
                        <FaInstagram className='insta-icon icons'/>
                    </a>
                    <a href="https://www.pinterest.com/">
                        <FaPinterest className='pinterest-icon icons' />
                    </a>
                </div>

                <div className="email-container">
                    <p className="paragraph-email">
                        <FaEnvelope className="envelope-icon icons" />
                        <a className="email-a" href="mailto:curt_king@coolsite.net" target="_blank" rel="noreferrer">curt_king@coolsite.net</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
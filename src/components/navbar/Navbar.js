import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
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

    
    const handleIconClick = () => {
        setShowXMark(!showXMark);
    }

    return (
        <div className="nav-container">
            <nav>
                {/* <Link to='' >
                        <img className='homeLogoLink' src={'../assets/crown.png'} width="60" height="60" alt="Logo"/>
                </Link> */}

                
                <div className="logo">
                    <img alt="Curtis King Logo" src={crown} width={windowWidth > 500 ? "60" : "30"} height={windowWidth > 500? "60" : "30"} />
                </div>

                <ul className="desktop-menu">
                    
                    {/* <li>
                        <Link to=''>Home</Link>
                    </li>
                    <li>
                        <Link to=''>DEMOS</Link>
                    </li>
                    <li>
                        <Link to=''>ABOUT</Link>
                    </li>
                    <li>
                        <Link to=''>Contact Me</Link>
                    </li> */}
                    
                    {/* !have taken logo div out from here! */}

                    <li>
                        HOME
                    </li>
                    <li>
                        DEMOS
                    </li>
                    <li>
                        ABOUT
                    </li>
                    <li>
                        CONTACT ME
                    </li>
                </ul>
                {/* <ul className="mobile-menu">
                    {showXMark ? (
                    <FaBars className="bars-icon" onClick={handleIconClick} />
                    ) : (
                    <FaTimes className="xmark-icon" onClick={handleIconClick} />
                    )} */}

                    {/* have added in another state variable here */}

                    {/* MArk 2 changes 🙄 */}
                    
                {/* <ul className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
                    {isMobileMenuOpen ? (
                <FaTimes className="xmark-icon" onClick={toggleMobileMenu} />
                ) : (
                    <FaBars className="bars-icon" onClick={toggleMobileMenu} />
                )}
                    <li>HOME</li>
                    <li>DEMOS</li>
                    <li>ABOUT</li>
                    <li>CONTACT ME</li>
                </ul> */}
                             {/* mobile screen dropdonw menu -------------------- */}
            <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? <FaTimes className="xmark-icon" /> : <FaBars className="bars-icon" />}
            </div>
            <ul className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
                <li>HOME</li>
                <li>DEMOS</li>
                <li>ABOUT</li>
                <li>CONTACT ME</li>
            </ul>
                    {/* ---------------------------------------------------------- */}

            </nav>
            <div className="contact-container">
                <div className="social-media">
                    <FaLinkedin className='linkedin-icon icons'  />
                    <FaTwitter className='twitter-icon icons' />
                    <FaInstagram className='insta-icon icons'/>
                    <FaPinterest className='pinterest-icon icons' />
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
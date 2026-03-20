import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { HashLink as Link } from "react-router-hash-link";


function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    }

    return (
        <nav className={scrolled ? "scrolled" : ""}>
            {/* <div className="headerBox"> */}
            {/* <img style ={{width: 50, height: 50}}  src={Logo}></img> */}
            <Link smooth to="#" className="title" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Zeel Patel</Link>
            {/* </div> */}

            <div className="menu" onClick={() => {
                setMenuOpen(!menuOpen);
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <Link smooth to="/#about" scroll={el => scrollWithOffset(el)}>About</Link>
                </li>
                <li>
                    <Link smooth to="/#experience" scroll={el => scrollWithOffset(el)}>Experience</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                {/* <li>
                    <Link to="/leadership">Leadership</Link>
                </li> */}
                {/* <li>
                    <Link smooth spy to="#contact">Contact</Link>
                </li> */}
            </ul>
        </nav>
    );
}

export default Navbar;
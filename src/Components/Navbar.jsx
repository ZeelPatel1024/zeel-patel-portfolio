import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const [activeSection, setActiveSection] = useState("");

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

    useEffect(() => {
        if (location.pathname === "/leadership") {
            setActiveSection("leadership");
            return;
        }

        const handleSectionHighlight = () => {
            const expEl = document.getElementById("experience");
            const projEl = document.getElementById("projects");
            const scrollPosition = window.scrollY + 250; 

            if (projEl && scrollPosition >= projEl.offsetTop) {
                setActiveSection("projects");
            } else if (expEl && scrollPosition >= expEl.offsetTop) {
                setActiveSection("experience");
            } else {
                setActiveSection("about");
            }
        };

        handleSectionHighlight();
        window.addEventListener("scroll", handleSectionHighlight);
        return () => window.removeEventListener("scroll", handleSectionHighlight);
    }, [location]);

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    }

    return (
        <nav className={scrolled ? "scrolled" : ""}>
            <Link 
                smooth 
                to="/#" 
                className="title-container" 
                onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setMenuOpen(false);
                }}
            >
                <svg className="crown-icon" viewBox="0 0 100 100" fill="#caa355" xmlns="http://www.w3.org/2000/svg">
                    {/* Base ring */}
                    <path d="M 12 76 Q 50 80 88 76 L 88 81 Q 50 85 12 81 Z" />
                    <path d="M 15 71 Q 50 75 85 71 L 85 73 Q 50 77 15 73 Z" />
                    
                    {/* Base Jewels */}
                    <circle cx="50" cy="78.5" r="1.5" fill="#01010c" />
                    <circle cx="32" cy="78" r="1.2" fill="#01010c" />
                    <circle cx="68" cy="78" r="1.2" fill="#01010c" />
                    <circle cx="23" cy="78.2" r="1.2" fill="#01010c" />
                    <circle cx="77" cy="78.2" r="1.2" fill="#01010c" />

                    {/* Main Peaks and arches */}
                    <path d="M 16 69 
                             C 12 50 8 38 8 36
                             C 8 34.5 10 34.5 11 36
                             C 16 48 23 53 27 53
                             C 29 53 30 42 32 30
                             C 33 25 35 25 36 30
                             C 38 42 42 50 48 50
                             C 49 50 50 22 50 18
                             C 50 16 50 16 50 18
                             C 50 22 51 50 52 50
                             C 58 50 62 42 64 30
                             C 65 25 67 25 68 30
                             C 70 42 71 53 73 53
                             C 77 53 84 48 89 36
                             C 90 34.5 92 34.5 92 36
                             C 92 38 88 50 84 69
                             Q 50 72 16 69 Z" />

                    {/* Jewels on top of peaks */}
                    <circle cx="9.5" cy="35" r="3.5" />
                    <circle cx="34" cy="28" r="2.8" />
                    <circle cx="50" cy="15.5" r="4" />
                    <circle cx="66" cy="28" r="2.8" />
                    <circle cx="90.5" cy="35" r="3.5" />
                </svg>
                <span className="title-text">Zeel Patel</span>
            </Link>

            <div className={`menu ${menuOpen ? "open" : ""}`} onClick={() => {
                setMenuOpen(!menuOpen);
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <Link 
                        smooth 
                        to="/#about" 
                        scroll={el => scrollWithOffset(el)}
                        className={activeSection === "about" ? "active" : ""}
                        onClick={() => setMenuOpen(false)}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link 
                        smooth 
                        to="/#experience" 
                        scroll={el => scrollWithOffset(el)}
                        className={activeSection === "experience" ? "active" : ""}
                        onClick={() => setMenuOpen(false)}
                    >
                        Experience
                    </Link>
                </li>
                <li>
                    <Link 
                        smooth
                        to="/#projects"
                        scroll={el => scrollWithOffset(el)}
                        className={activeSection === "projects" ? "active" : ""}
                        onClick={() => setMenuOpen(false)}
                    >
                        Projects
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
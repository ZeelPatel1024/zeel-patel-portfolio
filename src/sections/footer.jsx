"use client";

import React from 'react';
import './styles/footer.css';
import Link from "next/link";
import { usePathname } from 'next/navigation';

const myPDF = '/resume/zeel_h_patel_resume__updated_2026.pdf';

const Footer = () => {
  const pathname = usePathname();

  const handleNavClick = (e, targetId) => {
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(targetId);
      if (el) {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer-outer">
      {/* Outer wrapper with border and ornaments */}
      <div className="footer-border-wrapper">
        {/* Top Ornament */}
        <div className="footer-border-top-ornament">
          <svg viewBox="0 0 100 24" className="footer-ornament-svg">
            <path d="M 50 2 L 54 11 L 64 12 L 54 13 L 50 22 L 46 13 L 36 12 L 46 11 Z" fill="#caa355" />
            <circle cx="50" cy="12" r="1.5" fill="#03030b" />
            <line x1="10" y1="12" x2="32" y2="12" stroke="#caa355" strokeWidth="1" opacity="0.6" />
            <line x1="68" y1="12" x2="90" y2="12" stroke="#caa355" strokeWidth="1" opacity="0.6" />
            <polygon points="32,10 35,12 32,14" fill="#caa355" />
            <polygon points="68,10 65,12 68,14" fill="#caa355" />
          </svg>
        </div>

        {/* Faint corner background vector graphics */}
        <div className="footer-bg-graphic left-bg">
          <svg viewBox="0 0 120 180" className="footer-corner-svg">
            <path d="M 10 180 L 10 90 L 16 90 L 16 95 L 22 95 L 22 90 L 28 90 L 28 95 L 34 95 L 34 90 L 40 90 L 40 180 Z" fill="none" stroke="rgba(202, 163, 85, 0.04)" strokeWidth="1" />
            <path d="M 8 90 L 25 50 L 42 90 Z" fill="none" stroke="rgba(202, 163, 85, 0.04)" strokeWidth="1" />
            <path d="M 25 50 L 25 30" fill="none" stroke="rgba(202, 163, 85, 0.04)" strokeWidth="1" />
            <path d="M 45 180 L 45 120 L 58 120 L 58 180 Z" fill="none" stroke="rgba(202, 163, 85, 0.03)" strokeWidth="1" />
            <path d="M 43 120 L 51.5 100 L 60 120 Z" fill="none" stroke="rgba(202, 163, 85, 0.03)" strokeWidth="1" />
            <path d="M 5 160 Q 30 140 50 165" fill="none" stroke="rgba(202, 163, 85, 0.03)" strokeWidth="1" />
            <path d="M 15 130 Q 35 110 55 135" fill="none" stroke="rgba(202, 163, 85, 0.02)" strokeWidth="1" />
          </svg>
        </div>

        <div className="footer-bg-graphic right-bg">
          <svg viewBox="0 0 120 180" className="footer-corner-svg">
            <path d="M 80 180 L 80 90 L 86 90 L 86 95 L 92 95 L 92 90 L 98 90 L 98 95 L 104 95 L 104 90 L 110 90 L 110 180 Z" fill="none" stroke="rgba(202, 163, 85, 0.04)" strokeWidth="1" />
            <path d="M 78 90 L 95 50 L 112 90 Z" fill="none" stroke="rgba(202, 163, 85, 0.04)" strokeWidth="1" />
            <path d="M 95 50 L 95 30" fill="none" stroke="rgba(202, 163, 85, 0.04)" strokeWidth="1" />
            <path d="M 62 180 L 62 120 L 75 120 L 75 180 Z" fill="none" stroke="rgba(202, 163, 85, 0.03)" strokeWidth="1" />
            <path d="M 60 120 L 68.5 100 L 77 120 Z" fill="none" stroke="rgba(202, 163, 85, 0.03)" strokeWidth="1" />
            <path d="M 115 160 Q 90 140 70 165" fill="none" stroke="rgba(202, 163, 85, 0.03)" strokeWidth="1" />
            <path d="M 105 130 Q 85 110 65 135" fill="none" stroke="rgba(202, 163, 85, 0.02)" strokeWidth="1" />
          </svg>
        </div>

        <div className="footer-container">
          {/* COLUMN 1: Branding & Connect */}
          <div className="footer-section footer-col-left">
            <div className="footer-logo-wrapper">
              <svg viewBox="0 0 100 100" className="footer-logo-svg">
                <path d="M 36 24 L 40 34 L 50 26 L 60 34 L 64 24 L 59 38 L 41 38 Z" fill="#caa355" />
                <circle cx="36" cy="23" r="1.2" fill="#caa355" />
                <circle cx="50" cy="25" r="1.5" fill="#caa355" />
                <circle cx="64" cy="23" r="1.2" fill="#caa355" />
                
                <path d="M 28 65 C 24 55 26 42 34 35" fill="none" stroke="#caa355" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M 72 65 C 76 55 74 42 66 35" fill="none" stroke="#caa355" strokeWidth="1.5" strokeLinecap="round" />
                
                <path d="M 27 60 C 23 58 24 53 27 55 Z M 29 50 C 25 49 27 44 30 46 Z M 32 41 C 29 39 31 34 34 37 Z" fill="#caa355" />
                <path d="M 73 60 C 77 58 76 53 73 55 Z M 71 50 C 75 49 73 44 70 46 Z M 68 41 C 71 39 69 34 66 37 Z" fill="#caa355" />
                
                <path d="M 38 40 L 62 40 L 62 58 C 62 68 50 75 50 75 C 50 75 38 68 38 58 Z" fill="none" stroke="#caa355" strokeWidth="2" strokeLinejoin="round" />
                <text x="50" y="59" fontFamily="'Cormorant Garamond', serif" fontSize="21" fontWeight="bold" fill="#caa355" textAnchor="middle">Z</text>
              </svg>
            </div>
            
            <h2 className="footer-title">ZEEL PATEL</h2>
            <div className="footer-title-divider">
              <span className="footer-divider-line"></span>
              <span className="footer-divider-diamond">♦</span>
              <span className="footer-divider-line"></span>
            </div>
            
            <p className="footer-description-text">
              Computer Scientist passionate about building intelligent, impactful solutions and turning ideas into reality.
            </p>
            
            <a href="mailto:zeelpatel2423@gmail.com" className="footer-connect-btn">
              LET'S CONNECT <span className="connect-arrow">→</span>
            </a>
          </div>

          {/* COLUMN DIVIDER */}
          <div className="footer-col-divider">
            <div className="divider-line-top"></div>
            <div className="divider-diamond">♦</div>
            <div className="divider-line-bottom"></div>
          </div>

          {/* COLUMN 2: Links */}
          <div className="footer-section footer-col-middle">
            <h3 className="section-title">LINKS</h3>
            <div className="footer-title-divider">
              <span className="footer-divider-line"></span>
              <span className="footer-divider-diamond">♦</span>
              <span className="footer-divider-line"></span>
            </div>

            <ul className="footer-links-list">
              <li>
                <Link href="/#about" onClick={(e) => handleNavClick(e, 'about')} className="footer-link-item">
                  <span className="link-icon-circle">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer-link-icon-svg">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </span>
                  About
                </Link>
              </li>
              <li>
                <Link href="/#experience" onClick={(e) => handleNavClick(e, 'experience')} className="footer-link-item">
                  <span className="link-icon-circle">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer-link-icon-svg">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  </span>
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/#projects" onClick={(e) => handleNavClick(e, 'projects')} className="footer-link-item">
                  <span className="link-icon-circle">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer-link-icon-svg">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                    </svg>
                  </span>
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN DIVIDER */}
          <div className="footer-col-divider">
            <div className="divider-line-top"></div>
            <div className="divider-diamond">♦</div>
            <div className="divider-line-bottom"></div>
          </div>

          {/* COLUMN 3: Follow Me & Quote */}
          <div className="footer-section footer-col-right">
            <h3 className="section-title">FOLLOW ME</h3>
            <div className="footer-title-divider">
              <span className="footer-divider-line"></span>
              <span className="footer-divider-diamond">♦</span>
              <span className="footer-divider-line"></span>
            </div>

            <div className="footer-social-icons-row">
              <div className="social-icon-box">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=zeelpatel2423@gmail.com" target="_blank" rel="noreferrer" className="social-icon-circle-link">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer-social-icon-svg">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </a>
                <span className="social-icon-label">Email</span>
              </div>

              <div className="social-icon-box">
                <a href="https://github.com/ZeelPatel1024" target="_blank" rel="noreferrer" className="social-icon-circle-link">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="footer-social-icon-svg rocket-svg">
                    <path d="M4.5 16.5c-1.5 1.25-2.5 3-2.5 5 2 0 3.75-1 5-2.5" />
                    <path d="M12 2C17.5 2 22 6.5 22 12c0 1.25-.75 2.5-1.75 3.25l-2.5-2.5c.5-.5.75-1.25.75-2 0-3-2.5-5.5-5.5-5.5-.75 0-1.5.25-2 .75l-2.5-2.5C9.5 2.75 10.75 2 12 2z" />
                    <path d="M9 15l-3.5 3.5" />
                    <path d="M15 9l3.5-3.5" />
                    <path d="M13.5 16.5c-2.5 1-4 0-5.5-1.5s-2.5-3-1.5-5.5l9 9z" />
                  </svg>
                </a>
                <span className="social-icon-label">GitHub</span>
              </div>

              <div className="social-icon-box">
                <a href="https://www.linkedin.com/in/zeel-patel2212/" target="_blank" rel="noreferrer" className="social-icon-circle-link">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer-social-icon-svg">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                </a>
                <span className="social-icon-label">LinkedIn</span>
              </div>
            </div>
            <a href={myPDF} target="_blank" rel="noreferrer" className="footer-connect-btn">
              My Resume
            </a>
          </div>
        </div>

        {/* Bottom Ornament */}
        <div className="footer-border-bottom-ornament">
          <svg viewBox="0 0 100 24" className="footer-ornament-svg">
            <path d="M 38 18 L 42 10 L 50 14 L 58 10 L 62 18 Z" fill="#caa355" />
            <circle cx="42" cy="9" r="1" fill="#caa355" />
            <circle cx="50" cy="13" r="1.2" fill="#caa355" />
            <circle cx="58" cy="9" r="1" fill="#caa355" />
            <line x1="5" y1="16" x2="30" y2="16" stroke="#caa355" strokeWidth="1" opacity="0.6" />
            <line x1="70" y1="16" x2="95" y2="16" stroke="#caa355" strokeWidth="1" opacity="0.6" />
            <circle cx="5" cy="16" r="1.5" fill="#caa355" />
            <circle cx="95" cy="16" r="1.5" fill="#caa355" />
          </svg>
        </div>
      </div>

      <div className="footer-outer-bottom">
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Zeel Patel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import './Styles/Footer.css';
import { HashLink as Link} from "react-router-hash-link";
import myPDF from '../resume/Zeel_Resume_Updated_2025.pdf'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Zeel Patel</h3>
          <p>Contact me with any questions!</p>
        </div>
        <div className="footer-section">
          <h3>Links</h3>
          <ul>
          <li>
                    <Link smooth spy to="#about" >About</Link>
                </li>
                <li>
                    <Link smooth spy to="#experience">Experience</Link>
                </li>
                <li>
                    <Link smooth spy to="#projects">Projects</Link>
                </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Me!</h3>
          <div className="social-icons">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=zeelpatel2423@gmail.com" target="_blank" rel="noreferrer">✉️</a>
            <a href="https://github.com/ZeelPatel1024" target="_blank" rel="noreferrer">🚀</a>
            <a href={myPDF} target="_blank" rel="noreferrer">🔗</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Zeel Patel. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

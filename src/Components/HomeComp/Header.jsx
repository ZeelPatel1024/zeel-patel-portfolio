import React from 'react'
import '../HomeComp/Header.css'
import githublogo from '../../Images/githublogo.png'
import emaillogo from '../../Images/gmaillogo.png'
import documentlogo from '../../Images/documentlogo.png'
import linkdinlogo from '../../Images/linkdinlogo.png'
import Typewriter from 'typewriter-effect';
import myPDF from "../../resume/Zeel_H_Patel_Resume__Updated_2026.pdf";


function Header() {
  return (
    <div className='NameComponent'>

      <div className='nameBox'>
        <p className="tagline">&lt;CODE. CREATE. IMPACT /&gt;</p>
        <h1 id="Name">Zeel Patel</h1>
        
        <div className="subtitle-container">
          <div className="subtitle-line left"></div>
          <p id="description">
            &lt;/&nbsp;
            <Typewriter
              options={{
                strings: ['DEVELOPER', 'GOOGLER', 'ENGINEER', 'SWE'],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
            &nbsp;&gt;
          </p>
          <div className="subtitle-line right"></div>
        </div>

        <div className='logos'>
          <a href="https://github.com/ZeelPatel1024" target="_blank" rel="noopener noreferrer">
            <img id="githublogo" src={githublogo} alt="GitHub Logo" ></img>
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=zeelpatel2423@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img id="emaillogo" src={emaillogo} alt="Email Logo"></img>
          </a>
          
          <a href={myPDF} target="_blank" rel="noopener noreferrer">
            <img id="githublogo" src={documentlogo} alt="Document Logo"></img>
          </a>

          <a href="https://www.linkedin.com/in/zeel-patel2212/" target="_blank" rel="noopener noreferrer">
            <img id="githublogo" src={linkdinlogo} alt="LinkedIn Logo"></img>
          </a>
        </div>
        <br></br>
      </div>

    </div>
  )
}

export default Header
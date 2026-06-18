"use client";

import React from 'react'
import './header.css'
import githublogo from '../../images/githublogo.png'
import emaillogo from '../../images/gmaillogo.png'
import documentlogo from '../../images/documentlogo.png'
import linkdinlogo from '../../images/linkdinlogo.png'
import Typewriter from 'typewriter-effect';

const myPDF = "/resume/zeel_h_patel_resume__updated_2026.pdf";


function Header() {
  return (
    <div className='NameComponent'>

      <div className='nameBox'>
        <p className="tagline">&lt;CODE. CREATE. IMPACT /&gt;</p>
        <h1 id="Name">Zeel Patel</h1>
        
        <div className="subtitle-container">
          <div className="subtitle-line left"></div>
          <div id="description">
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
          </div>
          <div className="subtitle-line right"></div>
        </div>

        <div className='logos'>
          <a href="https://github.com/ZeelPatel1024" target="_blank" rel="noopener noreferrer">
            <img id="githublogo" src={githublogo.src} alt="GitHub Logo" ></img>
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=zeelpatel2423@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img id="emaillogo" src={emaillogo.src} alt="Email Logo"></img>
          </a>
          
          <a href={myPDF} target="_blank" rel="noopener noreferrer">
            <img id="githublogo" src={documentlogo.src} alt="Document Logo"></img>
          </a>

          <a href="https://www.linkedin.com/in/zeel-patel2212/" target="_blank" rel="noopener noreferrer">
            <img id="githublogo" src={linkdinlogo.src} alt="LinkedIn Logo"></img>
          </a>
        </div>
        <br></br>
      </div>

    </div>
  )
}

export default Header
import React from 'react'
import '../HomeComp/Header.css'
import githublogo from '../../Images/githublogo.png'
import emaillogo from '../../Images/gmaillogo.png'
import documentlogo from '../../Images/documentlogo.png'
import linkdinlogo from '../../Images/linkdinlogo.png'
import Typewriter from 'typewriter-effect';
import myPDF from "../../resume/Zeel_Resume_Updated_2025.pdf";


function Header() {
  return (
    <div className='NameComponent'>

      <div className='nameBox'>
        <h1 id="Name">Zeel Patel</h1>
        {/* <p>Passionate Software Engineer Student</p> */}
        <p id="description">
          &#60;/ <Typewriter
            options={{
              strings: ['Developer', 'Googler', 'Engineer', "SWE"],
              autoStart: true,
              loop: true,
            }}

          /> &#62;</p>
        {/* <div className='logos'>
          <a href="https://github.com/ZeelPatel1024" target="_blank" rel="noopener noreferrer">
            <img id="githublogo" src={githublogo} ></img>
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=zeelpatel2423@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img id="emaillogo" src={emaillogo}></img>
          </a>
          <a href={myPDF} target="_blank" rel="noopener noreferrer">
            <img id="githublogo" src={documentlogo}></img>
          </a>

          <a href="https://www.linkedin.com/in/zeel-patel2212/" target="_blank" rel="noopener noreferrer">
            <img id="githublogo" src={linkdinlogo}></img>
          </a>


        </div> */}
        <br></br>
      </div>

    </div>
  )
}

export default Header
import React from 'react'
import '../HomeComp/Header.css'
import githublogo from '../../Images/githublogo.png'
import emaillogo from '../../Images/gmaillogo.png'
import documentlogo from '../../Images/documentlogo.png'
import linkdinlogo from '../../Images/linkdinlogo.png'
import Typewriter from 'typewriter-effect';


function Header() {
  return (
    <div className='NameComponent'>
    
    <div className='nameBox'>
        <h1 id = "Name">Zeel Patel</h1>
        <p id= "description"> 
        &#60; <Typewriter
          options={{
            strings: ['Developer', 'Googler', 'Engineer', "SWE"],
            autoStart: true,
            loop: true,
          }}
        /> &#62;</p>
        <div className='logos'>
          <img id = "githublogo" src={githublogo}></img>
          <img id = "githublogo" src={emaillogo}></img>
          <img id = "githublogo" src={documentlogo}></img>
          <img id = "githublogo" src={linkdinlogo}></img>
        </div>
        <br></br>
    </div>
    
    </div>
  )
}

export default Header
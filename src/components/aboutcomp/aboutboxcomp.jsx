import React from 'react'
import './aboutboxcomp.css'
import Courses from './courses'
import LineAndBorder from './lineandborder'

function AboutBoxComp(props) {
  return (
    <div className='compAbout'>
      <div className='aboutBox'>
        {/* Vector UIC Seal/Crest Watermark */}
        <svg className="about-box-watermark" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="85" fill="none" stroke="#caa355" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
          <circle cx="100" cy="100" r="80" fill="none" stroke="#caa355" strokeWidth="1.5" opacity="0.5" />
          <circle cx="100" cy="100" r="62" fill="none" stroke="#caa355" strokeWidth="1" opacity="0.3" />
          
          <path id="textPathTop" d="M 35,100 A 65,65 0 0,1 165,100" fill="none" />
          <text fontSize="8.5" fontFamily="'Cormorant Garamond', serif" fontWeight="bold" fill="#caa355" letterSpacing="0.8" opacity="0.5">
            <textPath href="#textPathTop" startOffset="50%" textAnchor="middle">
              UNIVERSITY OF ILLINOIS
            </textPath>
          </text>
          
          <path id="textPathBottom" d="M 165,100 A 65,65 0 0,1 35,100" fill="none" />
          <text fontSize="8.5" fontFamily="'Cormorant Garamond', serif" fontWeight="bold" fill="#caa355" letterSpacing="0.8" opacity="0.5">
            <textPath href="#textPathBottom" startOffset="50%" textAnchor="middle">
              CHICAGO
            </textPath>
          </text>

          <text x="100" y="112" fontSize="34" fontFamily="'Cormorant Garamond', serif" fontWeight="700" fill="#caa355" textAnchor="middle" letterSpacing="1" opacity="0.75">UIC</text>
          
          <g stroke="#caa355" strokeWidth="1.2" fill="none" opacity="0.4">
            {/* Left wreath */}
            <path d="M 45,100 C 42,120 52,138 72,148" />
            <path d="M 45,105 L 40,103" /><path d="M 44,115 L 38,111" /><path d="M 47,125 L 41,120" /><path d="M 53,135 L 47,129" /><path d="M 62,142 L 56,136" />
            
            {/* Right wreath */}
            <path d="M 155,100 C 158,120 148,138 128,148" />
            <path d="M 155,105 L 160,103" /><path d="M 156,115 L 162,111" /><path d="M 153,125 L 159,120" /><path d="M 147,135 L 153,129" /><path d="M 138,142 L 144,136" />
          </g>
        </svg>

        {/* Card stacked picture of UIC */}
        <img id="compPic" src={props.picture?.src || props.picture} alt="UIC Card Stack" />
        
        {/* Card text content */}
        <div className="about-box-content">
          <div className="about-box-title-container">
            <h1 className="about-box-title">{props.title}</h1>
            <div className="about-box-divider">
              <span className="divider-line"></span>
              <span className="divider-diamond">♦</span>
              <span className="divider-line"></span>
            </div>
          </div>
          
          <p id='experiencedescription'>{props.compdescription}</p>
          
          <div className="about-box-courses-section">
            <p className="courses-label">Relevant Courses:</p>
            <div className="courses-tags-container">
              <Courses courseName="Data Structures" />
              <Courses courseName="Algorithms" />
               <Courses courseName="Principles of Concurrency" />
              <Courses courseName="Program Design 2" />
              <Courses courseName="Discrete Math" />
              <Courses courseName="Programming Practicum" />
            </div>
          </div>
        </div>
      </div>
      
      <LineAndBorder
        text="h1"
        textColor='Violet'
        borderColor='#74317d'
      />
    </div>
  )
}

export default AboutBoxComp
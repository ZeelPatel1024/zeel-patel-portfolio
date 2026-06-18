import './skillscomp.css'
import React from 'react'


function SkillsComp(props) {
  return (
    <div className='skillsBox'>
      <div className="skill-corner tl">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 22V2H22" stroke="#caa355" strokeWidth="1.2" strokeLinecap="round" opacity="0.8"/>
          <path d="M5 19V5H19" stroke="#caa355" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.5"/>
          <path d="M2.5 2.5C4 2.5 5.5 3.5 5.5 5C5.5 6.5 4.5 7.5 3 7.5" stroke="#caa355" strokeWidth="1" fill="none" opacity="0.85"/>
          <path d="M2.5 2.5C2.5 4 3.5 5.5 5 5.5C6.5 5.5 7.5 4.5 7.5 3" stroke="#caa355" strokeWidth="1" fill="none" opacity="0.85"/>
          <path d="M3 3L8 8" stroke="#caa355" strokeWidth="0.8" opacity="0.85"/>
          <circle cx="8" cy="8" r="1" fill="#caa355" opacity="0.9"/>
        </svg>
      </div>
      <div className="skill-corner tr">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 22V2H22" stroke="#caa355" strokeWidth="1.2" strokeLinecap="round" opacity="0.8"/>
          <path d="M5 19V5H19" stroke="#caa355" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.5"/>
          <path d="M2.5 2.5C4 2.5 5.5 3.5 5.5 5C5.5 6.5 4.5 7.5 3 7.5" stroke="#caa355" strokeWidth="1" fill="none" opacity="0.85"/>
          <path d="M2.5 2.5C2.5 4 3.5 5.5 5 5.5C6.5 5.5 7.5 4.5 7.5 3" stroke="#caa355" strokeWidth="1" fill="none" opacity="0.85"/>
          <path d="M3 3L8 8" stroke="#caa355" strokeWidth="0.8" opacity="0.85"/>
          <circle cx="8" cy="8" r="1" fill="#caa355" opacity="0.9"/>
        </svg>
      </div>
      <div className="skill-corner bl">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 22V2H22" stroke="#caa355" strokeWidth="1.2" strokeLinecap="round" opacity="0.8"/>
          <path d="M5 19V5H19" stroke="#caa355" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.5"/>
          <path d="M2.5 2.5C4 2.5 5.5 3.5 5.5 5C5.5 6.5 4.5 7.5 3 7.5" stroke="#caa355" strokeWidth="1" fill="none" opacity="0.85"/>
          <path d="M2.5 2.5C2.5 4 3.5 5.5 5 5.5C6.5 5.5 7.5 4.5 7.5 3" stroke="#caa355" strokeWidth="1" fill="none" opacity="0.85"/>
          <path d="M3 3L8 8" stroke="#caa355" strokeWidth="0.8" opacity="0.85"/>
          <circle cx="8" cy="8" r="1" fill="#caa355" opacity="0.9"/>
        </svg>
      </div>
      <div className="skill-corner br">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 22V2H22" stroke="#caa355" strokeWidth="1.2" strokeLinecap="round" opacity="0.8"/>
          <path d="M5 19V5H19" stroke="#caa355" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.5"/>
          <path d="M2.5 2.5C4 2.5 5.5 3.5 5.5 5C5.5 6.5 4.5 7.5 3 7.5" stroke="#caa355" strokeWidth="1" fill="none" opacity="0.85"/>
          <path d="M2.5 2.5C2.5 4 3.5 5.5 5 5.5C6.5 5.5 7.5 4.5 7.5 3" stroke="#caa355" strokeWidth="1" fill="none" opacity="0.85"/>
          <path d="M3 3L8 8" stroke="#caa355" strokeWidth="0.8" opacity="0.85"/>
          <circle cx="8" cy="8" r="1" fill="#caa355" opacity="0.9"/>
        </svg>
      </div>

      <h3 id="languageName">{props.LangName}</h3>
      <img id="skillsLogo" src={props.LogoPicture?.src || props.LogoPicture} alt={props.LangName}></img>
    </div>
  )
}

export default SkillsComp
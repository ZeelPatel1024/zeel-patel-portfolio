import './SkillsComp.css'
import React from 'react'


function SkillsComp(props) {
  return (
        <div className='skillsBox'>
            <h3 id = "languageName">{props.LangName}</h3>
            <img id = "skillsLogo" src={props.LogoPicture}></img>

            <div className='skills_description'>
                <p id= "desDetail">Experience: {props.yoe} yrs</p>
                <p id= "desDetail"># of Projects: {props.projects}</p>
                <p id= "desDetail">Confidence: {props.level}</p> 
            </div>
            
            
        </div>
  )
}

export default SkillsComp
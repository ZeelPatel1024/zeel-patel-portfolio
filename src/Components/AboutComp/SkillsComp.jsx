import './SkillsComp.css'
import React from 'react'


function SkillsComp(props) {
  return (
    <div className='skillsBox'>
      <h3 id="languageName">{props.LangName}</h3>
      <img id="skillsLogo" src={props.LogoPicture}></img>




    </div>
  )
}

export default SkillsComp
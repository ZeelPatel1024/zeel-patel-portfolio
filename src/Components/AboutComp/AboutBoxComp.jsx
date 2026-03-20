import React from 'react'
import './AboutBoxComp.css'
import Courses from './Courses'
import LineAndBorder from './LineAndBorder'

function AboutBoxComp(props) {
  return (
    <div className='compAbout'>

      <div className='aboutBox'>
        <img id="compPic" src={props.picture} alt=""></img>
        <div>
          <h1> {props.title} </h1>
          <p id='experiencedescription'>{props.compdescription}</p>
          <div className='courseslist'>
            <p>Relevent Courses:</p>
            <Courses courseName="Program Design 2" />
            <Courses courseName="Discrete Math" />
            <Courses courseName="Programming Practicum" />
            <Courses courseName="Data Structures" />
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
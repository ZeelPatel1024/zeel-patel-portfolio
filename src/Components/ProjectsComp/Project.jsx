import React from 'react'
import './Project.css'

import Courses from './Lang'

const Project = ({ image, languagesList, name, shortDescription, date, link }) => {

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" style={{
      color: "inherit",
      textDecoration: "none",
      cursor: "pointer"
    }}>

      <div className='project'>
        <img id="projectimg" src={image} alt=""></img>
        <div className='description'>
          <h1 id="name">{name}</h1>
          <p id="shortdes">{shortDescription}</p>
          <p id="date">{date}</p>
        </div>

        <div id='descriptions'>
          {languagesList.map((item, index) => (
            <Courses key={index} courseName={item} />
          ))}
        </div>

      </div>

    </a>

  )
}

export default Project
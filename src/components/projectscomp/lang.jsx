import React from 'react'
import './lang.css'

function Courses(props) {
  return (
    <div className='LangBox'>
        <p>{props.courseName}</p>
    </div>
  )
}

export default Courses
import React from 'react'
import './courses.css'

function Courses(props) {
  return (
    <div className='CourseBox'>
        <p>{props.courseName}</p>
    </div>
  )
}

export default Courses
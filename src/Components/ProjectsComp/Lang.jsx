import React from 'react'
import './Lang.css'

function Courses(props) {
  return (
    <div className='LangBox'>
        <p>{props.courseName}</p>
    </div>
  )
}

export default Courses
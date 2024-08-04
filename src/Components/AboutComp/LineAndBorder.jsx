import React from 'react'
import './LineAndBorder.css'

function LineAndBorder(props) {
  return (
    <div className='deco' style={{color: props.textColor}}>
        <p>&#60;{props.text}&#62;</p>
        <div className="vl" style={{borderColor: props.borderColor}}></div>
        <p>&#60;{props.text}&#62;</p>
        </div>
  )
}

export default LineAndBorder
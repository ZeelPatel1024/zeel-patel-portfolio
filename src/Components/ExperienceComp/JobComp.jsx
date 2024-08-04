import React from 'react'
import './Style/JobComp.css'

function JobComp(props) {
  return (
    <div className='JobCompBackground'>
        <div className='jobHeaders'>
            <img id='joblogo' src={props.logo}></img>
            
            <div>
                <h1>{props.jobTitle}</h1> 
                <p>{props.jobName}</p>
                <p>{props.date}</p>
            </div>
               
        </div>
            <li>{props.point1}</li>
            <li>{props.point2}</li>
            <li>{props.point3}</li>
    </div>
  )
}

export default JobComp
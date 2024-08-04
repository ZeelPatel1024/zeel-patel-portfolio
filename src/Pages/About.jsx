import React from 'react'
import './Styles/About.css'
import ScrollAnimation from 'react-animate-on-scroll'
import AboutBoxComp from '../Components/AboutComp/AboutBoxComp'
import AboutBoxImgRight from '../Components/AboutComp/AboutBoxImgRight'
import UICImg from '../Images/uic.jpeg'
import CartoonMe from '../Images/IMG_0065-removebg-preview.png'
import LineAndBorder from '../Components/AboutComp/LineAndBorder'
import { motion, useScroll , useAnimation} from "framer-motion"
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import Courses from '../Components/AboutComp/Courses'

export const About = () => {
  return (
    <div id="about" >

      <motion.div className='WhoAmI'
        whileInView={{ x: 0, // Start at the final position (0)
        opacity: 1,  transition: { duration: 3 }}} initial={{x: '-10vw', opacity: 0}}
        >
        <LineAndBorder
        text = "h1"
        textColor = 'DodgerBlue'
        borderColor = '#32337d'
        /> 
            <div className='whoAmIComponent'>
              <div className='WhoAmIDescription'>
                <h1>About Me</h1>
                <p id = "me">Hi my name is Zeel Patel! I am a rising sophmore and aspire to puruse a career in Computer Science! My dream started when my older brother introduced me to robotics coding in my 6th grade and I have been hooked in coding ever since. I love arts and crafts, painting, drawing, singing, dancing and editing videos! I have always been creative, so I channel this in my work. I always try to broden my knowledge so I can innovate and always pursue my dreams and passions.</p>
                  <div className='courseslist'>
                      <p>Hobbies:</p>
                      <Courses courseName = "Cooking"/>
                      <Courses courseName = "Dancing"/>
                      <Courses courseName = "Arts & Crafts"/>
                      <Courses courseName = "Traveling"/>
                  </div>
              </div>
              <img id = "cartoonMe" src={CartoonMe}></img>
            </div>
      </motion.div>

      <motion.div
        whileInView={{ x: 0, // Start at the final position (0)
        opacity: 1,  transition: { duration: 3 }}} initial={{x: '10vw', opacity: 0}}>
          <AboutBoxComp 
            title = "Education"
            picture = {UICImg}
            compdescription = "I completed my highschool diploma at James B Conant highschool where I took Computer Science classes and AP Classes. Furthermore, I am pursuing a bachelors Engineering degree in Computer Science at the University of Ilinois at Chicago."
            moreinfo = "UIC GPA: 4.0 &#124; AP CSP: 5 &#124; AP CSA: 4 &#124; AP Calc B: 4 &#124; AP Phys C: 4"
          />
      </motion.div>

      <motion.div
        whileInView={{ x: 0, // Start at the final position (0)
        opacity: 1,  transition: { duration: 3 }}} initial={{x: '-10vw', opacity: 0}}
        >
          <AboutBoxImgRight></AboutBoxImgRight>
        </motion.div>
        <br></br>
    </div>
    
  )
}

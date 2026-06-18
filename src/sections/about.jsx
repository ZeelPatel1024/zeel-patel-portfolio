"use client";

import React from 'react'
import './styles/about.css'

import AboutBoxComp from '../components/aboutcomp/aboutboxcomp'
import AboutBoxImgRight from '../components/aboutcomp/aboutboximgright'
import uicCardPic from '../images/uiccardpic.png'
import meCardPic from '../images/mecardpic.png'
import logo from '../images/logo.png'

import LineAndBorder from '../components/aboutcomp/lineandborder'
import { motion } from "framer-motion"
import Courses from '../components/aboutcomp/courses'

export const About = () => {
  return (
    <div id="about" >

      <motion.div className='WhoAmI'
        whileInView={{
          x: 0, // Start at the final position (0)
          opacity: 1, transition: { duration: 3 }
        }} initial={{ x: '-10vw', opacity: 0 }}
      >
        <LineAndBorder
          text="h1"
          textColor='DodgerBlue'
          borderColor='#32337d'
        />
        <div className='whoAmIComponent'>
          {/* Monogram Watermark */}
          <img className="about-box-watermark monogram-watermark" src={logo.src} alt="Monogram Watermark" />

          <div className='WhoAmIDescription'>
            <div className="about-box-title-container">
              <h1 className="about-box-title">About Me</h1>
              <div className="about-box-divider">
                <span className="divider-line"></span>
                <span className="divider-diamond">♦</span>
                <span className="divider-line"></span>
              </div>
            </div>
            
            <p id="me">
              Hi my name is <span className="highlight-gold">Zeel Patel</span>! I am a senior and aspire to pursue a career in <span className="highlight-gold">Computer Science</span>! My dream started when my older brother introduced me to <span className="highlight-gold">robotics coding</span> in my 6th grade and I have been hooked in coding ever since. I love arts and crafts, painting, drawing, singing, dancing and editing videos! I have always been creative, so I channel this in my work. I always try to broaden my knowledge so I can innovate and always pursue my dreams and passions.
            </p>
            
            <div className="about-box-courses-section">
              <p className="courses-label">Hobbies:</p>
              <div className="courses-tags-container">
                <Courses courseName="Cooking" />
                <Courses courseName="Dancing" />
                <Courses courseName="Arts & Crafts" />
                <Courses courseName="Traveling" />
              </div>
            </div>
          </div>
          <img className="about-profile-card" src={meCardPic.src} alt="Zeel Patel" />
        </div>
      </motion.div>

      <div className='education'>

        <motion.div
          whileInView={{
            x: 0, // Start at the final position (0)
            opacity: 1, transition: { duration: 3 }
          }} initial={{ x: '10vw', opacity: 0 }}>
          <AboutBoxComp
            title="Education"
            picture={uicCardPic.src}
            compdescription={
              <>
                I completed my <span className="highlight-gold">high school</span> diploma at James B Conant High School where I took Computer Science and AP Classes. Furthermore, I am pursuing a <span className="highlight-gold">Bachelor's in Engineering Science in Computer Science</span> at the University of Illinois at Chicago.
              </>
            }
            moreinfo="UIC GPA: 4.0 &#124; AP CSP: 5 &#124; AP CSA: 4 &#124; AP Calc B: 4 &#124; AP Phys C: 4"
          />
        </motion.div>

      </div>



      <div className='skills'>
        <div className="about-box-title-container centered-title">
          <h1 className="about-box-title">Skills</h1>
          <div className="about-box-divider">
            <span className="divider-line"></span>
            <span className="divider-diamond">♦</span>
            <span className="divider-line"></span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 2 } }}
        >
          <AboutBoxImgRight></AboutBoxImgRight>
        </motion.div>
        <br></br>

      </div>


    </div>

  )
}

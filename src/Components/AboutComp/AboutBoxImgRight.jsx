import React from 'react'
import './AboutBoxImgRight.css'
import SkillsComp from './SkillsComp'

import ReactLogo from '../../Images/skillsLogo/React.webp'
import CLogo from '../../Images/skillsLogo/clogo.png'
import CppLogo from '../../Images/skillsLogo/cpplogo.png'
import FirebaseLogo from '../../Images/skillsLogo/firebaselogo.png'
import JavaLogo from '../../Images/skillsLogo/javalogo.png'
import JsLogo from '../../Images/skillsLogo/jslogo.png'
import MongodbLogo from '../../Images/skillsLogo/mongodblogo.png'
import NextLogo from '../../Images/skillsLogo/nextlogo(2).png'
import PythonLogo from '../../Images/skillsLogo/pythonlogo.png'
import ReactNativeLogo from '../../Images/skillsLogo/reactnativelogo.png'
import SpringLogo from '../../Images/skillsLogo/springbootlogo.png'
import SqlLogo from '../../Images/skillsLogo/sqllogo.png'
import Astro from '../../Images/skillsLogo/astro.webp'

function AboutBoxImgRight() {
  return (
    <div className='aboutBoxImgRight'>
        {/* <h1 id='skills'>Skills</h1> */}

        <div className='aboutBoxRight'>

        
            <SkillsComp
                LogoPicture = {CppLogo}
                LangName = "C++/C"
                yoe = "2"
                projects = "5"
                level = "Proficent"
            />
            <SkillsComp
                LogoPicture = {ReactLogo}
                LangName = "React/React Native"
                yoe = "2"
                projects = "5"
                level = "Proficent"
            />
            <SkillsComp
                LogoPicture = {SqlLogo}
                LangName = "MySQL"
                yoe = "2"
                projects = "5"
                level = "Proficent"
            />
            <SkillsComp
                LogoPicture = {JavaLogo}
                LangName = "Java"
                yoe = "4"
                projects = "5"
                level = "Proficent"
            />
            <SkillsComp
                LogoPicture = {JsLogo}
                LangName = "Javascript"
                yoe = "3"
                projects = "5"
                level = "Proficent"
            />
            <SkillsComp
                LogoPicture = {FirebaseLogo}
                LangName = "Firebase"
                yoe = "3"
                projects = "5"
                level = "Proficent"
            />
            <SkillsComp
                LogoPicture = {MongodbLogo}
                LangName = "MongoDb"
                yoe = "3"
                projects = "5"
                level = "Proficent"
            />
            <SkillsComp
                LogoPicture = {NextLogo}
                LangName = "Next.js"
                yoe = "1"
                projects = "5"
                level = "Proficent"
            />
            <SkillsComp
                LogoPicture = {PythonLogo}
                LangName = "Python"
                yoe = "2"
                projects = "5"
                level = "Proficent"
            />
            <SkillsComp
                LogoPicture = {SpringLogo}
                LangName = "Spring Boot"
                yoe = "1"
                projects = "5"
                level = "Proficent"
            />
             <SkillsComp
                LogoPicture = {Astro}
                LangName = "Astro"
                yoe = "0.5"
                projects = "1"
                level = "Beginner"
            />
        </div>
    </div>
  )
}

export default AboutBoxImgRight
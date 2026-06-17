import React from 'react'
import './aboutboximgright.css'
import SkillsComp from './skillscomp'

import ReactLogo from '../../images/skillslogo/react.webp'
import CppLogo from '../../images/skillslogo/cpplogo.png'
import FirebaseLogo from '../../images/skillslogo/firebaselogo.png'
import JavaLogo from '../../images/skillslogo/javalogo.png'
import JsLogo from '../../images/skillslogo/jslogo.png'
import MongodbLogo from '../../images/skillslogo/mongodblogo.png'
import NextLogo from '../../images/skillslogo/nextlogo(2).png'
import PythonLogo from '../../images/skillslogo/pythonlogo.png'
import SpringLogo from '../../images/skillslogo/springbootlogo.png'
import SqlLogo from '../../images/skillslogo/sqllogo.png'
import Astro from '../../images/skillslogo/astro.webp'

function AboutBoxImgRight() {
    return (
        <div className='aboutBoxImgRight'>
            {/* <h1 id='skills'>Skills</h1> */}

            <div className='aboutBoxRight'>


                <SkillsComp
                    LogoPicture={CppLogo}
                    LangName="C++/C"
                    yoe="2"
                    projects="5"
                    level="Proficent"
                />
                <SkillsComp
                    LogoPicture={ReactLogo}
                    LangName="React/React Native"
                    yoe="2"
                    projects="5"
                    level="Proficent"
                />
                <SkillsComp
                    LogoPicture={SqlLogo}
                    LangName="MySQL"
                    yoe="2"
                    projects="5"
                    level="Proficent"
                />
                <SkillsComp
                    LogoPicture={JavaLogo}
                    LangName="Java"
                    yoe="4"
                    projects="5"
                    level="Proficent"
                />
                <SkillsComp
                    LogoPicture={JsLogo}
                    LangName="Javascript"
                    yoe="3"
                    projects="5"
                    level="Proficent"
                />
                <SkillsComp
                    LogoPicture={FirebaseLogo}
                    LangName="Firebase"
                    yoe="3"
                    projects="5"
                    level="Proficent"
                />
                <SkillsComp
                    LogoPicture={MongodbLogo}
                    LangName="MongoDb"
                    yoe="3"
                    projects="5"
                    level="Proficent"
                />
                <SkillsComp
                    LogoPicture={NextLogo}
                    LangName="Next.js"
                    yoe="1"
                    projects="5"
                    level="Proficent"
                />
                <SkillsComp
                    LogoPicture={PythonLogo}
                    LangName="Python"
                    yoe="2"
                    projects="5"
                    level="Proficent"
                />
                <SkillsComp
                    LogoPicture={SpringLogo}
                    LangName="Spring Boot"
                    yoe="1"
                    projects="5"
                    level="Proficent"
                />
                <SkillsComp
                    LogoPicture={Astro}
                    LangName="Astro"
                    yoe="0.5"
                    projects="1"
                    level="Beginner"
                />
            </div>
        </div>
    )
}

export default AboutBoxImgRight
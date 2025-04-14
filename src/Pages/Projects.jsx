import './Styles/Projects.css'
import React, { useState } from 'react';
import Carousel from '../Components/ProjectsComp/Carousel';
import Project from '../Components/ProjectsComp/Project';
import MPlate from '../Images/ProjectImages/MPlate.png'
import BOB from '../Images/ProjectImages/BOB.jpg'
import ESG from '../Images/ProjectImages/ESG.png'
import Frogger from '../Images/ProjectImages/Frogger.png'
import Grocrify from '../Images/ProjectImages/Grocrify.png'
import Jeopardy from '../Images/ProjectImages/Jeopardy.jpg'
import MMER from '../Images/ProjectImages/MMER.png'
import PersonalWebsite from '../Images/ProjectImages/PersonalWebsite.png'
import RubeGoldberg from '../Images/ProjectImages/RubeGoldberg.png'
import Rummy from '../Images/ProjectImages/Rummy.jpg'
import SnapLink from '../Images/ProjectImages/SnapLink.png'
import WordSearch from '../Images/ProjectImages/WordsearchGame.png'
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between children
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};


export const Projects = () => {

  const items = [
    <Project name="PersonalWebsite" shortDescription="My Personal Website" date="2025" image={PersonalWebsite} languagesList={["React", "CSS"]}/>,
        <Project name="SnapLink" shortDescription="Hackathon project for small buisnesses" date="2025" image={SnapLink} languagesList={["Next.js", "MongoDB", "SpringBoot"]}/>,
        <Project name="Mplate" shortDescription="One stop shop for working moms" date="2023" image={MPlate} languagesList={["React", "Firebase"]}/>,
        
        <Project name="Grocrify" shortDescription="Grocery shopping and todo list app" date="2022" image={Grocrify} languagesList={["Java", "Firebase"]}/>,
        <Project name="Epic Study Game" shortDescription="Creative way to study in a game" date="2021" image={ESG} languagesList={["JS", "HTML", "CSS"]}/>,
        <Project name="Frogger" shortDescription="Interactive game of frogger" date="2020" image={Frogger} languagesList={["JS", "HTML", "CSS"]}/>,

       
        <Project name="Jeopardy" shortDescription="Simplified game of Jeopardy!" date="2020" image={Jeopardy} languagesList={["JS", "HTML", "CSS"]}/>,
        <Project name="Mikey Mouse Escape Room" shortDescription="Escape room interactive 2d game" date="2022" image={MMER} languagesList={["JS", "HTML", "CSS"]}/>,
        <Project name="Battle Of Billionares" shortDescription="Billionares fight simulator" date="2023" image={BOB} languagesList={["Java", "JavaFx"]}/>,
       
        <Project name="RubeGoldberg Machine" shortDescription="RubeGoldberg style animation" date="2023" image={RubeGoldberg} languagesList={["P5.js"]}/>,
        <Project name="Rummy" shortDescription="Java game of Rummy" date="2022" image={Rummy} languagesList={["Java"]}/>,
        <Project name="WordSearch" shortDescription="Java game of WordSearch" date="2022" image={WordSearch} languagesList={["Java"]}/>,
  ];

  return (

    <div id='projects'>
      <h1>My Projects</h1>

      
      {/* <div className='allProjects'> */}
      {/* <Carousel items={items} /> */}

      <motion.div
        className='allProjects'
        initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 2 } }}
      >
        <Project name="PersonalWebsite" shortDescription="My Personal Website" link="https://github.com/ZeelPatel1024/PersonalWebsite" date="2025" image={PersonalWebsite} languagesList={["React", "CSS"]}/>
        <Project name="SnapLink" shortDescription="Hackathon project for small buisnesses" link="https://github.com/ZeelPatel1024/SparkHackProject" date="2025" image={SnapLink} languagesList={["Next.js", "MongoDB", "SpringBoot"]}/>
        <Project name="Mplate" shortDescription="One stop shop for working moms" date="2023" link="https://github.com/ZeelPatel1024" image={MPlate} languagesList={["React", "Firebase"]}/>
      </motion.div>

      <motion.div
        className='allProjects'
        initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 2 } }}
      >
         <Project name="Grocrify" shortDescription="Grocery shopping and todo list app" link="https://github.com/ZeelPatel1024/Grocrify" date="2022" image={Grocrify} languagesList={["Java", "Firebase"]}/>
        <Project name="Epic Study Game" shortDescription="Creative way to study in a game" link="https://github.com/ZeelPatel1024/The-Epic-Study-Game" date="2021" image={ESG} languagesList={["JS", "HTML", "CSS"]}/>
        <Project name="Frogger" shortDescription="Interactive game of frogger" date="2020" link="https://github.com/ZeelPatel1024/Frogger" image={Frogger} languagesList={["JS", "HTML", "CSS"]}/>
      </motion.div>

      <motion.div
        className='allProjects'
        initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 2 } }}
      >
        <Project name="Jeopardy" shortDescription="Simplified game of Jeopardy!" date="2020" link="https://github.com/ZeelPatel1024/Jeopardy-Game" image={Jeopardy} languagesList={["JS", "HTML", "CSS"]}/>
        <Project name="Mikey Mouse Escape Room" shortDescription="Escape room interactive 2d game" link="https://github.com/ZeelPatel1024/Mikey-Mouse-Escape-Room-" date="2022" image={MMER} languagesList={["JS", "HTML", "CSS"]}/>
        <Project name="Battle Of Billionares" shortDescription="Billionares fight simulator" link="https://github.com/ZeelPatel1024/Battle-Of-Billionares" date="2023" image={BOB} languagesList={["Java", "JavaFx"]}/>
      </motion.div>

      <motion.div
        className='allProjects'
        initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 2 } }}
      >
        <Project name="RubeGoldberg Machine" shortDescription="RubeGoldberg style animation" link="https://github.com/ZeelPatel1024/Rube-Goldberg-Mashine" date="2023" image={RubeGoldberg} languagesList={["P5.js"]}/>
        <Project name="Rummy" shortDescription="Java game of Rummy" link="https://github.com/ZeelPatel1024/Rummy-Card-Game" date="2022" image={Rummy} languagesList={["Java"]}/>
        <Project name="WordSearch" shortDescription="Java game of WordSearch" link="https://github.com/ZeelPatel1024/Wordsearch-Game" date="2022" image={WordSearch} languagesList={["Java"]}/>
      </motion.div>

      {/* </div> */}
      
      
    </div>
  )
}

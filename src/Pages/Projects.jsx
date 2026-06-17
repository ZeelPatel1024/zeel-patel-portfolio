import './Styles/Projects.css'
import React from 'react';
import Project from '../Components/ProjectsComp/Project';
import Carousel from '../Components/ProjectsComp/Carousel';
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
import projectsData from '../data/projects.json';
import { motion } from 'framer-motion';

const projectImages = {
  PersonalWebsite,
  SnapLink,
  Mplate: MPlate,
  Grocrify,
  "Epic Study Game": ESG,
  Frogger,
  Jeopardy,
  "Mikey Mouse Escape Room": MMER,
  "Battle Of Billionares": BOB,
  "RubeGoldberg Machine": RubeGoldberg,
  Rummy,
  WordSearch
};

export const Projects = () => {
  const projectList = projectsData.map((project, index) => (
    <Project
      key={index}
      name={project.name}
      shortDescription={project.shortDescription}
      link={project.link}
      date={project.date}
      image={projectImages[project.imageKey]}
      languagesList={project.languagesList}
    />
  ));

  return (
    <div id='projects'>
      <div className="projects-title-container">
        <div className="projects-title-wrapper">
          <span className="projects-title-line-left"></span>
          <span className="projects-title-diamond">♦</span>
          <h1 className="projects-title">PROJECTS</h1>
          <span className="projects-title-diamond">♦</span>
          <span className="projects-title-line-right"></span>
        </div>
        <p className="projects-subtitle">A collection of things I've built</p>
      </div>

      <motion.div
        className="projects-carousel-wrapper"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1.2 } }}
        viewport={{ once: true }}
      >
        <Carousel items={projectList} />
      </motion.div>
    </div>
  )
}

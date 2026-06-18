import './styles/projects.css'
import React from 'react';
import Project from '../components/projectscomp/project';
import Carousel from '../components/projectscomp/carousel';
import MPlate from '../images/projectimages/mplate.png'
import BOB from '../images/projectimages/bob.jpg'
import ESG from '../images/projectimages/esg.png'
import Frogger from '../images/projectimages/frogger.png'
import Grocrify from '../images/projectimages/grocrify.png'
import Jeopardy from '../images/projectimages/jeopardy.jpg'
import MMER from '../images/projectimages/mmer.png'
import PersonalWebsite from '../images/projectimages/personalwebsite.png'
import RubeGoldberg from '../images/projectimages/rubegoldberg.png'
import Rummy from '../images/projectimages/rummy.jpg'
import SnapLink from '../images/projectimages/snaplink.png'
import WordSearch from '../images/projectimages/wordsearchgame.png'
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

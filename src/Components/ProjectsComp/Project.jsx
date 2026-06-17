import React from 'react'
import './Project.css'
import Courses from './Lang'

// Dynamic icon selector based on project name
const getProjectIcon = (name) => {
  const cleanName = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  if (cleanName.includes('link')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="proj-svg-icon">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    );
  }
  if (cleanName.includes('grocrify') || cleanName.includes('grociify')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="proj-svg-icon">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    );
  }
  if (cleanName.includes('mplate')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="proj-svg-icon">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    );
  }
  if (cleanName.includes('game') || cleanName.includes('study') || cleanName.includes('jeopardy') || cleanName.includes('escape') || cleanName.includes('billionare') || cleanName.includes('rummy') || cleanName.includes('wordsearch') || cleanName.includes('frogger')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="proj-svg-icon">
        <rect x="2" y="6" width="20" height="12" rx="3" />
        <line x1="6" y1="12" x2="10" y2="12" />
        <line x1="8" y1="10" x2="8" y2="14" />
        <line x1="15" y1="13" x2="15.01" y2="13" />
        <line x1="18" y1="11" x2="18.01" y2="11" />
      </svg>
    );
  }
  if (cleanName.includes('rube') || cleanName.includes('goldberg') || cleanName.includes('machine')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="proj-svg-icon">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="proj-svg-icon">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
};

// Elegant SVG corners components
const CornerOrnaments = () => (
  <>
    <div className="project-corner top-left">
      <svg viewBox="0 0 40 40" fill="none" stroke="#caa355" strokeWidth="1.2">
        <path d="M 4,24 L 4,4 L 24,4" />
        <path d="M 8,28 C 8,16 16,8 28,8" />
        <circle cx="14" cy="14" r="1.5" fill="#caa355" />
      </svg>
    </div>
    <div className="project-corner top-right">
      <svg viewBox="0 0 40 40" fill="none" stroke="#caa355" strokeWidth="1.2">
        <path d="M 36,24 L 36,4 L 16,4" />
        <path d="M 32,28 C 32,16 24,8 12,8" />
        <circle cx="26" cy="14" r="1.5" fill="#caa355" />
      </svg>
    </div>
    <div className="project-corner bottom-left">
      <svg viewBox="0 0 40 40" fill="none" stroke="#caa355" strokeWidth="1.2">
        <path d="M 4,16 L 4,36 L 24,36" />
        <path d="M 8,12 C 8,24 16,32 28,32" />
        <circle cx="14" cy="26" r="1.5" fill="#caa355" />
      </svg>
    </div>
    <div className="project-corner bottom-right">
      <svg viewBox="0 0 40 40" fill="none" stroke="#caa355" strokeWidth="1.2">
        <path d="M 36,16 L 36,36 L 16,36" />
        <path d="M 32,12 C 32,24 24,32 12,32" />
        <circle cx="26" cy="26" r="1.5" fill="#caa355" />
      </svg>
    </div>
  </>
);

const Project = ({ image, languagesList, name, shortDescription, date, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="project-card-link">
      <div className='project'>
        {/* Corner filigree decorations */}
        <CornerOrnaments />

        {/* Project Image Container with Soft Dark Mask */}
        <div className="project-image-container">
          <img id="projectimg" src={image} alt={name}></img>
          <div className="project-image-overlay"></div>
        </div>

        {/* Center overlay circle icon */}
        <div className="project-icon-overlay">
          <div className="project-icon-circle">
            {getProjectIcon(name)}
          </div>
        </div>

        {/* Description section */}
        <div className='description'>
          <h2 id="name">{name}</h2>
          <p id="shortdes">{shortDescription}</p>
          
          <div className="project-date-divider">
            <span className="project-date-line"></span>
            <span id="date">{date}</span>
            <span className="project-date-line"></span>
          </div>
        </div>

        {/* Language tags pillbox */}
        <div id='descriptions'>
          {languagesList.map((item, index) => (
            <Courses key={index} courseName={item} />
          ))}
        </div>
      </div>
    </a>
  )
}

export default Project
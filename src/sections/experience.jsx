import React, { useState, useRef } from 'react'
import './styles/experience.css'
import '../components/aboutcomp/aboutboxcomp.css'
import JobComp from '../components/experiencecomp/jobcomp'
import { motion, AnimatePresence } from "framer-motion"

import GoogleLogo from '../images/jobslogo/googlelogo.png'
import CodeNinjasLogo from '../images/jobslogo/codeninjaslogo.png'
import CskLogo from '../images/jobslogo/csklogo.png'
import CycLogo from '../images/jobslogo/cyclogo.webp'
import AcornLogo from '../images/jobslogo/acornlogo.jpeg'
import WiCSLogo from '../images/jobslogo/wics.png'

import experiencesData from '../data/experiences.json'

const logoMap = {
  google: GoogleLogo,
  wics: WiCSLogo,
  codeninjas: CodeNinjasLogo,
  csk: CskLogo,
  cyc: CycLogo,
  acorn: AcornLogo
};

export const Experience = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef(null);

  const openModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
    document.body.style.overflow = 'unset';
  };

  // const backgroundStyle = {
  //   background: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #01010c 120%), url(${twilightbackground})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   backgroundRepeat: "no-repeat",
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   position: 'relative'
  // };

  return (
    <div id="experience" >
      <br></br>
      <div className="about-box-title-container centered-title">
        <h1 className="about-box-title">My Experience Journey</h1>
        <div className="about-box-divider">
          <span className="divider-line"></span>
          <span className="divider-diamond">♦</span>
          <span className="divider-line"></span>
        </div>
      </div>

      <div className="timeline-container" ref={containerRef}>
        {/* Central Vertical Line Axis */}
        <motion.div 
          className="timeline-axis-line"
          style={{transformOrigin: "top" }}
        />
        
        {/* Top Node Diamond */}
        <div className="timeline-axis-start">
          <span className="timeline-diamond-node">♦</span>
        </div>

        {experiencesData.map((job, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div key={job.id} className={`timeline-row ${isLeft ? 'left' : 'right'}`}>
              <motion.div 
                className="timeline-card-wrapper"
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: { duration: 1.2 }
                }} 
                initial={{ x: isLeft ? -80 : 80, opacity: 0 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <JobComp
                  logo={logoMap[job.logoKey]}
                  logoKey={job.logoKey}
                  jobTitle={job.jobTitle}
                  jobName={job.company}
                  date={job.date}
                  onClick={() => openModal(job)}
                />
              </motion.div>

              <div className="timeline-node-container">
                <motion.div 
                  className="timeline-node"
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="timeline-node-inner"></div>
                </motion.div>
              </div>

              <div className="timeline-empty-space"></div>
            </div>
          );
        })}

        {/* Bottom Node Crown */}
        <div className="timeline-axis-end">
          <div className="timeline-crown-node">
            <svg viewBox="0 0 100 100" fill="#caa355" xmlns="http://www.w3.org/2000/svg" className="timeline-crown-icon">
              {/* Base ring */}
              <path d="M 12 76 Q 50 80 88 76 L 88 81 Q 50 85 12 81 Z" />
              <path d="M 15 71 Q 50 75 85 71 L 85 73 Q 50 77 15 73 Z" />
              
              {/* Base Jewels */}
              <circle cx="50" cy="78.5" r="1.5" fill="#01010c" />
              <circle cx="32" cy="78" r="1.2" fill="#01010c" />
              <circle cx="68" cy="78" r="1.2" fill="#01010c" />
              <circle cx="23" cy="78.2" r="1.2" fill="#01010c" />
              <circle cx="77" cy="78.2" r="1.2" fill="#01010c" />

              {/* Main Peaks and arches */}
              <path d="M 16 69 
                       C 12 50 8 38 8 36
                       C 8 34.5 10 34.5 11 36
                       C 16 48 23 53 27 53
                       C 29 53 30 42 32 30
                       C 33 25 35 25 36 30
                       C 38 42 42 50 48 50
                       C 49 50 50 22 50 18
                       C 50 16 50 16 50 18
                       C 50 22 51 50 52 50
                       C 58 50 62 42 64 30
                       C 65 25 67 25 68 30
                       C 70 42 71 53 73 53
                       C 77 53 84 48 89 36
                       C 90 34.5 92 34.5 92 36
                       C 92 38 88 50 84 69
                       Q 50 72 16 69 Z" />

              {/* Jewels on top of peaks */}
              <circle cx="9.5" cy="35" r="3.5" />
              <circle cx="34" cy="28" r="2.8" />
              <circle cx="50" cy="15.5" r="4" />
              <circle cx="66" cy="28" r="2.8" />
              <circle cx="90.5" cy="35" r="3.5" />
            </svg>
          </div>
        </div>
      </div>

      {/* Details Popup Modal */}
      <AnimatePresence>
        {isModalOpen && selectedJob && (
          <motion.div 
            className="job-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target.className === 'job-modal-overlay') closeModal();
            }}
          >
            <motion.div 
              className="job-modal-content"
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1, transition: { type: 'spring', damping: 25, stiffness: 350 } }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
            >
              {/* Close Button */}
              <button className="job-modal-close" onClick={closeModal}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="close-icon">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {/* Left Pane */}
              <div className="job-modal-left">
                {/* Skyscraper Building Watermark SVG */}
                <div className="job-modal-watermark">
                  <svg viewBox="0 0 400 300" fill="none" stroke="#caa355" strokeWidth="1.2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M150 160 C150 110, 250 110, 250 160 Z" />
                    <line x1="200" y1="110" x2="200" y2="80" />
                    <circle cx="200" cy="80" r="3" />
                    <rect x="120" y="160" width="160" height="140" />
                    <rect x="40" y="190" width="80" height="110" />
                    <rect x="280" y="190" width="80" height="110" />
                    <line x1="140" y1="190" x2="140" y2="290" />
                    <line x1="160" y1="190" x2="160" y2="290" />
                    <line x1="180" y1="190" x2="180" y2="290" />
                    <line x1="220" y1="190" x2="220" y2="290" />
                    <line x1="240" y1="190" x2="240" y2="290" />
                    <line x1="260" y1="190" x2="260" y2="290" />
                    <polygon points="120,190 280,190 200,155" />
                    <rect x="60" y="210" width="15" height="25" rx="2" />
                    <rect x="90" y="210" width="15" height="25" rx="2" />
                    <rect x="295" y="210" width="15" height="25" rx="2" />
                    <rect x="325" y="210" width="15" height="25" rx="2" />
                  </svg>
                </div>

                <div className="modal-logo-container">
                  {selectedJob.logoKey === 'code' ? (
                    <div className="modal-code-icon-wrapper">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#caa355" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="modal-code-icon">
                        <rect x="3" y="4" width="18" height="16" rx="3" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <polyline points="10 12 8 14 10 16" />
                        <polyline points="14 12 16 14 14 16" />
                        <line x1="13" y1="11" x2="11" y2="17" />
                      </svg>
                    </div>
                  ) : (
                    <img className="modal-job-logo" src={logoMap[selectedJob.logoKey]} alt={selectedJob.jobTitle} />
                  )}
                </div>

                <h2 className="modal-job-title">{selectedJob.jobTitle}</h2>
                <p className="modal-company">{selectedJob.company}</p>
                <p className="modal-date">{selectedJob.date}</p>

                {/* Metadata Tags */}
                <div className="modal-metadata-section">
                  <div className="modal-metadata-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#caa355" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="modal-attr-icon">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>{selectedJob.location}</span>
                  </div>

                  <div className="modal-metadata-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#caa355" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="modal-attr-icon">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                    <span>{selectedJob.type}</span>
                  </div>

                  <div className="modal-metadata-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#caa355" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="modal-attr-icon">
                      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                      <line x1="7" y1="7" x2="7.01" y2="7" />
                    </svg>
                    <span>{selectedJob.field}</span>
                  </div>
                </div>

                <div className="modal-left-divider">
                  <span className="divider-line"></span>
                  <span className="divider-diamond">♦</span>
                  <span className="divider-line"></span>
                </div>
              </div>

              {/* Right Pane */}
              <div className="job-modal-right">
                <div className="modal-right-section">
                  <h3 className="modal-section-title">Overview</h3>
                  <p className="modal-overview-text">{selectedJob.overview}</p>
                </div>

                <div className="modal-right-section">
                  <h3 className="modal-section-title">Key Impact</h3>
                  <ul className="modal-impact-list">
                    {selectedJob.points.map((point, i) => (
                      <li key={i} className="modal-impact-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#caa355" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="bullet-checkmark">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-right-section">
                  <h3 className="modal-section-title">Technologies</h3>
                  <div className="modal-tech-container">
                    {selectedJob.technologies.map((tech, i) => (
                      <span key={i} className="modal-tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <br></br>
      <br></br>
    </div>
  )
}

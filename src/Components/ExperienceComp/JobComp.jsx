import React from 'react'
import './Style/JobComp.css'

function JobComp({ logo, logoKey, jobTitle, jobName, date, onClick }) {
  return (
    <div className='JobCompCard' onClick={onClick}>
      <div className='jobCardContent'>
        <div className='jobLogoContainer'>
          {logoKey === 'code' || !logo ? (
            <div className='jobCodeIconWrapper'>
              <svg viewBox="0 0 24 24" fill="none" stroke="#caa355" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="job-code-icon">
                <rect x="3" y="4" width="18" height="16" rx="3" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <polyline points="10 12 8 14 10 16" />
                <polyline points="14 12 16 14 14 16" />
                <line x1="13" y1="11" x2="11" y2="17" />
              </svg>
            </div>
          ) : (
            <img className='jobCardLogo' src={logo} alt={jobTitle} />
          )}
        </div>

        <div className='jobCardInfo'>
          <h2 className='jobCardTitle'>{jobTitle}</h2>
          <p className='jobCardCompany'>{jobName}</p>
          <p className='jobCardDate'>{date}</p>
        </div>
      </div>

      <div className='jobCardChevronWrapper'>
        <div className='jobCardChevron'>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="chevron-icon">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default JobComp
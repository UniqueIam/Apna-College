import React from 'react'
import { IoIosPeople } from "react-icons/io";
import { FaGreaterThan } from 'react-icons/fa6';
import './Community.css'

const Community = () => {
  return (
    <div className='community'>
      <div className='learners'>
        <h2>India's Most Loved Coding Community ❤️</h2>
        <div className='happy-learners'>
        <IoIosPeople style={{fontSize:'39px',color:'white'}} />5,000,000+
        <p>Happy Learners</p>
        </div>
        <div className='monthly-views'></div>
        <div className='monthly-subscribers'></div>
      </div>

      <div className='community-description'>
        <h3>New AUG'24 Batch🔥</h3>
        <h2>Sigma 4.0 : Development + DSA + Aptitude</h2>
        <p>Start your placement preparation today!</p>
        <button>
          Explore
          <span className="icon-wrapper">
            <FaGreaterThan />
            <FaGreaterThan />
          </span>
        </button>
      </div>
    </div>
  )
}

export default Community

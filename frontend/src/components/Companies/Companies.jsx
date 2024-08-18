import React from 'react';
import './Companies.css';
import { companies_assets } from '../../assets/assets';

const Companies = () => {
  return (
    <div className='companies'>
      <p>Thousands of students achieved their<span> dream job at</span></p>
      <div className='companies-list'>
        {Object.values(companies_assets).map((logo, index) => (
          <div className='company-item' key={index}>
            <img src={logo} alt={`Company ${index + 1}`} style={{width:'90px',height:'100px'}} />
          </div>
        ))}
      </div>
      <p>+ many more</p>
      <div className='underline'></div>
    </div>
  );
};

export default Companies;

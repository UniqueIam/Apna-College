import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './Header.css';
import { FaGreaterThan } from 'react-icons/fa6';
import { assets } from '../../assets/assets';


const Header = () => {
  const [typeEffect] = useTypewriter({
    words: ['C++', 'Alpha-DSA', 'Delta-Web Development','Sigma-DSA+Web Development'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 100,
  });

  return (
    <div className='header'>
      <div className='left-header'>
        <div className='left-header-text'>
          Learn & become the<br />
          <p>Top 1% Software developer</p>
        </div>
        <div className='left-header-running-text'>
          <span className='dynamic-text'>{typeEffect}</span>
          <Cursor />
        </div>
        <button className='explore-button'>
          Explore New Batches
          <FaGreaterThan />
        </button>
      </div>
      <div className='right-header'>
        <img src={assets.coverImage} style={{backgroundImage:'cover'}} />
      </div>
    </div>
    
  );
};

export default Header;

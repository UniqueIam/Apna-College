import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Signup from '../Signup/Signup';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import gsap from 'gsap';

const Navbar = () => {
  const [showModal, setShowModal] = useState({ show: false, isLogin: false });
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleSignup = () => {
    setShowModal({ show: true, isLogin: false });
  };

  const handleLogin = () => {
    setShowModal({ show: true, isLogin: true });
  };

  const closeModal = () => {
    setShowModal({ show: false, isLogin: false });
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  useEffect(() => {
    if (showMobileMenu) {
      gsap.fromTo(
        '.mobile-menu',
        { y: '-100%' },
        { y: '0%', duration: 1, ease: 'power4.out' }
      );
    }
  }, [showMobileMenu]);

  return (
    <>
      <div className='navbar'>
        <div className='left-navbar'>
          <h2>
            <span id='apna'>Apna<br /></span>
            <span id='college'>College</span>
          </h2>
        </div>
        <div className='right-navbar'>
          <button id='new-sigma' style={{ height: '40px', width: '170px' }}>New sigma 4.0</button>
          <p>Home</p>
          <p>New Courses</p>
          <p onClick={handleLogin} style={{ cursor: 'pointer' }}>Log in</p>
          <button
            id='signup'
            onClick={handleSignup}
            style={{ height: '40px', width: '100px' }}
          >
            Sign up
          </button>
        </div>
        <div className='burger-menu' onClick={toggleMobileMenu}>
          {showMobileMenu ? <IoMdClose size={30} /> : <GiHamburgerMenu size={30} />}
        </div>
      </div>

      {showModal.show && <Signup closeModal={closeModal} isLogin={showModal.isLogin} />}

      {showMobileMenu && (
        <div className='mobile-menu'>
          <p onClick={handleLogin} style={{ cursor: 'pointer' }}>Log in</p>
          <button onClick={handleSignup} style={{ height: '40px', width: '100px' }}>
            Sign up
          </button>
          <p>Home</p>
          <p>New Courses</p>
        </div>
      )}
    </>
  );
};

export default Navbar;

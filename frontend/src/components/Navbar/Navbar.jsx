import React, { useState } from 'react';
import './Navbar.css';
import Signup from '../Signup/Signup';

const Navbar = () => {
  const [showModal, setShowModal] = useState({ show: false, isLogin: false });

  const handleSignup = () => {
    setShowModal({ show: true, isLogin: false });
  };

  const handleLogin = () => {
    setShowModal({ show: true, isLogin: true });
  };

  const closeModal = () => {
    setShowModal({ show: false, isLogin: false });
  };

  return (
    <>
      <div className='navbar'>
        <div className='left-navbar'>
          <h2><span id='apna'>Apna<br /></span><span id='college'>College</span></h2>
        </div>
        <div className='right-navbar'>
          <button id='new-sigma' style={{ height: '40px', width: '170px' }}>New sigma 4.0</button>
          <p>Home</p>
          <p>New Courses</p>
          <p onClick={handleLogin} style={{cursor:'pointer'}}>Log in</p>
          <button
            id='signup'
            onClick={handleSignup}
            style={{ height: '40px', width: '100px' }}
          >
            Sign up
          </button>
        </div>
      </div>

      {showModal.show && <Signup closeModal={closeModal} isLogin={showModal.isLogin} />}
    </>
  );
};

export default Navbar;

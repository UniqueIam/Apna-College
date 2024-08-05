import React, { useState, useRef, useEffect } from 'react';
import './Signup.css';
import gsap from 'gsap';

const Signup = ({ closeModal, isLogin }) => {
  const [loginView, setLoginView] = useState(isLogin);
  const overlayRef = useRef(null);

  const handleClose = () => {
    gsap.to(overlayRef.current, {
      scale: 0,
      duration: 0.6,
      ease: 'circ.out',
      onComplete: closeModal
    });
  };

  useEffect(() => {
    gsap.fromTo(
      overlayRef.current,
      { scale: 0.4, ease: 'back.inOut' },
      { scale: 1, duration: 1 }
    );
  }, []);

  useEffect(() => {
    setLoginView(isLogin);
  }, [isLogin]);

  const toggleView = () => {
    setLoginView(prevState => !prevState);
  };

  return (
    <div className='signup-overlay' ref={overlayRef}>
      <div
        className='signup-content'
        style={{ height: loginView ? '65vh' : '95vh' }}
      >
        <button onClick={handleClose} className='close-btn'>X</button>
        <h2 id='signup-heading'>{loginView ? 'Log in to Apna College!' : 'Sign Up to Apna College!'}</h2>
        <form>
          {!loginView && (
            <>
              <label htmlFor='username'>What's Your name</label><br />
              <input 
                type='text'
                id='username' 
                name='username' 
                placeholder='Name'
                style={{ height: '40px', width: '25vw', outline: 'none', backgroundColor: '#E8F0FE' }}
                required 
              /><br />
            </>
          )}

          <label htmlFor='email'>What's Your Email</label><br />
          <input 
            type='email' 
            id='email' 
            name='email'
            placeholder='E-mail'
            style={{ height: '40px', width: '25vw', outline: 'none', backgroundColor: '#FFFFFF26', color: '#fff' }} 
            required 
          /><br />
           
          <label htmlFor='password'>Your Password?</label><br />
          <input 
            type='password' 
            id='password' 
            name='password'
            placeholder='Password' 
            style={{ height: '40px', width: '25vw', outline: 'none', backgroundColor: '#E8F0FE' }}
            required 
          /><br />

          {!loginView && (
            <>
              <label htmlFor='phone'>Phone Number</label><br />
              <input 
                type='text' 
                id='phone' 
                name='phone' 
                placeholder='Phone Number'
                style={{ height: '40px', width: '25vw', outline: 'none', backgroundColor: '#FFFFFF26', color: '#fff' }}
                required 
              /><br />
            </>
          )}
          
          <button type='submit'>{loginView ? 'Login' : 'Start your learning journey'}</button><br />
          <p id='sign-in' onClick={toggleView}>
            {loginView ? 'Create account' : 'Sign in with your account'}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;

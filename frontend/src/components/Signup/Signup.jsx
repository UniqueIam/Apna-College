import React, { useState, useRef, useEffect } from 'react';
import './Signup.css';
import gsap from 'gsap';
import axios from 'axios';

const Signup = ({ closeModal, isLogin }) => {
  const [loginView, setLoginView] = useState(isLogin);
  const overlayRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [loginErrorMessage, setLoginErrorMessage] = useState('');

  // State variables to manage input fields
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  let url = "http://localhost:8000";
  var response;

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
    resetFields();
    setLoginErrorMessage('');
  };

  const resetFields = () => {
    setUsername('');
    setEmail('');
    setPassword('');
    setPhone('');
    setErrorMessage('');
    setLoginErrorMessage('');
  };

  const authCheck = async (e) => {
    e.preventDefault();
    const data = {
      name: !loginView ? username : undefined,
      email: email,
      password: password,
      phone: !loginView ? phone : undefined
    };

    try {
      if (loginView) {
        response = await axios.post(url + '/api/users/login', data);
      } else {
        response = await axios.post(url + '/api/users/register', data);
      }

      if (response.data.success) {
        const token = response.data.token;
        localStorage.setItem('token', token);
        alert(loginView ? "Login Successful" : "Registration Successful");
        handleClose();
        resetFields(); // Reset fields after successful registration/login
      } else {
        setErrorMessage(response.data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error("Error during authentication:", error);
      if(loginView){
        setLoginErrorMessage('Email or password is incorrect.');
      }else{
      if (error.response && error.response.status === 400) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('Error during authentication. Please try again later.');
      }
    }
      resetFields(); // Reset fields even after an error
    }
  }

  return (
    <div className='signup-overlay' ref={overlayRef}>
      <div
        className='signup-content'
        style={{ height: loginView ? '65vh' : '95vh' }}
      >
        <button onClick={handleClose} className='close-btn'>X</button>
        <h2 id='signup-heading'>{loginView ? 'Log in to Apna College!' : 'Sign Up to Apna College!'}</h2>
        {loginView && loginErrorMessage && <p style={{ color: 'red', fontSize: '14px', fontFamily: 'sans-serif' }}>{loginErrorMessage}</p>}
        <form onSubmit={authCheck}>
          {!loginView && (
            <>
              <label htmlFor='username'>What's Your name</label><br />
              <input 
                type='text'
                id='username' 
                name='username' 
                placeholder='Name'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ height: '40px', width: '25vw', outline: 'none', backgroundColor: '#FFFFFF26', color: '#fff' }} 
            required 
          /><br />
          {errorMessage && <p style={{ color: 'red', fontSize: '14px', fontFamily:'sans-serif' }}>{errorMessage}</p>}

          <label htmlFor='password'>Your Password?</label><br />
          <input 
            type='password' 
            id='password' 
            name='password'
            placeholder='Password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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

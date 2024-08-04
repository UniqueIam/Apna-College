import React from 'react';
import './Signup.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Signup = ({ closeSignup }) => {

  return (
    <div className='signup-overlay'>
      <div className='signup-content'>
        <button onClick={closeSignup} className='close-btn'>X</button>
        <h2 id='signup-heading'>Sign Up to Apna College!</h2>
        <form>
          <label htmlFor='username'>What's Your name</label><br/>
          <input 
          type='text'
          id='username' 
          name='username' 
          placeholder='Name'
          style={{height:'40px',width:'25vw',outline:'none',backgroundColor:'#E8F0FE'}}
          required /><br/>

          <label htmlFor='email'>What's Your Email</label><br/>
          <input 
          type='email' 
          id='email' 
          name='email'
          placeholder='E-mail'
          style={{height:'40px',width:'25vw',outline:'none',backgroundColor:'#FFFFFF26',color:'#fff'}} 
          required 
          /><br/>

          <label htmlFor='password'>Your Password?</label><br/>
          <input 
          type='password' 
          id='password' 
          name='password'
          placeholder='password' 
          style={{height:'40px',width:'25vw',outline:'none',backgroundColor:'#E8F0FE'}}
          required /><br/>

          <label htmlFor='phone'>Phone Number</label><br/>
          <input 
          type='password' 
          id='password' 
          name='password' 
          style={{height:'40px',width:'25vw',outline:'none',backgroundColor:'#FFFFFF26',color:'#fff'}}
          required /><br/>

          <button type='submit'>Start your learning journey</button><br/>
          <p id='sign-in'>Sign in with your account</p>
        </form>
      </div>
    </div>
  );
};

export default Signup;

import React from 'react'

import './CSS/Login.css';

import { useState } from 'react';


import { FcGoogle } from "react-icons/fc";
import { ImAppleinc } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";


import { useNavigate } from 'react-router-dom';


const Login = () => {


  const navigate = useNavigate();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Details:', { email, password });
  };

  const handleSocialLogin = (option) => {
    console.log(`Login with ${option}`);
  };

  return (
    <div className="login-container">
      <div className="background"> 
        <img src="/Background.jpg" alt="background" />  
      </div>
      
      <div className="login-content">
        <div className="logo-section">
          <div className="logo cursor-pointer" onClick={()=>navigate('/')} >
            <img src="/Logo.png" alt="logo" />
          </div>
        </div>

        <div className="login-card">
          <h1 className="welcome-title">Welcome to medical AI Companion</h1>
          
          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <div className="input-wrapper">
                <div className="input-icon" style={{fontSize:"1.4rem"}}>
                  <MdOutlineEmail />
                </div>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <div className="input-wrapper">
                <div className="input-icon" style={{fontSize:"1.4rem"}}>
                  <TbLockPassword />
                </div>
                <input
                  type='password'
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="forgot-password">
              <a href="#forgot">Forgot Password ?</a>
            </div>

            <button type="submit" className="login-button">
              Login
            </button>

            <div className="signup-link">
              <span>Don't have an account? </span>
              <a onClick={()=>navigate('/signUp')} className='cursor-pointer'>SignUP</a>
            </div>

            <div className="divider">
              <span>Or</span>
            </div>

            <div className="social-login">
              <p className="social-text">Login with</p>
              <div className="social-buttons">
                <button 
                  type="button" 
                  className="social-btn google"
                  onClick={() => handleSocialLogin('Google')}
                >
                  <FcGoogle />
                </button>

                <button 
                  type="button" 
                  className="social-btn apple"
                  onClick={() => handleSocialLogin('Apple')}
                >
                  <ImAppleinc/>
                </button>

                <button 
                  type="button" 
                  className="social-btn microsoft"
                  onClick={() => handleSocialLogin('Microsoft')}
                >
                  <svg viewBox="0 0 24 24">
                    <path fill="#f25022" d="M11.4 11.4H.6V.6h10.8v10.8z"/>
                    <path fill="#00a4ef" d="M23.4 11.4H12.6V.6h10.8v10.8z"/>
                    <path fill="#7fba00" d="M11.4 23.4H.6V12.6h10.8v10.8z"/>
                    <path fill="#ffb900" d="M23.4 23.4H12.6V12.6h10.8v10.8z"/>
                  </svg>
                </button>

                <button 
                  type="button" 
                  className="social-btn github"
                  onClick={() => handleSocialLogin('GitHub')}
                >
                  <FaGithub />
                </button>

                <button 
                  type="button" 
                  className="social-btn facebook"
                  onClick={() => handleSocialLogin('Facebook')} style={{color:'#316AAF'}}
                >
                  <SiFacebook />
                </button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
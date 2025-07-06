import React from 'react'

import './CSS/SignUp.css';

import { useState } from 'react';


import { User, Mail, Lock } from 'lucide-react';

import { useNavigate } from 'react-router-dom';


const SignUp = () => {


  const navigate = useNavigate();



  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('SignUp Details:', formData);
  };

  return (
    <div className="signup-container">
      <div className="signup-background">
        <img src="/Background.jpg" alt="background" /> 
      </div>
      
      <div className="signup-content">
        <div className="signup-logo-section">
          <div className="signup-logo cursor-pointer" onClick={()=>navigate('/')}>
            <img src="/Logo.png" alt="logo" />
          </div>
        </div>

        <div className="signup-card">
          <h1 className="signup-title">Create Your Account</h1>
          
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="input-group">
              <div className="input-wrapper">
                <div className="icon">
                  <User size={20} />
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <div className="input-wrapper">
                <div className="icon">
                  <Mail size={20} />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <div className="input-wrapper">
                <div className="icon">
                  <Lock size={20} />
                </div>
                <input
                  type='password'
                  name="password"
                  placeholder="Enter Your Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />

              </div>
            </div>

            <div className="input-group">
              <div className="input-wrapper">
                <div className="icon">
                  <Lock size={20} />
                </div>
                <input
                  type='password'
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="terms-group">
              <label className="terms-checkbox">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  required
                />
                <span className="checkmark"></span>
                <span className="terms-text">
                  I agree all statements in <a href="#terms">Terms of services</a>
                </span>
              </label>
            </div>

            <button type="submit" className="signup-button" disabled={!agreeTerms}>
              Register
            </button>

            <div className="login-link">
              <span>Already have an account? </span>
              <a onClick={()=>navigate('/login')} className='cursor-pointer'>Login</a>
            </div>
          </form>
        </div>
      </div>

      <div className="signup-image">
        <img src="/AdVivum_SIgnup_Doctor.png" alt="Medical Professional" />
      </div>
    </div>
  );
};


export default SignUp
import React from 'react';


import { User, Send, Settings, Menu, X, ArrowDownToLine } from 'lucide-react';

import './CSS/Home.css';

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';


const Home = () => {
  
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [question, setQuestion] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    if (question.trim()) {
      console.log('Question submitted:', question);
      setQuestion('');
    }
  };




  const handleProfile = () => {
    console.log('Open profile');
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const sidebarItems = [
    { title: 'Symptoms of hypertension', id: 1 },
    { title: 'Benefits of fatty acids', id: 2 },
    { title: 'Type 2 diabetes treatment', id: 3 },
    { title: 'Causes of Alzheimers', id: 4 }
  ];

  return (
    <div className="home-container">
      
      <div className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <div className="learn-more-btn">
            <div>Learn More</div>
            <div> <User size={20} /> </div>
          </div>
        </div>

        <div className="sidebar-content">
          {sidebarItems.map((item) => (
            <div key={item.id} className="sidebar-item">
              {item.title}
            </div>
          ))}
        </div>

        <div className="sidebar-footer">
          <button className="more-chat-btn">
            <span>More Chat</span>
             <div> <ArrowDownToLine /> </div>
          </button>
        </div>
      </div>


      {sidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}


      <div className="main-content">
        
        <header className="header">
          <div className="header-left">
            <button className="mobile-menu-btn" onClick={toggleSidebar}>
              <div>
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </div>
            </button>
          </div>

          <div className="header-center">
            <img src="/Logo.png" alt="Logo" />
          </div>

          <div className="header-right">
            {isLoggedIn ? (
              <button className="profile-btn" onClick={handleProfile}>
                <div className="icon">
                  <User size={24} />
                </div>
              </button>
            ) : (
              <div className="auth-buttons">
                <button className="signup-btn" onClick={()=>navigate('/signUp')}>
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </header>


        <div className="content-area">
          <div className="welcome-section">
            <div className="doctor-illustration">
              <div className="doctor-avatar">
                <img src="/Doctor_Home01.png" alt="doctor" />
              </div>
            </div>

            <p className="welcome-text">
              Get answers to your medical questions with AI powered assistant
            </p>
          </div>


          <div className="question-section">
            <form onSubmit={handleQuestionSubmit} className="question-form">
              <div className="question-input-wrapper">
                <input
                  type="text"
                  placeholder="Ask a medical question"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="question-input"
                />
                <button type="submit" className="submit-btn" disabled={!question.trim()}>
                  <Send size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>


        <button className="settings-btn">
          <div className="icon">
            <Settings size={24} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Home;
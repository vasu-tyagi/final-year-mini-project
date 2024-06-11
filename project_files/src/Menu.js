import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

const Menu = () => {
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    // You can define the routes for each option
    const routes = {
      A: '/page-b',
      B: '/attackpage', // Change this to the desired route for Option B
      C: '/malware',
      D: '/assist',
    };

    navigate(routes[option]);
  };

  const handleSettingsClick = () => {
    navigate('/settings');
    console.log('Settings button clicked');
  };

  const handleLououtClick = () => {
    navigate('/');
    window.location.reload(); 
  };

  return (
    <div className="menu-container">
      <h1>Menu</h1>
      <div className="menu-options">
        <button onClick={() => handleOptionClick('A')}>Organisation components</button>
        <button onClick={() => handleOptionClick('B')}>Cyber Attacks</button>
        <button onClick={() => handleOptionClick('C')}>Malware Database</button>
        <button onClick={() => handleOptionClick('D')}>Assist</button>
      </div>
      {/* Settings button */}
      <button className="settings-button" onClick={handleSettingsClick}>
        Settings
      </button>
      {/* Logout button */}
      <button className="logout-button" onClick={handleLououtClick}>
        Logout
      </button>
    </div>
  );
};

export default Menu;

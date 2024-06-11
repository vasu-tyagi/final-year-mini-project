// PageB.js
import React from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Terminal from './Terminal';
import WebsiteContent from './WebsiteContent';
import DatabaseScreen from './DatabaseScreen';
import Inbox from './Inbox';
import MobileApp from './MobileApp';
import VSCodeSection from './VSCodeSection';
import './App.css'; // Import the CSS file

const PageB = () => {
  const navigate = useNavigate();

  const goToMenu = () => {
    // Clear local storage
    localStorage.clear();

    // Navigate to the menu page
    navigate('/menu');
  };

  return (
    <div className="page-b-container">
      {/* Button in the top-left corner */}
      <button className="menu-button" onClick={goToMenu}>
        Go to Menu
      </button>

      <div className="side-panel">
        <nav>
          <ul>
            <li>
              <Link to="terminal">Terminal</Link>
            </li>
            <li>
              <Link to="website">Website</Link>
            </li>
            <li>
              <Link to="database">Database</Link>
            </li>
            <li>
              <Link to="inbox">Inbox</Link>
            </li>
            <li>
              <Link to="mobileapp">Mobile App</Link>
            </li>
            <li>
              <Link to="vscodesection">Code Base</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<h3>Please select an option from the side panel.</h3>} />
          <Route path="terminal" element={<Terminal />} />
          <Route path="website" element={<WebsiteContent />} />
          <Route path="database" element={<DatabaseScreen />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="mobileapp" element={<MobileApp />} />
          <Route path="vscodesection" element={<VSCodeSection />} />
        </Routes>
      </div>
    </div>
  );
};

export default PageB;

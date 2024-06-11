// AttackPage.js
import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { useParams } from 'react-router-dom';

const AttackPage = () => {
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
            {/* Add links for each attack */}
            <li>
            <Link to="malware">Malware</Link>
            </li>
            <li>
            <Link to="phishing">Phishing</Link>
            </li>
            <li>
            <Link to="dos-ddos">DoS & DDoS</Link>
            </li>
            <li>
            <Link to="mitm">Man-in-the-Middle</Link>
            </li>
            <li>
            <Link to="sql-injection">SQL Injection</Link>
            </li>
            <li>
            <Link to="xss">Cross-Site Scripting</Link>
            </li>
            <li>
            <Link to="csrf">Cross-Site Request Forgery</Link>
            </li>
            <li>
            <Link to="zero-day">Zero-Day Exploits</Link>
            </li>
            <li>
            <Link to="apt">Advanced Persistent Threats</Link>
            </li>
            <li>
            <Link to="drive-by">Drive-by Downloads</Link>
            </li>
            <li>
            <Link to="cryptojacking">Cryptojacking</Link>
            </li>
            <li>
            <Link to="iot">IoT Attacks</Link>
            </li>
            <li>
            <Link to="social-engineering">Social Engineering</Link>
            </li>
            <li>
            <Link to="ransomware">Ransomware</Link>
            </li>
            <li>
            <Link to="whaling-ceo-fraud">Whaling/CEO Fraud</Link>
            </li>
            <li>
            <Link to="dns-spoofing">DNS Spoofing</Link>
            </li>
            <li>
            <Link to="eavesdropping">Eavesdropping</Link>
            </li>
            <li>
            <Link to="watering-hole">Watering Hole Attack</Link>
            </li>
            <li>
            <Link to="fileless-attacks">Fileless Attacks</Link>
            </li>
            <li>
            <Link to="credential-stuffing">Credential Stuffing</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<h3>Please select an attack from the side panel.</h3>} />
          {/* Include components for each attack */}
          <Route path=":attack" element={<AttackComponent />} />
        </Routes>
      </div>
    </div>
  );
};

const AttackComponent = () => {
  const { attack } = useParams();
  const [details, setDetails] = useState('');
  const navigate = useNavigate();

  const handlePracticeClick = () => {
    // Clear local storage
    localStorage.clear();
    // Navigate to the menu page
    navigate('/page-b');
  };

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch('/attackdetails.json');
        const data = await response.json();
        const attackDetails = data[attack];
        if (attackDetails) {
          // Format the attack details
          const formattedDetails = attackDetails.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ));
          setDetails(formattedDetails);
        } else {
          setDetails('Details not available.');
        }
      } catch (error) {
        console.error('Error fetching attack details:', error);
        setDetails('Error fetching details.');
      }
    };

    fetchDetails();
  }, [attack]);

  return (
    <div>
      <h1>{attack}</h1>
      {/* Render the formatted attack details */}
      {details}
      {/* Practice button in the bottom right corner */}
      <button className="practice-button" onClick={handlePracticeClick}>
        Practice
      </button>
    </div>
  );
};

export default AttackPage;

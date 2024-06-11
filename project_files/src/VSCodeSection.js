// VSCodeEditor.js
import React, { useState, useEffect } from 'react';
import './VSCodeSection.css';

const VSCodeEditor = () => {
  const [code, setCode] = useState('');

  useEffect(() => {
    // Load code from localStorage on component mount
    const storedCode = localStorage.getItem('vscodeCode');
    if (storedCode) {
      setCode(storedCode);
    } else {
      // Fetch initial code from the JSON file if not available in localStorage
      fetch('/code.json')
        .then((response) => response.json())
        .then((data) => {
          const initialCode = data.code || '';
          setCode(initialCode);
          // Save initial code to localStorage
          localStorage.setItem('vscodeCode', initialCode);
        })
        .catch((error) => console.error('Error fetching code:', error));
    }

    // Add event listener for beforeunload to clear local storage
    const handleBeforeUnload = () => {
      localStorage.removeItem('vscodeCode');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const handleCodeChange = (event) => {
    const newCode = event.target.value;
    setCode(newCode);
    // Save code to localStorage
    localStorage.setItem('vscodeCode', newCode);
  };

  return (
    <div className="vscode-editor">
      <textarea
        className="code-input"
        value={code}
        onChange={handleCodeChange}
        placeholder={code}
      />
    </div>
  );
};

export default VSCodeEditor;

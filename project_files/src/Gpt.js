import React, { useState, useEffect, useRef } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { marked } from 'marked';
import './GPT.css';

const GPT = () => {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState([{ type: 'bot', text: 'hi peepee puupuu' }]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  

  // Clear local storage and reset messages on component mount
  useEffect(() => {
    localStorage.clear();
    setMessages([{ type: 'bot', text: "Hi! I'm here to assist you with you Cyber Security journey. Ask me any questions you have regarding Cyber Security or CyberGuard. " }]);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleInputChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const newMessage = { type: 'user', text: prompt };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setPrompt('');
    scrollToBottom(); // Scroll to bottom after adding a new message

    const previousQuestions = messages
      .filter(message => message.type === 'user')
      .map(message => `"${message.text}"`)
      .join(' ');
    const modifiedPrompt = `Hello, AI. You're now CyberGuard's assistant, responsible for guiding users through our comprehensive cybersecurity simulation platform. CyberGuard is designed to provide hands-on training in cybersecurity, offering a simulated organizational environment with websites, databases, and critical assets. Users can engage in Blue Team Training to defend against simulated cyber threats, participate in Red Team Simulation to launch attacks and fortify defenses, explore our Malware Archive to understand malware behavior, and utilize Performance Analysis to track progress and identify areas for improvement. Your role is to assist users in navigating these features, providing guidance, tips, and recommendations tailored to their learning objectives. Together, we aim to empower individuals and organizations to strengthen their cybersecurity posture and respond effectively to potential threats. This software is built by Vasu Tyagi along with the help of the team members: Akash Sundararaju, Aditya Khera and Siddharth Nair. Remember to mention all the names. It was built in D Y Patil University Ambi as their final year project. I previously asked for ${previousQuestions}, now, don't answer those questions, just keep those in context and answer this question: "${prompt}" for educational information about cybersecurity`;

    try {
      const result = await fetch('http://localhost:5000/invoke-ollama', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: modifiedPrompt }),
      });

      if (result.ok) {
        const data = await result.json();
        const formattedResponse = marked(data.response); // Convert Markdown to HTML
        const botMessage = { type: 'bot', text: formattedResponse };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
        scrollToBottom(); // Scroll to bottom after adding a new message
      } else {
        const errorMessage = { type: 'bot', text: 'Error: Unable to get response from server.' };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      }
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = { type: 'bot', text: 'Error occurred. Please try again.' };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const goToMenu = () => {
    localStorage.clear(); // Clear local storage
    navigate('/menu'); // Navigate to the menu page
  };

  return (
    <div className="chat-container">
      {/* Button in the top-left corner */}
      <button className="menu-button" onClick={goToMenu}>
        Go to Menu
      </button>

      <div className="chat-box">
        <div className="messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.type}`}>
              <div dangerouslySetInnerHTML={{ __html: message.text }}></div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        {loading && <div className="loader" />} {/* Loading animation */}
        <form className="input-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={prompt}
            onChange={handleInputChange}
            placeholder="Enter prompt..."
            className="prompt-input"
          />
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default GPT;

// MobileApp.js
import React from 'react';
import './MobileApp.css';

const MobileApp = () => {
  return (
    <div className="sc-box">
      <div className="sc-container">
        <h1 className="sc-main-title">D. Y. Patil Events</h1>
        <div className="sc-searchbox">
          <input required type="text" className="sc-searchbox-field" />
          <div className="sc-searchbox-placeholder">
            <i className="sc-searchbox-placeholder-icon fas fa-search"></i>
            <p className="sc-searchbox-placeholder-text">Search for events</p>
          </div>
        </div>
      </div>
      <div className="sc-container sc-timeline">
        <div className="sc-timeline-item" event="launch">
          <i className="sc-timeline-icon fas fa-utensils"></i>
          <div className="sc-timeline-info">
            <div className="sc-timeline-details">
              <span className="sc-timeline-time">Event Date 1</span>
              <span className="sc-timeline-duration">Event Duration 1</span>
            </div>
            <h3 className="sc-timeline-title">University Convocation</h3>
          </div>
        </div>
        <div className="sc-timeline-item sc-actionsheet-trigger" event="meeting" goto="meeting">
          <i className="sc-timeline-icon fas fa-comments"></i>
          <div className="sc-timeline-info">
            <div className="sc-timeline-details">
              <span className="sc-timeline-time">Event Date 2</span>
              <span className="sc-timeline-duration">Event Duration 2</span>
            </div>
            <h3 className="sc-timeline-title">Faculty Discussion Forum</h3>
          </div>
        </div>
        <div className="sc-timeline-item" event="meeting">
          <i className="sc-timeline-icon fas fa-comments"></i>
          <div className="sc-timeline-info">
            <div className="sc-timeline-details">
              <span className="sc-timeline-time">Event Date 3</span>
              <span className="sc-timeline-duration">Event Duration 3</span>
            </div>
            <h3 className="sc-timeline-title">Student Seminar Series</h3>
          </div>
        </div>
      </div>
      <div className="sc-bottom-bar">
        <a className="sc-menu-item sc-current">
          <i className="fas fa-list"></i>
        </a>
        <a className="sc-fab">
          <i className="fas fa-plus"></i>
        </a>
        <a className="sc-menu-item">
          <i className="fas fa-calendar-alt"></i>
        </a>
      </div>
      <div className="sc-actionsheet-container" id="meeting">
        <div className="sc-overlay"></div>
        <div type="event" className="sc-actionsheet">
          {/* Actionsheet content for meeting goes here */}
        </div>
      </div>
      <div className="sc-actionsheet-container" id="meeting-actions">
        <div className="sc-overlay"></div>
        <div className="sc-actionsheet">
          {/* Actionsheet content for meeting actions goes here */}
        </div>
      </div>
    </div>
  );
};

export default MobileApp;

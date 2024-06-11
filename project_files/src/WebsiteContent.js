import React, { useState, useEffect } from 'react';
import './WebsiteContent.css';
import content from './content.json';
import loadtime from './loadtime.json';
import errorConfig from './error.json';

function WebsiteContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [pageContent, setPageContent] = useState(content);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate fetching data with a delay
      setTimeout(() => {
        setIsLoading(false);

        // Check if the page is not found
        if (errorConfig.isNotFound === 1) {
          setIsNotFound(true);
        } else {
          setIsNotFound(false);
          setPageContent(content);
        }
      }, loadtime * 1000);
    };

    fetchData();
  }, []);

  // Reload content when content.json changes
  useEffect(() => {
    const contentInterval = setInterval(() => {
      // Use fetch or import based on your needs
      import('./content.json')
        .then((newContent) => {
          setPageContent(newContent.default);
        })
        .catch((error) => console.error('Error fetching content:', error));
    }, 1000); // Adjust the interval based on your needs

    return () => clearInterval(contentInterval);
  }, []);

  return (
    <div className={`website-content ${isLoading ? 'loading' : ''}`}>
      {isLoading ? (
        // You can customize the loading indicator as needed
        <div><br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        <div className="loading-indicator">Loading...</div>
        <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br /></div>
      ) : isNotFound ? (
        // Display 404 Not Found message
        <div><br />
          <br />
        <br />
        <br />
          <br />
        <div className="not-found-message"><h1>404 Not Found</h1></div>
          <br />
          <br />
          <div class="error"></div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p>We apologize, but the server is currently unavailable. Please try again later.</p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br /></div>
      ) : (
        <>
          <header className="header">
            <div className="header-content">
              <h1 className="title">{pageContent.header.title}</h1>
              <p className="subtitle">{pageContent.header.subtitle}</p>
            </div>
            <nav className="navbar">
              {pageContent.header.navLinks.map((link, index) => (
                <a key={index} href={link.url} className="nav-link">
                  {link.text}
                </a>
              ))}
            </nav>
          </header>
          <div className="main-content-container">
            <div className="main-content">
              {pageContent.mainContent.highlightItems.map((item, index) => (
                <div key={index} className="highlight-item">
                  <h2>{item.title}</h2>
                  <p>{item.content}</p>
                </div>
              ))}
              <div
                className="placeholder-item"
                dangerouslySetInnerHTML={{ __html: pageContent.mainContent.placeholderItem }}
              ></div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default WebsiteContent;

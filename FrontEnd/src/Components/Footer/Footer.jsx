import React from 'react';
import './footer.css'; // Import the CSS file for styling


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
We are a team of passionate developers dedicated to crafting exceptional web applications that push the boundaries of innovation.</p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Aarav Garg: <a href="mailto:aaravgarg975@gmail.com">aaravgarg975@gmail.com</a></p>
          <p>Amitoj Singh: <a href="mailto:amitoj0605@gmail.com">amitoj0605@gmail.com</a> </p>
          <p>Chinmay Singh: <a href="mailto:singh.chinmay345@gmail.com">singh.chinmay345@gmail.com</a></p>
        </div>
        <div className="footer-section">
          <h3>LinkedIn Handles</h3>
          <ul>
            <li><a href='https://www.linkedin.com/in/aarav-garg-5b1715273' target="_blank" rel="noopener noreferrer">Aarav Garg</a></li>
            <li><a href='https://www.linkedin.com/in/chinmay-singh-4092b0253' target="_blank" rel="noopener noreferrer">Chinmay Singh</a></li>
            <li><a href='https://www.linkedin.com/in/amitoj-singh-51a058247' target="_blank" rel="noopener noreferrer">Amitoj Singh Bakshi</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 UniFind. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;


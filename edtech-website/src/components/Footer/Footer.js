import React from "react";
import "./Footer.css"; // Import a CSS file for styling
import { Link } from "react-router-dom";
import { FaLinkedin, FaYoutube, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import logo from './assets/logo.jpg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and description */}
        <div className="footer-section">
          <img src={logo} alt="Top-Notch Tutorials Logo" className="footer-logo" />
          <p className="footer-description">
            Top-Notch Tutorials empowers students for academic success through personalized
            learning and a focus on building strong foundations.
          </p>
        </div>

        {/* Our Courses Section */}
        <div className="footer-section">
          <h3 className="footer-title">Our Courses</h3>
          <ul className="footer-links">
          <li><Link to="/courses/data-science" style={{color:'white'}}>Data Science</Link></li>
          <li><Link to="/courses/data-analysis" style={{color:'white'}}>Data Analysis</Link></li>
          <li><Link to="/courses/machine-learning" style={{color:'white'}}>Machine Learning</Link></li>
          <li><Link to="/courses/artificial-intelligence" style={{color:'white'}}>Artificial Intelligence</Link></li>
          <li><Link to="/courses/cloud-computing" style={{color:'white'}}>Cloud Computing</Link></li>
          <li><Link to="/courses/generative-ai" style={{color:'white'}}>Generative AI</Link></li>
          </ul>
        </div>

         {/* Our Services Section */}
         <div className="footer-section">
         <h3 className="footer-title">Our Services</h3>
         <ul className="footer-links">
         <li><Link to="/services/online-live-sessions" style={{color:'white'}}>Online Live Sessions</Link></li>
         <li><Link to="/services/assignments" style={{color:'white'}}>Assignments</Link></li>
         <li><Link to="/services/mock-interviews" style={{color:'white'}}>Mock Interviews</Link></li>
         <li><Link to="/services/industry-projects" style={{color:'white'}}>Industry Projects</Link></li>
         <li><Link to="/services/placement-assistence" style={{color:'white'}}>Placement Assistance</Link></li>
         </ul>
       </div>

        {/* Our Locations Section */}
        <div className="footer-section">
          <h3 className="footer-title">Our Locations</h3>
          <p>Ridhi Siddhi Heights, Bhausaheb Kalate Nagar, Wakad, Pune 411057</p>
          <p>+91-9021125455</p>
          <p>+91-XXXXXXXXXX</p>
          <p>datalearnm@gmail.com</p>
          <div className="footer-icons">
            <span className="footer-icon">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
            </span>
            <span className="footer-icon">
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <FaYoutube />
                </a>
            </span>
            <span className="footer-icon">
                <a href="https://www.instagram.com/datalearnm/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
            </span>
            <span className="footer-icon">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                </a>
            </span>
            <span className="footer-icon">
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                </a>
            </span>
        </div>
        </div>

        {/* Explore Section */}
        <div className="footer-section">
          <h3 className="footer-title">Explore</h3>
          <ul className="footer-links">
            <li>Teacher Registration</li>
            <li>Gallery</li>
            <li>Blog & News</li>
            <li>FAQs</li>
            <li><Link to="/privacy-policy" style={{color:'white'}}>Privacy Policy</Link></li>
            <li>Sitemap</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './OnlineLiveSessions.css';
import ai from './Images/ai.png';
import DataAnalysis from './Images/data-analysis.png';
import DataScience from './Images/data-science.png';
import MachineLearning from './Images/machine-learning.png'; 

const OnlineLiveSessions = () => {
  const navigate = useNavigate();

  // Scroll to top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSignUpClick = () => {
    navigate('/register');
  };

  return (
    <div className="online-sessions-container">
      <h1 className="page-heading">Online Live Sessions</h1>
      
      <section className="intro-section">
        <p>
          Welcome to Datalearn's Online Live Sessions! We offer over 150+ hours of interactive live sessions
          with experienced instructors, providing in-depth coverage of the following courses:
        </p>
        <ul className="card-list">
          <li className="card-item">Data Science</li>
          <li className="card-item">Machine Learning</li>
          <li className="card-item">Data Analysis</li>
          <li className="card-item">Artificial Intelligence</li>
          <li className="card-item">Cloud Computing</li>
          <li className="card-item">Generative AI</li>
        </ul>
      </section>

      <section className="course-images">
        <h2>Course Preview Images</h2>
        <div className="image-container">
          <div className="image-item">
            <h3>Introduction to Data Science</h3>
            <img 
              src={DataScience} 
              alt="Data Science Intro" 
              className="course-image"
            />
            <p>Get an overview of the Data Science course and learn the basics of data processing and analysis.</p>
          </div>
          <div className="image-item">
            <h3>Machine Learning Overview</h3>
            <img 
              src={MachineLearning} 
              alt="Machine Learning Intro" 
              className="course-image"
            />
            <p>Explore the foundations of Machine Learning and understand key algorithms.</p>
          </div>
          <div className="image-item">
            <h3>Data Analysis Fundamentals</h3>
            <img 
              src={DataAnalysis} 
              alt="Data Analysis Intro" 
              className="course-image"
            />
            <p>Understand the importance of data analysis in decision-making and how to work with datasets.</p>
          </div>
          <div className="image-item">
            <h3>Artificial Intelligence Overview</h3>
            <img 
              src={ai} 
              alt="AI Overview" 
              className="course-image"
            />
            <p>Learn the basics of Artificial Intelligence and its applications in real-world scenarios.</p>
          </div>
        </div>
      </section>

      <section className="course-description">
        <h2>Course Details</h2>
        <p>
          Datalearn's Online Live Sessions are designed to help you master each concept with interactive
          sessions and real-world assignments. Our instructors are industry experts with years of experience
          in their respective fields. Whether you're interested in Data Science, Machine Learning, or Artificial Intelligence,
          our hands-on approach will give you the skills to succeed in your career.
        </p>
      </section>
      
      <section className="cta-section">
        <h2>Get Started with Datalearn</h2>
        <p>Ready to take the next step in your career? Join our online live sessions and begin your journey to success!</p>
        <button className="cta-button" onClick={handleSignUpClick}>Sign Up Now</button>
      </section>
    </div>
  );
};

export default OnlineLiveSessions;

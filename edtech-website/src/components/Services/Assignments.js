import React,{ useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Assignments.css';

const Assignments = () => {
  const navigate = useNavigate();


   // Scroll to top when the component is mounted
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="assignments-page">
      <header className="assignments-header">
        <h1>Assignments</h1>
        <p>Enhance your learning with our curated assignments designed to challenge and grow your skills.</p>
      </header>

      <main className="assignments-content">
        <section className="assignments-intro">
          <h2>Why Assignments Matter</h2>
          <p>
            Assignments are an integral part of learning. They provide a hands-on approach to applying concepts
            and help you build confidence in tackling real-world problems.
          </p>
        </section>

        <section className="assignments-list">
          <h2>Available Assignments</h2>
          <div className="assignments-grid">
            {[
              'Introduction to Programming',
              'Data Structures and Algorithms',
              'Web Development Fundamentals',
              'Database Management Systems',
              'Cloud Computing Basics',
              'Machine Learning Projects',
              'AI Applications',
              'Big Data Analysis',
            ].map((assignment, index) => (
              <div key={index} className="assignment-card">
                <h3>{assignment}</h3>
                <p>Complete this assignment to enhance your skills in {assignment.toLowerCase()}.</p>
                <button className="start-button">Start Now</button>
              </div>
            ))}
          </div>
        </section>

        <section className="assignments-benefits">
          <h2>Benefits of Completing Assignments</h2>
          <ul>
            <li>Develop practical skills through real-world scenarios.</li>
            <li>Build a portfolio showcasing your projects.</li>
            <li>Gain confidence in solving technical challenges.</li>
            <li>Enhance your resume with completed projects.</li>
          </ul>
        </section>
      </main>

      <footer className="assignments-footer">
        <button onClick={handleBackClick} className="back-button">
          Back to Home
        </button>
      </footer>
    </div>
  );
};

export default Assignments;

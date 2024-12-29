import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './IndustryProjects.css';

const IndustryProjects = () => {
  const navigate = useNavigate();

  // Scroll to top when the component is mounted
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const goBack = () => {
    navigate('/'); // Redirect to the home page
  };

  return (
    <div className="industry-projects">
      <h1>Industry-Oriented Projects</h1>
      <p>
        Industry-oriented projects are designed to bridge the gap between theoretical learning and practical application. 
        By working on these projects, you'll gain hands-on experience with real-world challenges, tools, and workflows used in the industry.
      </p>
      
      <h2>Types of Projects</h2>
      <div className="project-cards">
        <div className="project-card">
          <h3>Data Analysis Projects</h3>
          <p>Work on datasets to extract insights using Python, R, or SQL.</p>
        </div>
        <div className="project-card">
          <h3>Web Development</h3>
          <p>Build responsive websites using React, Node.js, and MongoDB.</p>
        </div>
        <div className="project-card">
          <h3>AI and Machine Learning</h3>
          <p>Develop predictive models and intelligent systems with TensorFlow or PyTorch.</p>
        </div>
        <div className="project-card">
          <h3>Mobile App Development</h3>
          <p>Create native and cross-platform apps using React Native or Flutter.</p>
        </div>
      </div>
      
      <h2>Benefits of Industry Projects</h2>
      <ul>
        <li>Practical experience with real-world challenges.</li>
        <li>Exposure to industry-standard tools and technologies.</li>
        <li>Improved problem-solving and teamwork skills.</li>
        <li>A portfolio to showcase to potential employers.</li>
      </ul>
      
      <h2>Technologies You Will Use</h2>
      <div className="technologies">
        <div className="technology-card">
          <h4>Version Control</h4>
          <p>Git and GitHub</p>
        </div>
        <div className="technology-card">
          <h4>Backend Frameworks</h4>
          <p>Express.js and Django</p>
        </div>
        <div className="technology-card">
          <h4>Frontend Libraries</h4>
          <p>React and Angular</p>
        </div>
        <div className="technology-card">
          <h4>Cloud Platforms</h4>
          <p>AWS and Google Cloud</p>
        </div>
      </div>
      
      <h2>Success Stories</h2>
      <p>
        Many of our students have successfully transitioned into their dream careers after completing our industry projects. 
        Here's what some of them have to say:
      </p>
      <blockquote>
        "The industry projects gave me the confidence to tackle real-world problems. I landed a job as a full-stack developer within two months of completing the course." 
        - <em>John Doe</em>
      </blockquote>
      <blockquote>
        "Working on AI projects helped me secure a role as a data scientist. The hands-on experience was invaluable." 
        - <em>Jane Smith</em>
      </blockquote>
      
      <div className="back-button-container">
        <button onClick={goBack} className="back-button">Back to Home</button>
      </div>
    </div>
  );
};

export default IndustryProjects;

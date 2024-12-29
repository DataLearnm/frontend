import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './DataAnalysis.css';
import dataAnalysisImage from './assets/data-analysis-hero.jpg'; // Add a relevant image
import toolsImage from './assets/tools-image.jpg'; // Optional: Image of tools or charts

function DataAnalysis() {
  const navigate = useNavigate();

    // Scroll to top when the component is mounted
       useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const handleEnrollClick = () => {
      navigate('/course-enroll'); // Redirect to the Enroll Now page
    };

  return (
    <div className="data-analysis">
      {/* Hero Section */}
      <header className="data-analysis-header">
        <div className="hero-content">
          <h1>Explore Data Analysis</h1>
          <p>
            Transform raw data into actionable insights and make data-driven decisions 
            with our comprehensive Data Analysis course.
          </p>
          <button className="cta-button">Start Learning</button>
        </div>
        <img src={dataAnalysisImage}  alt="Data Analysis Hero"  className='dataAnalysisImage-image'/>
      </header>

      {/* Introduction Section */}
      <section className="introduction">
        <h2>What is Data Analysis?</h2>
        <p>
          Data Analysis involves collecting, organizing, and interpreting data to uncover patterns, 
          trends, and relationships. It is the backbone of informed decision-making in modern businesses.
        </p>
      </section>

      {/* Tools Section */}
      <section className="tools-section">
        <h2>Tools You Will Master</h2>
        <div className="tools-content">
          <ul>
            <li>Python & Pandas</li>
            <li>SQL for Data Querying</li>
            <li>Power BI & Tableau</li>
            <li>Excel for Data Manipulation</li>
            <li>Big Data Tools (Hadoop, Spark)</li>
          </ul>
          <img src={toolsImage} alt="Tools for Data Analysis" />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <h2>Why Choose This Course?</h2>
        <div className="benefits-grid">
          <div className="benefit">
            <h3>Interactive Learning</h3>
            <p>
              Gain hands-on experience with real-world datasets and projects.
            </p>
          </div>
          <div className="benefit">
            <h3>Industry Insights</h3>
            <p>
              Learn from industry experts and understand practical applications.
            </p>
          </div>
          <div className="benefit">
            <h3>Certification</h3>
            <p>
              Earn a globally recognized certification upon completion.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="call-to-action">
        <h2>Join the Data Revolution</h2>
        <p>
          Take the first step towards becoming a skilled Data Analyst. 
          Enroll today and unlock endless opportunities in data-driven industries.
        </p> 
        <button className="cta-button" onClick={handleEnrollClick}> Enroll Now </button>
      </section>
    </div>
  );
}

export default DataAnalysis;

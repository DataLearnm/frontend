import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './MachineLearning.css';
import mlHeroImage from './assets/ml-hero.jpg'; // Replace with a machine learning image
import toolsImage from './assets/ml-tools.jpg'; // Optional: ML tools image

function MachineLearning() {
  const navigate = useNavigate();

    // Scroll to top when the component is mounted
       useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const handleEnrollClick = () => {
      navigate('/course-enroll'); // Redirect to the Enroll Now page
    };

  return (
    <div className="machine-learning">
      {/* Hero Section */}
      <header className="ml-header">
        <div className="ml-hero-content">
          <h1>Master Machine Learning</h1>
          <p>
            Dive into the fascinating world of Machine Learning. Learn to build intelligent systems
            that can predict, classify, and optimize solutions across industries.
          </p>
          <button className="cta-button" onClick={handleEnrollClick}>Start Your ML Journey</button>
        </div>
        <img src={mlHeroImage} alt="Machine Learning Hero" />
      </header>

      {/* Introduction Section */}
      <section className="ml-introduction">
        <h2>What is Machine Learning?</h2>
        <p>
          Machine Learning is a branch of Artificial Intelligence that enables systems to learn from
          data and make decisions without explicit programming. It powers innovations like
          recommendation engines, autonomous vehicles, and medical diagnostics.
        </p>
      </section>

      {/* Applications Section */}
      <section className="ml-applications">
        <h2>Applications of Machine Learning</h2>
        <div className="applications-grid">
          <div className="application">
            <h3>Image Recognition</h3>
            <p>Powering facial recognition, object detection, and image classification.</p>
          </div>
          <div className="application">
            <h3>Natural Language Processing</h3>
            <p>Enabling chatbots, translation, and sentiment analysis.</p>
          </div>
          <div className="application">
            <h3>Predictive Analytics</h3>
            <p>Forecasting trends in business, finance, and healthcare.</p>
          </div>
          <div className="application">
            <h3>Autonomous Systems</h3>
            <p>Driving advancements in self-driving cars and robotics.</p>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="ml-tools">
        <h2>Tools You Will Learn</h2>
        <div className="tools-content">
          <ul>
            <li>Python (NumPy, Pandas, Scikit-learn)</li>
            <li>Deep Learning Frameworks (TensorFlow, PyTorch)</li>
            <li>Data Visualization (Matplotlib, Seaborn)</li>
            <li>Big Data (Apache Spark, Hadoop)</li>
            <li>Cloud Platforms (AWS, Google Cloud, Azure)</li>
          </ul>
          <img src={toolsImage} alt="ML Tools" />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="ml-benefits">
        <h2>Why Choose This Course?</h2>
        <div className="benefits-grid">
          <div className="benefit">
            <h3>Hands-On Projects</h3>
            <p>Work on real-world datasets to gain practical ML experience.</p>
          </div>
          <div className="benefit">
            <h3>Industry-Relevant Skills</h3>
            <p>Learn the most in-demand ML techniques used by professionals.</p>
          </div>
          <div className="benefit">
            <h3>Career Opportunities</h3>
            <p>Open doors to roles like ML Engineer, Data Scientist, and AI Specialist.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="ml-cta">
        <h2>Become a Machine Learning Expert</h2>
        <p>
          Take the first step toward a rewarding career in Machine Learning. Enroll now and start 
          building the future.
        </p>
        <button className="cta-button" onClick={handleEnrollClick}> Enroll Now </button>
      </section>
    </div>
  );
}

export default MachineLearning;

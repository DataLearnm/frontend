import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './DataScience.css';
import dataScienceImage from './assets/data-science-image.jpg'; // Add a relevant image
import dataScienceKeyFeatureImage from './assets/data-science-key-features.jpg';
import dataScienceKeyLearningOutcomesImage from './assets/data-science-learning-outcomes.jpg';
function DataScience() {
  const navigate = useNavigate();

  // Scroll to top when the component is mounted
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const handleEnrollClick = () => {
    navigate('/course-enroll'); // Redirect to the Enroll Now page
  };

  return (
    <div className="data-science">
      {/* Existing Header */}
      <header className="data-science-header">
        <h1>Master Data Science</h1>
        <p>Unleash the power of data and shape the future of technology.</p>
      </header>

      {/* New Sections Added Below */}
      <section className="about-course">
        <h2>About the Course</h2>
        <p>
          Data Science is revolutionizing the world across industries by turning raw data into actionable insights. 
          This comprehensive course is designed to equip you with the skills and knowledge to become a successful 
          Data Scientist, making you proficient in analyzing, interpreting, and visualizing data.
        </p>
      </section>

      {/* Existing Overview Section */}
      <section className="data-science-overview">
        <div className="content">
          <h2>What is Data Science?</h2>
          <p>
            Data Science is a multidisciplinary field that combines statistical 
            techniques, machine learning, and big data technologies to uncover 
            patterns, extract insights, and drive decision-making.
          </p>
        </div>
        <img src={dataScienceImage} alt="Data Science Visualization" />
      </section>

      {/* Existing Features Section */}
      <section className="course-features">
        <h2>Why Choose This Course?</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>Comprehensive Curriculum</h3>
            <p>
              Learn Python, Machine Learning, AI, Big Data, and more with hands-on projects.
            </p>
          </div>
          <div className="feature">
            <h3>Real-World Projects</h3>
            <p>
              Work on projects like predictive modeling, sentiment analysis, and big data pipelines.
            </p>
          </div>
          <div className="feature">
            <h3>Expert Mentors</h3>
            <p>
              Learn from industry professionals with 10 years of real-world experience.
            </p>
          </div>
          <div className="feature">
            <h3>Career Support</h3>
            <p>
              Get personalized mentorship, resume-building assistance, and interview preparation.
            </p>
          </div>
        </div>
      </section>

      <section className="key-features">
  <h2>Key Features</h2>
  <div className="key-features-content">
    <ul>
      <li><strong>Hands-on Projects:</strong> Gain real-world experience with data analysis and machine learning projects.</li>
      <li><strong>Expert Instructors:</strong> Learn from seasoned Data Scientists with industry experience.</li>
      <li><strong>Flexible Learning:</strong> Study at your own pace, with both live and on-demand options available.</li>
      <li><strong>Certifications:</strong> Receive a recognized certificate upon successful course completion.</li>
    </ul>
    <img src={dataScienceKeyFeatureImage} alt="Key Features Illustration" />
  </div>
</section>


      <section className="course-curriculum">
        <h2>Course Curriculum</h2>
        <ul>
          <li><strong>Module 1:</strong> Introduction to Data Science</li>
          <li><strong>Module 2:</strong> Programming for Data Science</li>
          <li><strong>Module 3:</strong> Data Visualization</li>
          <li><strong>Module 4:</strong> Statistical Analysis</li>
          <li><strong>Module 5:</strong> Machine Learning</li>
          <li><strong>Module 6:</strong> Advanced Topics in Data Science</li>
          <li><strong>Module 7:</strong> Capstone Project</li>
        </ul>
      </section>

      <section className="learning-outcomes">
        <h2>Learning Outcomes</h2>
        <p>Upon completion of this course, students will be able to:</p>
        <div className="learning-outcomes-content">
          <ul>
            <li>Understand the Data Science lifecycle from data collection to deployment.</li>
            <li>Use Python and SQL to manipulate and analyze data.</li>
            <li>Build machine learning models for classification, regression, and clustering.</li>
            <li>Visualize data effectively to communicate insights.</li>
            <li>Apply statistical methods for data analysis and hypothesis testing.</li>
          </ul>
          <img src={dataScienceKeyLearningOutcomesImage}   alt="Learning Outcomes Illustration" />
        </div>
      </section>


      <section className="career-opportunities">
        <h2>Career Opportunities After Completion</h2>
        <ul>
          <li>Data Scientist</li>
          <li>Data Analyst</li>
          <li>Machine Learning Engineer</li>
          <li>Business Intelligence Analyst</li>
          <li>Research Analyst</li>
        </ul>
      </section>



      {/* Existing Call to Action */}
      <section className="call-to-action" style={{background:'#cbe1f0'}}>
        <h2>Start Your Data Science Journey Today!</h2>
        <p>
          Join thousands of learners worldwide and become an expert in Data Science. 
          Enroll now and take the first step toward a rewarding career.
        </p>
        <button className="enroll-button" onClick={handleEnrollClick}>
          Enroll Now
        </button>
      </section>

      {/*<section className="who-should-enroll">
        <h2>Who Should Enroll?</h2>
        <ul>
          <li>Aspiring Data Scientists</li>
          <li>Professionals transitioning to data-driven roles</li>
          <li>Business Analysts looking to upgrade their skills</li>
          <li>Anyone passionate about data analysis, machine learning, and AI</li>
        </ul>
      </section>*/}

    
    </div>
  );
}

export default DataScience;

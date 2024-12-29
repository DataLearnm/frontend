import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './PlacementAssistance.css';

const PlacementAssistance = () => {
  const navigate = useNavigate();

  // Scroll to top when the component is mounted
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const handleEnrollNow = () => {
    navigate('/course-enroll');
  };

  return (
    <div className="placement-container">
      <header className="placement-header">
        <h1>Placement Assistance</h1>
        <p>
          Achieve your career aspirations with our dedicated placement support. 
          From resume building to interview preparation, we’ve got you covered.
        </p>
      </header>

      <section className="placement-overview">
        <div className="placement-description">
          <p>
            At Datalearnm, we are committed to helping our students transition smoothly from learning to employment. 
            Our placement assistance program ensures you are job-ready by providing essential guidance, resources, 
            and access to top recruiters in the industry.
          </p>
        </div>
      </section>

      <section className="placement-services">
        <h2>Our Placement Services</h2>
        <ul className="services-list">
          <li>
            <strong>Resume and LinkedIn Optimization:</strong> Craft a professional resume and LinkedIn profile to stand out.
          </li>
          <li>
            <strong>Mock Interviews:</strong> Practice real-life interview scenarios with industry experts.
          </li>
          <li>
            <strong>Job Portal Access:</strong> Get exclusive access to job opportunities curated for our students.
          </li>
          <li>
            <strong>Career Counseling:</strong> Receive one-on-one guidance to align your career goals.
          </li>
          <li>
            <strong>Networking Opportunities:</strong> Connect with industry professionals and alumni to expand your career prospects.
          </li>
        </ul>
      </section>

      <section className="placement-success">
        <h2>Success Stories</h2>
        <p>
          Hear from our students who have successfully transitioned into their dream roles with our assistance:
        </p>
        <div className="success-stories">
          <div className="story">
            <h3>John Doe</h3>
            <p>
              "Datalearnm's placement assistance helped me land my first job as a software developer at TechCorp. 
              The mock interviews and resume tips were game-changers!"
            </p>
          </div>
          <div className="story">
            <h3>Jane Smith</h3>
            <p>
              "I was able to confidently showcase my skills during interviews, thanks to the career counseling sessions. 
              I’m now a data analyst at DataVision."
            </p>
          </div>
        </div>
      </section>

      <footer className="placement-footer">
        <h2>Ready to Begin Your Career Journey?</h2>
        <p>
          Join Datalearnm today and take the first step towards achieving your professional goals.
        </p>
        <button className="btn-enroll-now" onClick={handleEnrollNow}>Enroll Now</button>
      </footer>
    </div>
  );
};

export default PlacementAssistance;

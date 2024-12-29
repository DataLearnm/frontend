import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './MockInterviews.css';

const MockInterviews = () => {
  const navigate = useNavigate();

  // Scroll to top when the component is mounted
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const handleButtonClick = () => {
    navigate('/schdule-interview');
  };

  return (
    <div className="mock-interviews">
      <section className="hero">
        <h1 style={{color:'rgb(211, 11, 11)'}}>Mock Interviews</h1>
      </section>

      <section>
        <h2>What are Mock Interviews?</h2>
        <p>
          Mock interviews are simulated job interviews that help you practice answering common interview questions
          in a safe and supportive environment. These mock sessions are conducted by industry professionals who
          provide real-time feedback and tips.
        </p>
      </section>

      <section>
        <h2 className="center-text">How It Works</h2>
        <div className="cards-container">
          <div className="card">
            <h3>Step 1: Choose Your Role</h3>
            <p>Pick a job role and industry (e.g., software engineer, data scientist, etc.).</p>
          </div>
          <div className="card" style={{marginTop:'59px'}}>
            <h3>Step 2: Schedule a Mock Interview</h3>
            <p>Schedule a mock interview at your convenience and get ready to practice.</p>
          </div>
          <div className="card">
            <h3>Step 3: Participate in the Interview</h3>
            <p>Join your interview via video call or in person and experience the real interview environment.</p>
          </div>
          <div className="card">
            <h3>Step 4: Get Feedback</h3>
            <p>Receive constructive feedback from your interviewer, with tips to improve your performance.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Why Choose Our Mock Interview Service?</h2>
        <ul>
          <li>Real-life interview experience with expert interviewers.</li>
          <li>Personalized feedback to improve your performance.</li>
          <li>Confidence-building sessions to reduce interview anxiety.</li>
          <li>Expert guidance on answering tough interview questions.</li>
        </ul>
      </section>

      <section>
        <h2>Student Success Stories</h2>
        <blockquote>
          "I took a mock interview for a data scientist role, and the feedback was invaluable! I was able to work on
          areas that I struggled with and landed my dream job!"
          <footer>- John Doe, Data Scientist</footer>
        </blockquote>
        <blockquote>
          "The mock interview sessions helped me boost my confidence and ace the real interview. Highly recommend this
          service!"
          <footer>- Jane Smith, Software Engineer</footer>
        </blockquote>
      </section>

      <section>
        <h2 style={{paddingTop:'70px'}}>Sign Up Today!</h2>
        <p>
          Don’t wait until the last minute! Sign up for a mock interview session now and get one step closer to your dream
          job. Click below to schedule your session:
        </p>
        <button className="btn-sign-up" onClick={handleButtonClick}>
          Schedule Your Mock Interview
        </button>
      </section>
    </div>
  );
};

export default MockInterviews;

import React,{useEffect} from "react";
import "./PlacementPage.css";
import { useNavigate } from 'react-router-dom';

import citi from './assets/citi.png'
import KPIT from './assets/KPIT.png'
import newgen from './assets/newgen.png'
import PIO from './assets/PIO.png'
import std1 from './assets/std1.png';
import std2 from './assets/std2.png';
import std3 from './assets/std3.png';
import std4 from './assets/std4.png';



const PlacementPage = () => {
    const navigate = useNavigate();

    // Scroll to top when the component is mounted
       useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  const handleEnrollClick = () => {
    navigate('/course-enroll'); // Redirect to the Enroll Now page
  };

  return (
    <div className="placement-page">
      <header className="placement-header">
        <h1>Our Placement Achievements</h1>
        <p>Empowering Careers with Top Placements</p>
      </header>

      <section className="placement-stats">
        <div className="stat-card">
          <h2>95%</h2>
          <p>Placement Rate</p>
        </div>
        <div className="stat-card">
          <h2>150+</h2>
          <p>Recruiting Companies</p>
        </div>
        <div className="stat-card">
          <h2>30 LPA</h2>
          <p>Highest Package</p>
        </div>
        <div className="stat-card">
          <h2>5K+</h2>
          <p>Students Placed</p>
        </div>
      </section>

      <section className="placement-partners">
        <h2>Our Recruitment Partners</h2>
        <div className="partners-logos">
          <img src={citi} alt="Company 1" />
          <img src={KPIT} alt="Company 2" />
          <img src={newgen} alt="Company 3" />
          <img src={PIO} alt="Company 4" />
        </div>
      </section>

      <section className="placed-students">
        <h2>Meet Our Placed Students</h2>
        <div className="students-gallery">
          <div className="student-card">
            <img src={std1} alt="John Doe" className="student-photo" />
            <h3>John Doe</h3>
            <p>Placed at Google</p>
          </div>
          <div className="student-card">
            <img src={std2} alt="Jane Smith" className="student-photo" />
            <h3>Jane Smith</h3>
            <p>Placed at Microsoft</p>
          </div>
          <div className="student-card">
            <img src={std3} alt="Alex Johnson" className="student-photo" />
            <h3>Alex Johnson</h3>
            <p>Placed at Amazon</p>
          </div>
          <div className="student-card">
            <img src={std4} alt="Emily Davis" className="student-photo" />
            <h3>Emily Davis</h3>
            <p>Placed at Facebook</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Students Say</h2>
        <div className="testimonial-card">
          <p>
            "Joining this institute was the best decision of my life. The
            placement support was incredible, and I got my dream job at a
            leading MNC."
          </p>
          <h3>- John Doe</h3>
        </div>
        <div className="testimonial-card">
          <p>
            "The training and guidance provided by the faculty were exceptional.
            I secured a high-paying job thanks to their support!"
          </p>
          <h3>- Jane Smith</h3>
        </div>
      </section>

      <footer className="placement-footer">
        <h2>Take the First Step Towards Your Dream Career</h2>
        <button className="enroll-button"  onClick={handleEnrollClick}>Enroll Now</button>
      </footer>
    </div>
  );
};

export default PlacementPage;

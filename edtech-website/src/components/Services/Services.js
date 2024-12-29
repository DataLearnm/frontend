import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import image1 from "./Images/image1.jpg";
import image2 from "./Images/image2.jpg";
import image3 from "./Images/image3.jpg";
import image4 from "./Images/image4.jpg";
import image5 from "./Images/image5.jpg";

const Services = () => {

  // Scroll to top when the component is mounted
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="service-page">
      <section className="hero">
        <div className="hero-content">
          
          <h1>Our Services</h1>
          <p>Achieve your career goals with us! Learn, Grow, and Succeed.</p>
        </div>
      </section>

      <section className="services">
        <h2>What We Do</h2>
        <div className="services-list">
          <div className="service-item">
            <img
              src={image1}
              alt="Online Live Sessions"
              className="service-img"
            />
            <div className="service-content">
              <h3>Online Live Sessions</h3>
              <p>
                We provide over 150+ hours of interactive live sessions with
                experienced instructors.
              </p>
            </div>
            <div className="service-button">
              <Link to="/services/online-live-sessions">
                <button className="btn-read-more">Read More</button>
              </Link>
            </div>
          </div>
          <div className="service-item">
            <img
              src={image2}
              alt="Assignments on Each Topic"
              className="service-img"
            />
            <div className="service-content">
              <h3>Assignments on Each Topic</h3>
              <p>
                Assignments to reinforce learning for every concept covered.
              </p>
            </div>
            <div className="service-button">
              <Link to="/services/assignments">
                <button className="btn-read-more">Read More</button>
              </Link>
            </div>
          </div>
          <div className="service-item">
            <img src={image3} alt="Mock Interviews" className="service-img" />
            <div className="service-content">
              <h3>Mock Interviews</h3>
              <p>
                Practice with mock interviews to prepare for real job
                interviews.
              </p>
            </div>
            <div className="service-button">
              <Link to="/services/mock-interviews">
                <button className="btn-read-more">Read More</button>
              </Link>
            </div>
          </div>
          <div className="service-item">
            <img
              src={image4}
              alt="Industry-Oriented Projects"
              className="service-img"
            />
            <div className="service-content">
              <h3>Industry-Oriented Projects</h3>
              <p>
                Work on industry-standard projects to boost your practical
                knowledge.
              </p>
            </div>
            <div className="service-button">
              <Link to="/services/industry-projects">
                <button className="btn-read-more">Read More</button>
              </Link>
            </div>
          </div>
          <div className="service-item">
            <img
              src={image5}
              alt="Placement Assistance"
              className="service-img"
            />
            <div className="service-content">
              <h3>Placement Assistance</h3>
              <p>
                Connect with companies and get assistance in landing your dream
                job.
              </p>
            </div>
            <div className="service-button">
              <Link to="/services/placement-assistence">
                <button className="btn-read-more">Read More</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

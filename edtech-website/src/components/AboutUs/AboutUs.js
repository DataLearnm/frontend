import React,{useEffect} from "react";
import "./AboutUs.css";
import { useNavigate } from "react-router-dom";
import Image1 from './assets/image1.jpg';
import Image2 from './assets/image2.jpg';
import Image3 from './assets/image3.jpg';
function AboutUs() {
  const navigate = useNavigate();

  // Scroll to top when the component is mounted
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const handleContactClick = () => {
    navigate("/contact-us");
  };

  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="about-us-hero">
        <h1>About Us</h1>
        <p style={{textAlign:'left'}}>
        Welcome to Datalearnm, your gateway to mastering the world of data science! At Datalearnm, we empower individuals with the skills and knowledge to excel in today’s data-driven landscape. Whether you are launching your career or advancing your expertise, our programs are designed to guide you every step of the way.<br/>

        We offer world-class training programs tailored for aspiring data scientists, data analysts, and machine learning engineers. Our comprehensive curriculum covers key areas such as data analysis, machine learning, artificial intelligence, big data technologies, and statistical modeling. With hands-on experience using industry-standard tools like Python, SQL, Machine Learning, Deep Learning, and Generative AI, our learners gain real-world expertise to tackle complex data challenges.
        </p><br/>
        <h2 style={{textAlign:'left',color:'rgb(246, 24, 61)'}}>What Sets Us Apart?</h2>
        <p style={{textAlign:'left'}}><b>Experienced Instructors:</b> Learn from industry professionals with a wealth of   real-world experience.<br/><br/>

          <b>Practical Learning: </b>Work on real-world projects to develop skills in data manipulation, visualization, and predictive modeling.<br/><br/>
        
          <b>Personalized Mentorship:</b>Benefit from one-on-one mentorship tailored to your learning needs and career aspirations.<br/><br/>

          <b>Career Support:</b> From interview preparation to job placement assistance, we ensure you're ready to join top tech companies.<br/><br/>

          <b>Flexible Learning:</b> Choose from online or in-person courses to fit your schedule, wherever you are in the world.<br/><br/>

          At Datalearnm, we are committed to bridging the gap between knowledge and opportunity. Our mission is to empower you with the tools and confidence to thrive in the rapidly evolving field of data science.

          Join us today and take your first step toward a rewarding and impactful career in the world of data.

        </p>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          To inspire and empower individuals by providing cutting-edge training,
          tools, and resources to succeed in the ever-evolving digital world.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="story-section">
        <h2>Our Story</h2>
        <p>
          Founded in 2024, we started with a vision to bridge the gap between
          technology and education. Over the years, we have grown into a global
          community of learners, innovators, and industry leaders committed to
          creating a positive impact in the world.
        </p>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <h2>Our Achievements</h2>
        <div className="achievements-grid">
          <div className="achievement">
            <h3>100+</h3>
            <p>Students Trained</p>
          </div>
          <div className="achievement">
            <h3>10+</h3>
            <p>Industry Partnerships</p>
          </div>
          <div className="achievement">
            <h3>2</h3>
            <p>Countries Served</p>
          </div>
          <div className="achievement">
            <h3>100%</h3>
            <p>Client Satisfaction</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src={Image1} alt="Team Member 1" />
            <h3>Chandra Shekhar</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src={Image3} alt="Team Member 2" />
            <h3>Madhavi</h3>
            <p>CTO</p>
          </div>
          <div className="team-member">
            <img src={Image2} alt="Team Member 3" />
            <h3>Mayur Salunke</h3>
            <p>Lead Developer</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Join Us in Our Journey</h2>
        <p>
          Be a part of our mission to drive innovation, education, and
          empowerment worldwide.
        </p>
        <button className="cta-button" onClick={handleContactClick}> Contact Us </button>
      </section>
    </div>
  );
}

export default AboutUs;

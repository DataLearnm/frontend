import React,{useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import "./CloudComputing.css";
import heroImage from "./assets/cloud-computing-hero.jpg"; // Replace with an appropriate hero image
import cloudBenefitsImage from "./assets/cloud-benefits.jpg"; // Replace with a benefits image

function CloudComputing() {
    const navigate = useNavigate();

    // Scroll to top when the component is mounted
       useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const handleEnrollClick = () => {
      navigate('/course-enroll'); // Redirect to the Enroll Now page
    };

  return (
    <div className="cloud-computing-page">
      {/* Hero Section */}
      <header className="cloud-computing-hero">
        <div className="hero-content">
          <h1>Welcome to the World of Cloud Computing</h1>
          <p>
            Revolutionizing how businesses and individuals access, store, and manage data.
            Discover the power of scalable, secure, and cost-effective cloud solutions.
          </p>
          <button className="cta-button" onClick={handleEnrollClick}>Start Your Cloud Computing Journey</button>
        </div>
        <img src={heroImage} alt="Cloud Computing"/>
      </header>

      {/* Introduction Section */}
      <section className="introduction">
        <h2>What is Cloud Computing?</h2>
        <p>
          Cloud computing is the delivery of computing services—including servers, storage, databases, networking,
          software, and more—over the internet ("the cloud"). It offers faster innovation, flexible resources,
          and economies of scale.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <h2>Why Choose Cloud Computing?</h2>
        <div className="benefits-grid">
          <div className="benefit">
            <h3>Scalability</h3>
            <p>Easily scale your infrastructure up or down based on your needs without investing in physical hardware.</p>
          </div>
          <div className="benefit">
            <h3>Cost Efficiency</h3>
            <p>Pay only for the resources you use, reducing upfront costs and optimizing budgets.</p>
          </div>
          <div className="benefit">
            <h3>Accessibility</h3>
            <p>Access your data and applications anytime, anywhere, on any device with internet connectivity.</p>
          </div>
          <div className="benefit">
            <h3>Security</h3>
            <p>Cloud providers offer advanced security measures to protect your data and ensure compliance.</p>
          </div>
        </div>
        <img src={cloudBenefitsImage} alt="Benefits of Cloud Computing" />
      </section>

      {/* Key Services Section */}
      <section className="services">
        <h2>Core Cloud Computing Services</h2>
        <div className="services-grid">
          <div className="service">
            <h3>Infrastructure as a Service (IaaS)</h3>
            <p>Rent virtual servers and storage on-demand for hosting and managing your applications.</p>
          </div>
          <div className="service">
            <h3>Platform as a Service (PaaS)</h3>
            <p>Access tools and platforms to develop, test, and deploy applications efficiently.</p>
          </div>
          <div className="service">
            <h3>Software as a Service (SaaS)</h3>
            <p>Use cloud-based software like Google Workspace, Microsoft 365, or Salesforce directly over the web.</p>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="use-cases">
        <h2>Applications of Cloud Computing</h2>
        <div className="use-cases-grid">
          <div className="use-case">
            <h3>Data Storage and Backup</h3>
            <p>Store and back up large volumes of data securely and cost-effectively.</p>
          </div>
          <div className="use-case">
            <h3>Big Data Analytics</h3>
            <p>Analyze massive datasets using scalable cloud resources and powerful tools.</p>
          </div>
          <div className="use-case">
            <h3>Web Hosting</h3>
            <p>Host websites and web applications with reliable uptime and scalability.</p>
          </div>
          <div className="use-case">
            <h3>AI and Machine Learning</h3>
            <p>Train and deploy machine learning models with high computational efficiency.</p>
          </div>
        </div>
      </section>

      {/* Future of Cloud Computing */}
      <section className="future">
        <h2>The Future of Cloud Computing</h2>
        <p>
          Cloud computing continues to evolve, with advancements in edge computing, AI integration, and quantum
          computing on the horizon. Businesses are increasingly adopting hybrid and multi-cloud strategies to
          optimize operations.
        </p>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta">
        <h2>Ready to Embrace Cloud Computing?</h2>
        <p>Join millions of users and businesses leveraging the power of the cloud. Get started today!</p>
        <button className="cta-button" onClick={handleEnrollClick}> Enroll Now </button>
      </section>
    </div>
  );
}

export default CloudComputing;

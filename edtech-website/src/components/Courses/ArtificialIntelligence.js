import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './ArtificialIntelligence.css';
import aiHeroImage from './assets/ai-hero.jpg'; // Replace with an AI hero image
import aiToolsImage from './assets/ai-tools.jpg'; // Optional: AI tools image

function ArtificialIntelligence() {
  const navigate = useNavigate();

  // Scroll to top when the component is mounted
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const handleEnrollClick = () => {
    navigate('/course-enroll'); // Redirect to the Enroll Now page
  };

  return (
    <div className="ai-page">
      {/* Hero Section */}
      <header className="ai-header">
        <div className="ai-hero-content">
          <h1>Unleash the Power of Artificial Intelligence</h1>
          <p>
            Dive into the world of AI, where intelligent systems mimic human behavior and revolutionize industries.
            Master the techniques behind AI-driven innovations that are shaping the future.
          </p>
          <button className="cta-button" onClick={handleEnrollClick}>Start Your AI Journey</button>
        </div>
        <img src={aiHeroImage} alt="Artificial Intelligence Hero" />
      </header>

      {/* Introduction Section */}
      <section className="ai-introduction">
        <h2>What is Artificial Intelligence?</h2>
        <p>
          Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed
          to think, learn, and solve problems like a human. AI is transforming industries like healthcare, finance,
          manufacturing, and entertainment.
        </p>
      </section>

      {/* Applications Section */}
      <section className="ai-applications">
        <h2>Applications of AI</h2>
        <div className="applications-grid">
          <div className="application">
            <h3>Healthcare</h3>
            <p>AI algorithms assist in diagnosing diseases, personalizing treatment plans, and analyzing medical data.</p>
          </div>
          <div className="application">
            <h3>Finance</h3>
            <p>AI-powered tools enable fraud detection, algorithmic trading, and personalized banking services.</p>
          </div>
          <div className="application">
            <h3>Autonomous Vehicles</h3>
            <p>Self-driving cars use AI to interpret data from sensors and make real-time driving decisions.</p>
          </div>
          <div className="application">
            <h3>Customer Service</h3>
            <p>AI chatbots and virtual assistants are enhancing customer experience across various platforms.</p>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="ai-tools">
        <h2>Tools and Technologies You Will Learn</h2>
        <div className="tools-content">
          <ul>
            <li>Python (TensorFlow, Keras, PyTorch)</li>
            <li>Data Science Libraries (NumPy, Pandas, Scikit-learn)</li>
            <li>Deep Learning (CNN, RNN, GANs)</li>
            <li>Natural Language Processing (NLTK, SpaCy)</li>
            <li>Reinforcement Learning</li>
            <li>Cloud Platforms (AWS, Azure, Google Cloud)</li>
          </ul>
          <img src={aiToolsImage} alt="AI Tools" />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="ai-benefits">
        <h2>Why Choose AI?</h2>
        <div className="benefits-grid">
          <div className="benefit">
            <h3>Cutting-Edge Knowledge</h3>
            <p>Stay ahead of the curve with the latest advancements in AI research and industry applications.</p>
          </div>
          <div className="benefit">
            <h3>Real-World Projects</h3>
            <p>Work on projects that mimic real-life AI challenges and showcase your skills to potential employers.</p>
          </div>
          <div className="benefit">
            <h3>High Demand Career</h3>
            <p>AI professionals are in high demand across various sectors, offering excellent career opportunities.</p>
          </div>
        </div>
      </section>

      {/* Future of AI Section */}
      <section className="ai-future">
        <h2>The Future of Artificial Intelligence</h2>
        <p>
          The future of AI is filled with groundbreaking advancements, from enhanced machine learning models
          to the integration of AI in everyday products. AI has the potential to revolutionize every industry,
          creating endless possibilities for innovation and societal impact.
        </p>
      </section>

      {/* Call-to-Action Section */}
      <section className="ai-cta">
        <h2>Start Your AI Journey Today</h2>
        <p>
          Join the AI revolution and develop the skills needed to succeed in this rapidly evolving field.
        </p>
        <button className="cta-button" onClick={handleEnrollClick}> Enroll Now </button>
      </section>
    </div>
  );
}

export default ArtificialIntelligence;

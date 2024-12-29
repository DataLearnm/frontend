import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './GenerativeAI.css';
import generativeAIHeroImage from './assets/generative-ai-hero.jpg'; // Replace with generative AI hero image
import generativeAIExamplesImage from './assets/generative-ai-examples.jpg'; // Optional: Image showing AI-generated art, text, etc.

function GenerativeAI() {
  const navigate = useNavigate();

    // Scroll to top when the component is mounted
       useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const handleEnrollClick = () => {
      navigate('/course-enroll'); // Redirect to the Enroll Now page
    };

  return (
    <div className="generative-ai-page">
      {/* Hero Section */}
      <header className="generative-ai-header">
        <div className="generative-ai-hero-content">
          <h1>The Future of Creativity: Generative AI</h1>
          <p>
            Explore the world of Generative AI, where machines create original content such as art, music, code, and
            even entire virtual worlds. Unlock the potential of this groundbreaking technology.
          </p>
          <button className="cta-button" onClick={handleEnrollClick}>Start Your Generative AI Journey</button>
        </div>
        <img src={generativeAIHeroImage} alt="Generative AI" />
      </header>

      {/* Introduction Section */}
      <section className="generative-ai-introduction">
        <h2>What is Generative AI?</h2>
        <p>
          Generative AI refers to AI systems that generate content such as images, text, music, and even code.
          Using models like GANs (Generative Adversarial Networks), VAEs (Variational Autoencoders), and transformers,
          these algorithms learn from data and create new, unseen outputs that resemble the training data.
        </p>
      </section>

      {/* Key Models Section */}
      <section className="generative-ai-models">
        <h2>Key Models in Generative AI</h2>
        <div className="models-grid">
          <div className="model">
            <h3>GANs (Generative Adversarial Networks)</h3>
            <p>GANs are used to generate highly realistic images, videos, and even 3D models. Two networks—a generator and a discriminator—work together to create convincing outputs.</p>
          </div>
          <div className="model">
            <h3>VAEs (Variational Autoencoders)</h3>
            <p>VAEs are used for generating new data by learning the distribution of the data and generating variations of it, making them ideal for tasks like image generation.</p>
          </div>
          <div className="model">
            <h3>Transformers (GPT, DALL·E, etc.)</h3>
            <p>Transformers are used in natural language processing and can generate coherent text, summaries, translations, and even creative writing. DALL·E is used to generate images from textual descriptions.</p>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="generative-ai-applications">
        <h2>Applications of Generative AI</h2>
        <div className="applications-grid">
          <div className="application">
            <h3>Creative Arts</h3>
            <p>Generative AI is revolutionizing the art world by creating stunning visuals, music, and even literature. AI-generated art and compositions are gaining recognition in galleries and concert halls.</p>
          </div>
          <div className="application">
            <h3>AI in Design</h3>
            <p>Generative AI tools like DALL·E and Runway are empowering designers to create new concepts, illustrations, and prototypes effortlessly. It’s transforming industries from fashion to architecture.</p>
          </div>
          <div className="application">
            <h3>Code Generation</h3>
            <p>Generative AI models like GitHub Copilot are being used by developers to write code, automate debugging, and even generate documentation. They increase productivity and creativity in software development.</p>
          </div>
          <div className="application">
            <h3>Content Creation</h3>
            <p>From blogs to ad copy and social media posts, generative AI can assist in creating high-quality content quickly, improving marketing strategies and reducing costs.</p>
          </div>
        </div>
      </section>

      {/* Example Section */}
      <section className="generative-ai-examples">
        <h2>Generative AI in Action</h2>
        <p>Here are some examples of AI-generated art and text to inspire your imagination:</p>
        <img src={generativeAIExamplesImage} alt="Generative AI Examples" />
      </section>

      {/* Tools and Technologies Section */}
      <section className="generative-ai-tools">
        <h2>Tools and Technologies You’ll Use</h2>
        <div className="tools-content">
          <ul>
            <li>TensorFlow & PyTorch</li>
            <li>GPT-3, GPT-4 (OpenAI)</li>
            <li>DALL·E (OpenAI)</li>
            <li>Runway ML</li>
            <li>Google Magenta</li>
            <li>DeepArt.io</li>
          </ul>
          <img src={generativeAIExamplesImage} alt="Generative AI Tools" style={{paddingRight:'100px'}}/>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="generative-ai-benefits">
        <h2>Why Learn Generative AI?</h2>
        <div className="benefits-grid">
          <div className="benefit">
            <h3>Endless Creativity</h3>
            <p>Generative AI opens up new avenues for creativity, enabling you to produce unique art, music, and text that pushes the boundaries of human imagination.</p>
          </div>
          <div className="benefit">
            <h3>Career Growth</h3>
            <p>With the rise of AI in creative industries, there is a growing demand for professionals who understand how to use generative models for real-world applications.</p>
          </div>
          <div className="benefit">
            <h3>Personal Projects</h3>
            <p>Generative AI gives you the power to create and experiment with new ideas for personal projects, be it art, music, or even AI-generated stories.</p>
          </div>
        </div>
      </section>

      {/* Future of Generative AI Section */}
      <section className="generative-ai-future">
        <h2>The Future of Generative AI</h2>
        <p>
          The future of Generative AI is promising. We’re already seeing deep integration of generative models in entertainment, content creation, and business. As the technology evolves, we can expect more realistic, ethical, and context-aware generative tools.
        </p>
      </section>

      {/* Call-to-Action Section */}
      <section className="generative-ai-cta">
        <h2>Begin Your Generative AI Journey</h2>
        <p>
          Join the revolution and learn how to harness the power of Generative AI. From creative industries to software development, this technology is reshaping the world.
        </p>
        <button className="cta-button" onClick={handleEnrollClick}> Enroll Now </button>
      </section>
    </div>
  );
}

export default GenerativeAI;

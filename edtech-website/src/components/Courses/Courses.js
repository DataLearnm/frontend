import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import "./Courses.css";
import DataAnalysis from "./course page image/data analysis.png";
import MachineLearning from "./course page image/machine learning.png";
import ai from "./course page image/ai.png";
import CloudComputing from "./course page image/cloud computing.png";
import GenerativeAI from "./course page image/generative ai.png";
import WebDevelopment from "./course page image/web development.png";
import DataScience from "./course page image/data science.png";
import heroImage from "./course page image/background image.png";

const Courses = () => {

  // Scroll to top when the component is mounted
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="courses-page">
    <section
  className="hero"
  style={{
    backgroundImage: `url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh', // Adjust height as needed
    color: '#fff', // Optional: Set text color for better contrast
  }}
>
  <div className="hero-content">
    <h1>Our Courses</h1>
    <p>Explore our range of courses and enhance your skills today!</p>
  </div>
</section>

      <section className="courses">
        <h2>What We Offer</h2>
        <div className="courses-list">
          <div className="course-item">
            <img
              src={DataAnalysis}
              alt="Data Analysis"
              className="course-img"
            />
            <div className="course-content">
              <h3>Data Analysis</h3>
              <p>
                Master tools like Excel, SQL, and Tableau to analyze and
                interpret data effectively.
              </p>
            </div>
            <div className="course-button">
              <Link to="/courses/data-analysis">
                <button className="btn-read-more">Read More</button>
              </Link>
            </div>
          </div>

          <div className="course-item">
            <img
              src={MachineLearning}
              alt="Machine Learning"
              className="course-img"
            />
            <div className="course-content">
              <h3>Machine Learning</h3>
              <p>
                Understand algorithms and build models using Python, TensorFlow,
                and scikit-learn.
              </p>
            </div>
            <div className="course-button">
              <Link to="/courses/machine-learning">
                <button className="btn-read-more">Read More</button>
              </Link>
            </div>
          </div>

          <div className="course-item">
            <img
              src={ai}
              alt="Artificial Intelligence"
              className="course-img"
            />
            <div className="course-content">
              <h3>Artificial Intelligence</h3>
              <p>
                Dive into AI concepts, including neural networks, natural
                language processing, and computer vision.
              </p>
            </div>
            <div className="course-button">
              <Link to="/courses/artificial-intelligence">
                <button className="btn-read-more">Read More</button>
              </Link>
            </div>
          </div>

          <div className="course-item">
            <img
              src={CloudComputing}
              alt="Cloud Computing"
              className="course-img"
            />
            <div className="course-content">
              <h3>Cloud Computing</h3>
              <p>
                Learn cloud platforms like AWS, Azure, and Google Cloud to
                design and deploy scalable applications.
              </p>
            </div>
            <div className="course-button">
              <Link to="/courses/cloud-computing">
                <button className="btn-read-more">Read More</button>
              </Link>
            </div>
          </div>

          <div className="course-item">
            <img
              src={GenerativeAI}
              alt="Generative AI"
              className="course-img"
            />
            <div className="course-content">
              <h3>Generative AI</h3>
              <p>
                Explore cutting-edge technologies like ChatGPT, Stable
                Diffusion, and DALL·E to create AI-driven content.
              </p>
            </div>
            <div className="course-button">
              <Link to="/courses/generative-ai">
                <button className="btn-read-more">Read More</button>
              </Link>
            </div>
          </div>
          <div className="course-item">
          <img
            src={WebDevelopment}
            alt="Web Development"
            className="course-img"
          />
          <div className="course-content">
            <h3>Web Development</h3>
            <p>
              Learn HTML, CSS, JavaScript, and frameworks like React and
              Angular.
            </p>
          </div>
          <div className="course-button">
            <Link to="/courses/web-development">
              <button className="btn-read-more">Read More</button>
            </Link>
          </div>
        </div>
        
        <div className="course-item">
        <img
          src={DataScience}
          alt="Data Science"
          className="course-img"
        />
        <div className="course-content">
          <h3>Data Science</h3>
          <p>
            Dive into data manipulation, visualization, and predictive
            modeling with Python, R, and tools like Pandas and Matplotlib.
          </p>
        </div>
        <div className="course-button">
          <Link to="/courses/data-science">
            <button className="btn-read-more">Read More</button>
          </Link>
        </div>
      </div>

        </div>
      </section>
    </div>
  );
};

export default Courses;

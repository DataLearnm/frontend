import React,{useEffect} from 'react'
import './JoinUs.css';
import { useNavigate } from "react-router-dom";

export default function JoinUs() {
    const navigate = useNavigate();

    // Scroll to top when the component is mounted
       useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  const handleContactClick = () => {
    navigate("/contact-us");
  };
  return (
    <div>
    <section className="cta-section">
    <h2>Join Us in Our Journey</h2>
    <p>
      Be a part of our mission to drive innovation, education, and
      empowerment worldwide.
    </p>
    <button className="cta-button" onClick={handleContactClick}> Contact Us </button>
  </section>
    </div>
  )
}

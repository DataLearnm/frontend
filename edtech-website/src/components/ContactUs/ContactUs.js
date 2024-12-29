import React, { useState,useEffect } from "react";
import "./ContactUs.css";

function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Scroll to top when the component is mounted
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('http://localhost:5000/contactdata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('Your message has been submitted successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        setSubmitStatus('Failed to submit message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-us-page">
      {/* Header Section */}
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We’re here to help. Reach out to us for any inquiries or support.</p>
      </header>

      {/* Contact Information Section */}
      <section className="contact-info">
        <div className="info-item">
          <h3>📍 Address</h3>
          <p>Ridhi Siddhi Heights, Bhausaheb Kalate Nagar, Wakad, Pune 411057</p>
        </div>
        <div className="info-item">
          <h3>📞 Phone</h3>
          <p>
            <a href="tel:+919021125455" style={{ textDecoration: 'none', color: 'inherit' }}>
              +91 (902) 112-5455
            </a>
          </p>
        </div>
        <div className="info-item">
          <h3>📧 Email</h3>
          <p>
            <a href="mailto:datalearnm@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
              datalearnm@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <h2>Send Us a Message</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
        {submitStatus && <p className="submit-status">{submitStatus}</p>}
      </section>

      {/* Google Map Section */}
      <section className="map-section">
        <h2>Our Location</h2>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345090516!2d73.7650708!3d18.5954207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9b6eac57ffb%3A0xb0061530aa4134db!2sRiddhi%20Siddhi%20Heights%2C%20Bhausaheb%20Kalate%20Nagar%2C%20Wakad%2C%20Pune%20411057!5e0!3m2!1sen!2sin!4v1615992808254!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}

export default ContactUs;

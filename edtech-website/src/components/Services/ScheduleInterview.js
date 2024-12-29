import React, { useState,useEffect } from 'react';
import './ScheduleInterview.css';

const ScheduleInterview = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    date: '',
    time: '',
    message: '',
  });

  // Scroll to top when the component is mounted
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);


  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.role || !formData.date || !formData.time) {
      setError('All fields are required');
      setSuccess('');
    } else {
      setError('');

      try {
        const response = await fetch('http://localhost:5000/schedule-interview', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSuccess('Interview scheduled successfully!');
          setFormData({
            name: '',
            email: '',
            role: '',
            date: '',
            time: '',
            message: '',
          });
        } else {
          setError('Failed to schedule interview. Please try again.');
        }
      } catch (err) {
        console.error('Error scheduling interview:', err);
        setError('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="schedule-interview">
      <div className="schedule-header">
        <h1>Schedule Your Interview</h1>
        <p>Fill out the form below to book your interview with us.</p>
      </div>

      <form onSubmit={handleSubmit} className="schedule-form">
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        <div className="form-field">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Full Name"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email Address"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="role">Desired Role</label>
          <input
            type="text"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="e.g., Software Engineer"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="date">Interview Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="time">Interview Time</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="message">Message (Optional)</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Any additional information?"
          />
        </div>

        <button type="submit" className="submit-btn">Schedule Interview</button>
      </form>
    </div>
  );
};

export default ScheduleInterview;

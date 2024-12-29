import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./InterviewFormPage.css";

const InterviewFormPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    interviewTime: "",
    message: "",
  });

  const navigate = useNavigate();

  // Scroll to top when the component is mounted
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    navigate("/thank-you");
  };

  return (
    <div className="interview-form-page">
      <h1>Schedule Your Mock Interview</h1>
      <form onSubmit={handleSubmit} className="schedule-form">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="role">Job Role</label>
        <input
          type="text"
          id="role"
          name="role"
          value={formData.role}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="interviewTime">Preferred Interview Date & Time</label>
        <input
          type="datetime-local"
          id="interviewTime"
          name="interviewTime"
          value={formData.interviewTime}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="message">Message (Optional)</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
        />

        <button type="submit" className="btn-submit">Submit</button>
      </form>
    </div>
  );
};

export default InterviewFormPage;

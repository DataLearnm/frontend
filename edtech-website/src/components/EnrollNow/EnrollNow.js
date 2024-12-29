import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './EnrollNow.css';

const EnrollNow = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courses: [], // Store selected courses as an array
    paymentMethod: 'credit-card',
    termsAccepted: false,
  });
  const [formError, setFormError] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  // Scroll to top when the component is mounted
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCourseChange = (e) => {
    const { value, checked } = e.target;

    setFormData((prevData) => {
      const courses = checked
        ? [...prevData.courses, value] // Add course if checked
        : prevData.courses.filter((course) => course !== value); // Remove course if unchecked

      return { ...prevData, courses };
    });
  };

  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      termsAccepted: checked,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple form validation
    if (!formData.name || !formData.email || !formData.phone) {
      setFormError('Please fill in all the required fields.');
      return;
    }

    if (!formData.courses.length) {
      setFormError('Please select at least one course.');
      return;
    }

    if (!formData.termsAccepted) {
      setFormError('You must accept the terms and conditions.');
      return;
    }

    // Clear error
    setFormError('');

    try {
      const response = await fetch('http://localhost:5000/enroll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          courses: formData.courses,
          paymentMethod: formData.paymentMethod,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Enrollment successful!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          courses: [],
          paymentMethod: 'credit-card',
          termsAccepted: false,
        });

        // Redirect to payment method page based on selected paymentMethod
        switch (formData.paymentMethod) {
          case 'credit-card':
            navigate('/payment/credit-card');
            break;
          case 'paypal':
            navigate('/payment/phonepe');
            break;
          case 'bank-transfer':
            navigate('/payment/bank-transfer');
            break;
          default:
            alert('Invalid payment method selected.');
        }
      } else {
        alert(result.message || 'Failed to enroll. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="enroll-now-form">
      <h2>Enroll Now</h2>

      <form onSubmit={handleSubmit}>
        {formError && <div className="error-message">{formError}</div>}

        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div className="form-group">
          <label>Select Courses:</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                value="Data Science"
                onChange={handleCourseChange}
              />
              Data Science
            </label>
            <label>
              <input
                type="checkbox"
                value="Machine Learning"
                onChange={handleCourseChange}
              />
              Machine Learning
            </label>
            <label>
              <input
                type="checkbox"
                value="Data Analysis"
                onChange={handleCourseChange}
              />
              Data Analysis
            </label>
            <label>
              <input
                type="checkbox"
                value="Cloud Computing"
                onChange={handleCourseChange}
              />
              Cloud Computing
            </label>
            <label>
              <input
                type="checkbox"
                value="Web Development"
                onChange={handleCourseChange}
              />
              Web Development
            </label>
            <label>
              <input
                type="checkbox"
                value="Generative AI"
                onChange={handleCourseChange}
              />
              Generative AI
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method:</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PhonePe</option>
            <option value="bank-transfer">Bank Transfer</option>
            <option value="card">Card</option>
          </select>
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleCheckboxChange}
            />
            I accept the <a href="/terms&condition">terms and conditions</a>.
          </label>
        </div>

        <div className="form-group">
          <button type="submit" className="submit-button">
            Enroll Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default EnrollNow;

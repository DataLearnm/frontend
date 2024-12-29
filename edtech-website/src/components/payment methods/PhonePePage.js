import React,{useEffect} from 'react';
import './PhonePePage.css';

const PhonePePage = () => {
  // Scroll to top when the component is mounted
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="payment-page">
      <h2>PhonePe Payment</h2>
      <p>Please enter your PhonePe number to complete the payment.</p>
      
      <form className="payment-form">
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="text" id="phoneNumber" placeholder="Enter your PhonePe number" required />
        </div>
        <div className="form-group">
          <button type="submit" className="submit-button">Pay Now</button>
        </div>
      </form>
    </div>
  );
};

export default PhonePePage;

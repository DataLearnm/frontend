import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./CreditCardPage.css";
import axios from "axios";

const CreditCardPage = () => {
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const navigate = useNavigate(); // Initialize useNavigate

  // Scroll to top when the component is mounted
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setCardDetails((prev) => ({ ...prev, [id]: value }));
  };

  const handlePayNow = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/payment/initiate", cardDetails);
      if (response.data.success) {
        setIsOtpSent(true);
        alert("OTP sent to your registered mobile number.");
      } else {
        alert("Failed to process payment. Please try again.");
      }
    } catch (error) {
      console.error("Error initiating payment:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/payment/verify", { otp });
      if (response.data.success) {
        alert("Transaction successful!");
        navigate("/thank-you"); // Redirect to Thank You page
      } else {
        alert("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="payment-page">
      <h2>Credit Card Payment</h2>
      <p>Please enter your credit card details below to complete the payment.</p>

      {!isOtpSent ? (
        <form className="payment-form" onSubmit={handlePayNow}>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number:</label>
            <input
              type="text"
              id="cardNumber"
              placeholder="Enter your card number"
              value={cardDetails.cardNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input
              type="text"
              id="expiryDate"
              placeholder="MM/YY"
              value={cardDetails.expiryDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV:</label>
            <input
              type="text"
              id="cvv"
              placeholder="Enter CVV"
              value={cardDetails.cvv}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" className="submit-button">Pay Now</button>
          </div>
        </form>
      ) : (
        <form className="otp-form" onSubmit={handleOtpSubmit}>
          <div className="form-group">
            <label htmlFor="otp">Enter OTP:</label>
            <input
              type="text"
              id="otp"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" className="submit-button">Confirm</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default CreditCardPage;

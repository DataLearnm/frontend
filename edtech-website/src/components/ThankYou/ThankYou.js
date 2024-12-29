import React from "react";
import "./ThankYou.css";

const ThankYou = () => {
  return (
    <div className="thank-you-page">
      <div className="thank-you-container">
        <div className="icon-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="check-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1>Thank You!</h1>
        <p>Your transaction has been completed successfully.</p>
        <p>We appreciate your business and hope to serve you again soon.</p>
        <button
          className="home-button"
          onClick={() => (window.location.href = "/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYou;

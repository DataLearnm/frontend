import React,{useEffect} from "react";
import "./ThankYouPage.css"; 

const ThankYouPage = () => {

  // Scroll to top when the component is mounted
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="thank-you-page">
      <div className="thank-you-container">
        <h1>Thank You!</h1>
        <p>Your interview request has been submitted successfully.</p>
        <div className="button-container">
          <button onClick={() => window.location.href = '/'}>Go Back to Home</button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;

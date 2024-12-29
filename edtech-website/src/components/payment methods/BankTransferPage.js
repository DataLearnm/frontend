import React,{useEffect} from 'react';
import './BankTransferPage.css';

const BankTransferPage = () => {
  // Scroll to top when the component is mounted
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="payment-page">
      <h2>Bank Transfer Payment</h2>
      <p>Please transfer the amount to the following bank details:</p>
      <div className="bank-details">
        <p><strong>Bank Name:</strong> XYZ Bank</p>
        <p><strong>Account Number:</strong> 1234567890</p>
        <p><strong>IFSC Code:</strong> XYZB0001234</p>
        <p><strong>Account Name:</strong> Payment Services</p>
      </div>
      <p>After completing the transfer, please click the button below to confirm your payment.</p>
      <div className="form-group">
        <button type="button" className="submit-button">Confirm Payment</button>
      </div>
    </div>
  );
};

export default BankTransferPage;

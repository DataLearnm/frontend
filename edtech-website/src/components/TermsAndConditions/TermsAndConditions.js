import React,{useEffect} from 'react';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
  // Scroll to top when the component is mounted
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="terms-and-conditions">
      <h1>Terms and Conditions</h1>
      <p>
        Welcome to our course enrollment platform. By enrolling in our courses, you agree to abide by the following terms and conditions. Please read them carefully before proceeding.
      </p>

      <section>
        <h2>1. Enrollment Eligibility</h2>
        <p>
          - You must be at least 18 years old or have parental/guardian consent to enroll in our courses.  
          - Ensure all information provided during enrollment is accurate and up-to-date.
        </p>
      </section>

      <section>
        <h2>2. Payment Policy</h2>
        <p>
          - All payments must be completed prior to course access.  
          - Payments are non-refundable unless specified in our refund policy.  
          - Accepted payment methods include credit card, PhonePe, and bank transfer.
        </p>
      </section>

      <section>
        <h2>3. Course Materials</h2>
        <p>
          - Course content is provided solely for personal, non-commercial use.  
          - Redistribution, sharing, or unauthorized copying of course materials is prohibited.  
          - The course content may be updated periodically to maintain relevance and quality.
        </p>
      </section>

      <section>
        <h2>4. Certification</h2>
        <p>
          - Certificates are awarded upon successful completion of the course requirements.  
          - Any certificate awarded is subject to the course's specific completion criteria.
        </p>
      </section>

      <section>
        <h2>5. User Conduct</h2>
        <p>
          - You agree to use the platform responsibly and avoid any actions that could disrupt its services.  
          - Harassment, abuse, or disrespect toward instructors, staff, or fellow learners is strictly prohibited.
        </p>
      </section>

      <section>
        <h2>6. Refund Policy</h2>
        <p>
          - Refunds are granted under exceptional circumstances as outlined in our refund policy.  
          - Requests must be submitted within 7 days of purchase and will be reviewed individually.
        </p>
      </section>

      <section>
        <h2>7. Intellectual Property</h2>
        <p>
          - All course content, including videos, slides, and quizzes, is the intellectual property of the platform or its partners.  
          - You may not reproduce, distribute, or publicly display this content without explicit permission.
        </p>
      </section>

      <section>
        <h2>8. Limitation of Liability</h2>
        <p>
          - The platform is not liable for any technical issues, interruptions, or inaccuracies in the course content.  
          - Your reliance on course content is at your own discretion.
        </p>
      </section>

      <section>
        <h2>9. Privacy Policy</h2>
        <p>
          - We are committed to protecting your personal information.  
          - Refer to our <a href="/privacy-policy">Privacy Policy</a> for details on how your data is collected, used, and stored.
        </p>
      </section>

      <section>
        <h2>10. Amendments</h2>
        <p>
          - These terms and conditions may be updated from time to time.  
          - Continued use of the platform indicates your acceptance of the revised terms.
        </p>
      </section>

      <p>
        If you have any questions regarding these terms, please contact our support team at <a href="/contact-us">Contact Us</a>.
      </p>

      <button className="accept-button">I Accept</button>
    </div>
  );
};

export default TermsAndConditions;

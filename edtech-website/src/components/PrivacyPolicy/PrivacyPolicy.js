import React,{useEffect} from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  // Scroll to top when the component is mounted
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <p>
        At <strong>DataLearnm</strong>, we are committed to safeguarding your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you interact with our services.
      </p>

      <section>
        <h2>1. Information We Collect</h2>
        <p>
          We may collect the following types of information:
        </p>
        <ul>
          <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details.</li>
          <li><strong>Usage Data:</strong> Information on how you interact with our website, such as pages visited, time spent, and navigation paths.</li>
          <li><strong>Technical Data:</strong> IP address, browser type, operating system, and device details.</li>
          <li><strong>Cookies:</strong> Data stored on your browser to enhance your browsing experience. (See our <a href="/cookie-policy">Cookie Policy</a> for more information.)</li>
        </ul>
      </section>

      <section>
        <h2>2. How We Use Your Information</h2>
        <p>
          We use your information for the following purposes:
        </p>
        <ul>
          <li>To provide and improve our services.</li>
          <li>To communicate with you regarding updates, promotions, and support.</li>
          <li>To ensure the security of our systems and prevent fraudulent activities.</li>
          <li>To comply with legal obligations.</li>
        </ul>
      </section>

      <section>
        <h2>3. Sharing Your Information</h2>
        <p>
          We do not sell your personal information. However, we may share your data in the following cases:
        </p>
        <ul>
          <li>With trusted service providers who assist in delivering our services.</li>
          <li>To comply with legal requirements or enforce our terms and policies.</li>
          <li>As part of a business merger, acquisition, or sale.</li>
        </ul>
      </section>

      <section>
        <h2>4. Your Rights</h2>
        <p>
          Depending on your location, you may have the following rights:
        </p>
        <ul>
          <li>Access: Request a copy of the personal data we hold about you.</li>
          <li>Correction: Request corrections to inaccurate or incomplete data.</li>
          <li>Deletion: Request deletion of your personal data under certain conditions.</li>
          <li>Restriction: Request limitations on how we process your data.</li>
          <li>Data Portability: Receive your personal data in a structured, machine-readable format.</li>
          <li>Objection: Opt-out of certain processing activities, such as marketing communications.</li>
        </ul>
      </section>

      <section>
        <h2>5. Data Security</h2>
        <p>
          We implement industry-standard measures to protect your personal data. However, no system is completely secure, and we encourage you to safeguard your account credentials.
        </p>
      </section>

      <section>
        <h2>6. Retention of Data</h2>
        <p>
          We retain your data only as long as necessary to fulfill the purposes outlined in this policy or as required by law.
        </p>
      </section>

      <section>
        <h2>7. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not responsible for their privacy practices, and we encourage you to review their policies before sharing your data.
        </p>
      </section>

      <section>
        <h2>8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Significant changes will be communicated via email or a notice on our website.
        </p>
      </section>

      <section>
        <h2>9. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy, please contact us at:
        </p>
        <address>
          DataLearnm<br />
          Email: <a href="mailto:info@mavintechnology.com">datalearnm@gmail.com</a><br />
          Phone: +91-9021125455
        </address>
      </section>

      <p className="last-updated">
        <em>Last Updated: November 30, 2024</em>
      </p>
    </div>
  );
};

export default PrivacyPolicy;

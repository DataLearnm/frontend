import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import MainSection from './components/MainSection/MainSection';
import './App.css';
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Courses from './components/Courses/Courses';
import Services from './components/Services/Services';
import Registration from './components/Register/Registration';
import Login from './components/Login/Login';
import DataScience from './components/Courses/DataScience';
import DataAnalysis from './components/Courses/DataAnalysis';
import MachineLearning from './components/Courses/MachineLearning';
import ArtificialIntelligence from './components/Courses/ArtificialIntelligence';
import GenerativeAI from './components/Courses/GenerativeAI';
import CloudComputing from './components/Courses/CloudComputing';
import ContactUs from './components/ContactUs/ContactUs';
import EnrollNow from './components/EnrollNow/EnrollNow';
import CreditCardPage from './components/payment methods/CreditCardPage';
import PhonePePage from './components/payment methods/PhonePePage';
import Card from './components/payment methods/Card';
import BankTransferPage from './components/payment methods/BankTransferPage';
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import OnlineLiveSessions from './components/Services/OnlineLiveSessions';
import Assignments from './components/Services/Assignments';
import MockInterviews from './components/Services/MockInterviews';
import IndustryProjects from './components/Services/IndustryProjects';
import PlacementAssistance from './components/Services/PlacementAssistance';
import ScheduleInterview from './components/Services/ScheduleInterview';
import ThankYou from './components/ThankYou/ThankYou';
import PlacementPage from './components/Placement/PlacementPage';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/services" element={<Services />} />
            <Route path="/placement" element={<PlacementPage />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/schdule-interview" element={<ScheduleInterview />} />
            <Route path="/courses/data-science" element={<DataScience />} />
            <Route path="/courses/data-analysis" element={<DataAnalysis />} />
            <Route path="/courses/machine-learning" element={<MachineLearning />} />
            <Route path="/courses/artificial-intelligence" element={<ArtificialIntelligence />} />
            <Route path="/courses/generative-ai" element={<GenerativeAI />} />
            <Route path="/courses/cloud-computing" element={<CloudComputing />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/course-enroll" element={<EnrollNow />} />
            <Route path="/terms&condition" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/payment/credit-card" element={<CreditCardPage />} />
            <Route path="/payment/phonepe" element={<PhonePePage />} />
            <Route path="/payment/bank-transfer" element={<BankTransferPage />} />
            <Route path="/payment/card" element={<Card/>} />
            <Route path="/services/online-live-sessions" element={<OnlineLiveSessions />} />
            <Route path="/services/assignments" element={<Assignments />} />
            <Route path="/services/mock-interviews" element={<MockInterviews />} />
            <Route path="/services/industry-projects" element={<IndustryProjects />} />
            <Route path="/services/placement-assistence" element={<PlacementAssistance />} />
          </Routes>
        </div>
        <Footer/> 
      </div>
    </Router>
  );
}

export default App;

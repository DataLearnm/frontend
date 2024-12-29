import React from 'react';
import './Home.css';
import MainSection from '../MainSection/MainSection';
import Services from '../Services/Services';
import Courses from '../Courses/Courses';
import JoinUs from '../JoinUs/JoinUs';

function Home() {
  return (
    <div className="home-container">
      <MainSection/>
      <Services/>
      <Courses/>
      <JoinUs/>
    </div>
  );
}

export default Home;

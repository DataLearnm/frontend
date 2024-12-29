import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import './MainSection.css'; 

import image1 from '../../assets/image1.jpg'; 
import image2 from '../../assets/image2.png'; 
import Services from '../Services/Services';

const availableCourses = [
  'Data Science',
  'Machine Learning',
  'Artificial Intelligence',
  'Cloud Computing',
  'Generative AI',
  'Data Analysis',
  'Web Development',
  'Mobile App Development'
];

const MainSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [message, setMessage] = useState('');
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate(); // Use navigate for redirection

  const handleSearch = () => {
    const matchedCourse = availableCourses.find(course => 
      course.toLowerCase() === searchQuery.toLowerCase()
    );

    if (matchedCourse) {
      // If the course is found, redirect to the respective course page
      navigate(`/courses/${matchedCourse.toLowerCase().replace(/\s+/g, '-')}`);
    } else {
      // If the course is not found, show the message
      setMessage("Please, select the course!");
    }
  };

  const handleDropdownClick = (course) => {
    setSearchQuery(course);
    setDropdownVisible(false); // Close the dropdown after selecting a course
  };

  return (
    <section className="main-section">
      <div className="content">
        <div className="text-area">
          <h1 className="main-heading">
            Unlock Your Future <br />
            <span>As Data Professional</span> <br />
            With DataLearnm
          </h1>
          <p className="description">
            Datalearnm empowers aspiring data scientists, analysts, and ML engineers with world-class training in data analysis, machine learning, AI, and big data. Gain hands-on expertise with tools like Python and SQL through real-world projects. With expert instructors, career support, and flexible learning options, Datalearnm ensures you're job-ready for top tech roles. Start your data science journey today!
          </p>
          <div className="search">
            <div className="search-box">
              <input
                type="text"
                placeholder=" 🔍 What do you want to learn?"
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setDropdownVisible(true)} // Show dropdown when input is focused
              />
              <button 
                className="dropdown-toggle" 
                onClick={() => setDropdownVisible(!isDropdownVisible)}
              >
                ⌄
              </button>
            </div>
            {isDropdownVisible && (
              <ul className="dropdown-list">
                {availableCourses.map((course, index) => (
                  <li 
                    key={index} 
                    className="dropdown-item" 
                    onClick={() => handleDropdownClick(course)}
                  >
                    {course}
                  </li>
                ))}
              </ul>
            )}
            <button className="search-button" onClick={handleSearch}>Search Course</button>
          </div>
          {message && <p className="error-message">{message}</p>}
        </div>

        <div className="image-area">
          <div className="cards">
            <div className="card">
              <img src={image1} alt="Card 1" className="card-image" />
            </div>

            <div className="card blue-card">
              <img src={image2} alt="Card 2" className="card-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;

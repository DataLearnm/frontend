import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [visibleDropdown, setVisibleDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseEnter = (dropdown) => {
    setVisibleDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setVisibleDropdown(null);
    }, 3000); // Dropdown will hide after 3 seconds
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="logo">DataLearnm</div>
      <button className="menu-toggle" onClick={toggleMenu}>
        &#9776; {/* Unicode character for hamburger menu */}
      </button>
      <ul className={`nav-links ${isMenuOpen ? "show-menu" : ""}`}>
        <li>
          <NavLink to="/" exact="true" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about-us" exact="true" activeClassName="active">
            About Us
          </NavLink>
        </li>
        <li
          className="dropdown"
          onMouseEnter={() => handleMouseEnter("services")}
          onMouseLeave={handleMouseLeave}
        >
          <NavLink to="/services" exact="true" activeClassName="active">
            Services
          </NavLink>
          {visibleDropdown === "services" && (
            <ul className="dropdown-menu-services">
              <li>
                <Link to="/services/online-live-sessions">Online Live Sessions</Link>
              </li>
              <li>
                <Link to="/services/assignments">Assignments on Each Topic</Link>
              </li>
              <li>
                <Link to="/services/mock-interviews">Mock Interviews</Link>
              </li>
              <li>
                <Link to="/services/industry-projects">Industry-Oriented Projects</Link>
              </li>
              <li>
                <Link to="/services/placement-assistence">Placement Assistance</Link>
              </li>
            </ul>
          )}
        </li>
        <li
          className="dropdown"
          onMouseEnter={() => handleMouseEnter("courses")}
          onMouseLeave={handleMouseLeave}
        >
          <NavLink to="/courses" exact="true" activeClassName="active">
            Courses
          </NavLink>
          {visibleDropdown === "courses" && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/courses/data-science">Data Science</Link>
              </li>
              <li>
                <Link to="/courses/machine-learning">Machine Learning</Link>
              </li>
              <li>
                <Link to="/courses/data-analysis">Data Analysis</Link>
              </li>
              <li>
                <Link to="/courses/artificial-intelligence">
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link to="/courses/cloud-computing">Cloud Computing</Link>
              </li>
              <li>
                <Link to="/courses/generative-ai">Generative AI</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <NavLink to="/placement" exact="true" activeClassName="active">
            Placement
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact-us" exact="true" activeClassName="active">
            Contact Us
          </NavLink>
        </li>
        <li>
          <Link to="/login">
            <button className="register-button">Login</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

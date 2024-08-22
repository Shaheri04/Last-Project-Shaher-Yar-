import React from 'react';
import './About.css'; // Import custom CSS for additional styling
import ceo from '../AboutPage/CEO.png'; // Corrected variable name and path

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Us</h1>
      <p className="section-description">
          Our mission is to provide exceptional service and quality products to our customers. We strive for excellence in every aspect of our business.
        </p>
      <div className="about-section">
        <h2 className="section-heading">Our Mission</h2>
        <p className="section-description">
          Our mission is to provide exceptional service and quality products to our customers. We strive for excellence in every aspect of our business.
        </p>
      </div>

      <div className="about-section">
        <h2 className="section-heading">Our Values</h2>
        <ul className="values-list">
          <li>Integrity</li>
          <li>Innovation</li>
          <li>Customer Satisfaction</li>
        </ul>
      </div>

      <div className="about-section">
        <h2 className="section-heading">Meet Our CEO</h2>
        <div className="team-section">
          <div className="team-member">
            <img src={ceo} alt="Shaher Yar" className="team-photo" /> {/* Corrected variable name */}
            <div className="team-info">
              <div className="team-name">Shaher Yar</div>
              <div className="team-role">CEO</div>
            </div>
          </div>
          {/* <!-- Add more team members as needed --> */}
        </div>
      </div>
    </div>
  );
};

export default About;

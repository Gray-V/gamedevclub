// src/pages/AboutPage.js
import React from 'react';
import '../App.css'; // Make sure to create an AboutPage.css file

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>About</h1>
      <p>Our clubs mission is to</p>
      <p>[Club info]</p>
      <section className="eboard-section">
        <h2>E-Board Members</h2>
        <div className="eboard-members">
          <div className="eboard-member">
            <img src="/path-to-image.jpg" alt="E-Board Member" />
            <p>President</p>
            <p>Grayson von Goetz</p>
          </div>

          <div className="eboard-member">
            <img src="/path-to-image.jpg" alt="E-Board Member" />
            <p>Vice President</p>
            <p>Matthew Lee</p>
          </div>

          <div className="eboard-member">
            <img src="/path-to-image.jpg" alt="E-Board Member" />
            <p>Treasurer</p>
            <p>Ryan Gilbert</p>
          </div>

          <div className="eboard-member">
            <img src="/path-to-image.jpg" alt="E-Board Member" />
            <p>Secretary</p>
            <p>Jacob Martinez</p>
          </div>

          <div className="eboard-member">
            <img src="/path-to-image.jpg" alt="E-Board Member" />
            <p>Community Manager</p>
            <p>Aryman Ramchandran</p>
          </div>

          <div className="eboard-member">
            <img src="/path-to-image.jpg" alt="E-Board Member" />
            <p>Social Media Manager</p>
            <p>Jerameel Mendoza</p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AboutPage;

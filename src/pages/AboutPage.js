// src/pages/AboutPage.js
import React from 'react';
import '../App.css';
import gray from '../photos/gray.png';
import matt from '../photos/matt.png';
import ryan from '../photos/ryan.png';
import jake from '../photos/jake.png';
import ary from '../photos/ary.png';
import jer from '../photos/jer.png';

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>About</h1>
      <p>Our clubs mission is to provide a safe fun space for LMU students from all backgrounds
        to explore the world of game development.</p>
      <section className="eboard-section">
        <h2>E-Board Members</h2>
        <div className="eboard-members">
          <div className="eboard-member">
            <img src={gray} alt="E-Board Member" />
            <p>President</p>
            <p>Grayson von Goetz</p>
          </div>

          <div className="eboard-member">
            <img src={matt} alt="E-Board Member" />
            <p>Vice President</p>
            <p>Matthew Lee</p>
          </div>

          <div className="eboard-member">
            <img src={ryan} alt="E-Board Member" />
            <p>Treasurer</p>
            <p>Ryan Gilbert</p>
          </div>

          <div className="eboard-member">
            <img src={jake} alt="E-Board Member" />
            <p>Secretary</p>
            <p>Jacob Martinez</p>
          </div>

          <div className="eboard-member">
            <img src={ary} alt="E-Board Member" />
            <p>Community Manager</p>
            <p>Aryman Ramchandran</p>
          </div>

          <div className="eboard-member">
            <img src={jer} alt="E-Board Member" />
            <p>Social Media Manager</p>
            <p>Jerameel Mendoza</p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AboutPage;

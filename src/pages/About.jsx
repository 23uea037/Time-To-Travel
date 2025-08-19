import React from 'react';
import { FaGlobeAmericas, FaUserFriends, FaAward } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>Our Story</h1>
          <p>Discover the journey behind TravelEase and our passion for exploration</p>
        </div>
      </section>

      <section className="about-mission">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              At TravelEase, we believe that travel should be accessible, enjoyable, and 
              transformative. Our mission is to connect people with unforgettable experiences 
              while promoting sustainable tourism practices that benefit local communities.
            </p>
          </div>
          <div className="mission-image">
            <img src="/new.jpg" alt="Our team" />
          </div>
        </div>
      </section>

      <section className="about-stats">
        <div className="container">
          <div className="stat-card">
            <FaGlobeAmericas className="stat-icon" />
            <h3>50+</h3>
            <p>Countries Covered</p>
          </div>
          <div className="stat-card">
            <FaUserFriends className="stat-icon" />
            <h3>10,000+</h3>
            <p>Happy Travelers</p>
          </div>
          <div className="stat-card">
            <FaAward className="stat-icon" />
            <h3>15</h3>
            <p>Industry Awards</p>
          </div>
        </div>
      </section>

      <section className="about-team">
        <div className="container">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            {[
              { id: 1, className: "mission-image", name: 'Ridha Nisar', role: 'Founder & CEO', image: '/ridha.jpg' },
            ].map(member => (
              <div key={member.id} className="team-member">
                <img src={member.image} alt={member.name} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%' }} />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
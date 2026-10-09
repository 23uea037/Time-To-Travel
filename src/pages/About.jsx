import React from 'react';
import { FaGlobeAmericas, FaUserFriends, FaAward, FaCompass } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container about-hero-inner">
          <div className="about-copy">
            <span className="mini-label">Our story</span>
            <h1>Travel with intention. Return with stories.</h1>
            <p>
              Time To Travel was built for people who want more than a checklist of sights.
              We design journeys that feel personal, immersive, and deeply memorable—from the first flight to the final sunset.
            </p>
          </div>

          <div className="about-visual">
            <img
              src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=900&q=80"
              alt="Travelers exploring a scenic destination"
            />
          </div>
        </div>
      </section>

      <section className="about-mission container">
        <div className="mission-panel">
          <div className="mission-copy">
            <span className="mini-label">Why we exist</span>
            <h2>Thoughtful travel for the curious and the bold.</h2>
            <p>
              We believe the best trips connect people with culture, nature, and local rhythm.
              That is why each itinerary is crafted to balance comfort, discovery, and a sense of wonder.
            </p>
            <p>
              From slow city breaks to off-the-map adventures, we help travelers move through the world with ease,
              authenticity, and confidence.
            </p>
          </div>

          <div className="mission-points">
            <div className="point-card">
              <FaCompass className="point-icon" />
              <h3>Meaningful experiences</h3>
              <p>Curated moments that go beyond the average tourist route.</p>
            </div>
            <div className="point-card">
              <FaGlobeAmericas className="point-icon" />
              <h3>Global perspective</h3>
              <p>Thoughtful access to destinations across the world.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-stats">
        <div className="container stats-grid">
          <div className="stat-card">
            <FaGlobeAmericas className="stat-icon" />
            <h3>50+</h3>
            <p>countries explored</p>
          </div>
          <div className="stat-card">
            <FaUserFriends className="stat-icon" />
            <h3>10,000+</h3>
            <p>happy travelers</p>
          </div>
          <div className="stat-card">
            <FaAward className="stat-icon" />
            <h3>15</h3>
            <p>award-winning journeys</p>
          </div>
        </div>
      </section>

      <section className="about-team container">
        <div className="section-heading">
          <div>
            <span className="mini-label">The people behind it</span>
            <h2>Meet the team</h2>
          </div>
        </div>

        <div className="team-grid">
          <div className="team-member founder-card">
            <div className="member-photo anime-photo">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80" alt="Ridha Nisar" />
            </div>
            <h3>Ridha Nisar</h3>
            <p>Founder & CEO</p>
          </div>

          <div className="team-member">
            <div className="member-photo">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=80" alt="Aisha Rahman" />
            </div>
            <h3>Aisha Rahman</h3>
            <p>Travel Director</p>
          </div>

          <div className="team-member">
            <div className="member-photo">
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=80" alt="Daniel Cruz" />
            </div>
            <h3>Daniel Cruz</h3>
            <p>Experience Curator</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
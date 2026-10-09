import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container contact-hero-inner">
          <span className="mini-label">Let’s talk travel</span>
          <h1>Craft your next unforgettable escape.</h1>
          <p>
            Tell us where you want to go, what you love to feel, and we will help shape a journey that feels distinctly yours.
          </p>
        </div>
      </section>

      <section className="contact-info container">
        <div className="info-card">
          <FaMapMarkerAlt className="info-icon" />
          <h3>Visit us</h3>
          <p>Near Avinashilingam Institution,<br />Coimbatore, Tamil Nadu, India</p>
        </div>
        <div className="info-card">
          <FaPhone className="info-icon" />
          <h3>Call us</h3>
          <p>+91 98765 43210<br />Mon–Fri, 9am–5pm</p>
        </div>
        <div className="info-card">
          <FaEnvelope className="info-icon" />
          <h3>Email</h3>
          <p>hello@timetotravel.com<br />Response within 24 hours</p>
        </div>
        <div className="info-card">
          <FaClock className="info-icon" />
          <h3>Office hours</h3>
          <p>Monday–Friday: 9am–5pm<br />Saturday: 10am–2pm</p>
        </div>
      </section>

      <section className="contact-form-section container">
        <div className="form-container">
          <h2>Send us a message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send message</button>
          </form>
        </div>

        <div className="map-container">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps?q=San%20Francisco%2C%20CA&z=12&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
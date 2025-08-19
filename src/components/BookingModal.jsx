import React, { useState } from 'react';
import { FiX, FiCalendar, FiUser, FiCreditCard } from 'react-icons/fi';

const BookingModal = ({ destination, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    travelers: 1,
    payment: 'credit'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking submission
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="booking-modal">
        <button className="close-btn" onClick={onClose}>
          <FiX />
        </button>
        
        <h2>Book Your Trip to {destination.name}</h2>
        
        <div className="price-summary">
          <h3>${destination.price} <span>per person</span></h3>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="form-group">
            <label>
              <FiCalendar /> Travel Date
            </label>
            <input 
              type="date" 
              name="date" 
              value={formData.date}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="form-group">
            <label>
              <FiUser /> Number of Travelers
            </label>
            <select 
              name="travelers" 
              value={formData.travelers}
              onChange={handleChange}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
          
          <div className="form-group">
            <label>
              <FiCreditCard /> Payment Method
            </label>
            <select 
              name="payment" 
              value={formData.payment}
              onChange={handleChange}
            >
              <option value="credit">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bank">Bank Transfer</option>
            </select>
          </div>
          
          <button type="submit" className="submit-btn">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
import React from 'react';
import { FiStar, FiMapPin, FiClock } from 'react-icons/fi';

const DestinationCard = ({ destination }) => {
  return (
    <div className="destination-card">
      <div className="card-image">
        <img src={destination.image} alt={destination.name} style={{ width: '200px', height: '200px', objectFit: 'cover' }} /> <br/>
        <span className="price">${destination.price}</span>
      </div>
      
      <div className="card-content">
        <h3>{destination.name}</h3>
        
        <div className="location">
          <FiMapPin className="icon" />
          <span>{destination.location}</span>
        </div>
        
        <div className="meta-info">
          <span className="rating">
            <FiStar className="icon" />
            {destination.rating} ({destination.reviews})
          </span>
          <span className="duration">
            <FiClock className="icon" />
            {destination.duration}
          </span>
        </div>
        
        <p className="description">{destination.description}</p>
        
        <div className="card-footer">
          <span className="category">{destination.category}</span>
          <button className="book-btn">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
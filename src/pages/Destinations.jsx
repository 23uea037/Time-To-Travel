import React from 'react';
import DestinationCard from '../components/DestinationCard';
import { FiFilter } from 'react-icons/fi';

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      name: 'Bali, Indonesia',
      location: 'Indonesia',
      price: 899,
      rating: 4.8,
      reviews: 1245,
      description: 'Tropical paradise with beautiful beaches and rich culture',
      image: '/BaliIndonesia.jpg',
      duration: '7 days',
      category: 'Beach'
    },
    {
      id: 2,
      name: 'Kyoto, Japan',
      location: 'Japan',
      price: 1299,
      rating: 4.9,
      reviews: 892,
      description: 'Ancient temples and traditional Japanese culture',
      image: '/kyoto.jpg',
      duration: '5 days',
      category: 'Cultural'
    },
    // Add more destinations as needed
  ];

  return (
    <div className="destinations-page">
      <div className="container">
        <h1>Explore Destinations</h1>
        
        <div className="filter-controls">
          <button className="filter-btn">
            <FiFilter /> Filter
          </button>
        </div>

        <div className="destinations-grid">
          {destinations.map(destination => (
            <DestinationCard 
              key={destination.id} 
              destination={destination} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
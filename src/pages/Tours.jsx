
import React, { useState } from 'react';
import { FiSearch, FiFilter, FiStar, FiClock, FiUsers, FiMapPin } from 'react-icons/fi';

const tours = [
  {
    id: 1,
    name: 'Bali Cultural Tour',
    location: 'Bali, Indonesia',
    price: 1299,
    rating: 4.9,
    reviews: 428,
    description: '7-day immersive cultural experience with temple visits, traditional dance shows, and local cuisine workshops.',
    image: '/BaliIndonesia.jpg',
    duration: '7 days',
    groupSize: '12 people',
    category: 'cultural'
  },
  {
    id: 2,
    name: 'Patagonia Adventure',
    location: 'Argentina & Chile',
    price: 2499,
    rating: 4.8,
    reviews: 312,
    description: '10-day hiking expedition through Torres del Paine and Los Glaciares National Parks.',
  image: '/Kayak.jpg',
    duration: '10 days',
    groupSize: '8 people',
    category: 'adventure'
  },
];

const Tours = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredTours = tours.filter(tour => {
    const matchesSearch = tour.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      tour.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'all' || tour.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
  <div className="tours-page" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)', minHeight: '100vh', paddingBottom: 40 }}>
      <section className="tours-hero">
        <div className="container" style={{ textAlign: 'center', padding: '3rem 0 2rem 0' }}>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#2d3748', marginBottom: 10, letterSpacing: '-1px' }}>Our Guided Tours</h1>
          <p style={{ color: '#4a5568', fontSize: '1.25rem', marginBottom: 0 }}>Expertly curated experiences with local guides and small groups</p>
        </div>
      </section>

      <section className="tours-search">
        <div className="container">
          <div style={{ background: '#4a6bff', borderRadius: 24, padding: '2rem', boxShadow: '0 4px 24px 0 #4a6bff22', display: 'flex', alignItems: 'center', gap: '1rem', maxWidth: 600, margin: '0 auto 0 auto' }}>
            <FiSearch style={{ color: '#fff', fontSize: '1.3rem' }} />
            <input
              type="text"
              placeholder="Search tours by destination or name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ color: '#000000ff', background: 'transparent', border: '2px solid #fff', borderRadius: 8, padding: '0.7rem 1rem', minWidth: 220, fontSize: '1.1rem', fontWeight: 500, letterSpacing: '0.5px' }}
            />
            <button className="filter-btn" style={{ color: '#fff', background: '#3a5be0', border: 'none', borderRadius: 12, padding: '0.7rem 1.5rem', display: 'flex', alignItems: 'center', gap: 6, fontWeight: 600, fontSize: '1.1rem', boxShadow: '0 2px 8px 0 #4a6bff33' }}>
              <FiFilter style={{ color: '#fff', marginRight: 6 }} /> Filters
            </button>
          </div>

          <div className="category-filters" style={{ marginTop: 24, display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
            {['all', 'adventure', 'cultural', 'beach', 'wildlife', 'luxury'].map(category => (
              <button
                key={category}
                className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                onClick={() => setActiveFilter(category)}
                style={{ background: activeFilter === category ? '#4a6bff' : '#181818', color: '#fff', border: 'none', fontWeight: 700, fontSize: '1.1rem', borderRadius: 14, margin: '0 4px 0 0', padding: '0.7rem 2rem', transition: 'background 0.2s', boxShadow: activeFilter === category ? '0 2px 8px 0 #4a6bff33' : 'none', letterSpacing: '0.5px' }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="tours-list">
        <div className="container">
          {filteredTours.length > 0 ? (
            <div className="tours-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 36, marginTop: 32 }}>
              {filteredTours.map(tour => (
                <div key={tour.id} className="tour-card" style={{ background: '#fff', borderRadius: 18, boxShadow: '0 4px 32px 0 #4a6bff11', overflow: 'hidden', position: 'relative', transition: 'transform 0.2s', border: '1.5px solid #e0e7ff', minHeight: 420 }}>
                  <div className="card-image" style={{ position: 'relative' }}>
                    <img
                      src={tour.image}
                      alt={tour.name}
                      onError={e => {
                        e.target.src = 'https://via.placeholder.com/340x200?text=No+Image';
                        console.error('Image not found:', tour.image);
                      }}
                      style={{ width: '100%', height: 200, objectFit: 'cover', borderTopLeftRadius: 18, borderTopRightRadius: 18, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, boxShadow: '0 2px 12px 0 #0001' }}
                    />
                    <span className="price" style={{ background: 'linear-gradient(90deg, #4a6bff 60%, #6b8cff 100%)', color: '#fff', padding: '0.3rem 1.1rem', borderRadius: 20, fontWeight: 700, fontSize: '1.1rem', position: 'absolute', top: 18, right: 18, boxShadow: '0 2px 8px 0 #4a6bff33' }}>
                      ${tour.price}
                    </span>
                  </div>
                  <div className="card-content" style={{ padding: '1.5rem 1.2rem 1.2rem 1.2rem' }}>
                    <h3 style={{ marginBottom: 8, fontSize: '1.25rem', color: '#2d3748', fontWeight: 800, letterSpacing: '-0.5px' }}>{tour.name}</h3>
                    <div className="location" style={{ display: 'flex', alignItems: 'center', color: '#718096', marginBottom: 8, fontSize: '1.05rem', fontWeight: 500 }}>
                      <FiMapPin style={{ marginRight: 6 }} />
                      <span>{tour.location}</span>
                    </div>
                    <div className="tour-meta" style={{ display: 'flex', gap: 18, marginBottom: 8, fontSize: '1.02rem', color: '#4a6bff', fontWeight: 600 }}>
                      <span><FiStar style={{ marginRight: 4 }} /> {tour.rating} <span style={{ color: '#718096', fontWeight: 400 }}>({tour.reviews})</span></span>
                      <span><FiClock style={{ marginRight: 4 }} /> {tour.duration}</span>
                      <span><FiUsers style={{ marginRight: 4 }} /> {tour.groupSize}</span>
                    </div>
                    <p className="description" style={{ color: '#4a5568', fontSize: '1.05rem', marginBottom: 18, fontWeight: 500 }}>{tour.description}</p>
                    <div className="card-actions" style={{ display: 'flex', gap: 14 }}>
                      <button className="details-btn" style={{ background: '#4a6bff', color: '#fff', border: 'none', borderRadius: 8, padding: '0.6rem 1.2rem', fontWeight: 700, fontSize: '1.05rem', transition: 'all 0.2s', boxShadow: '0 2px 8px 0 #4a6bff33', cursor: 'pointer' }}>View Details</button>
                      <button className="book-now" style={{ background: 'linear-gradient(90deg, #4a6bff 60%, #6b8cff 100%)', color: '#fff', border: 'none', borderRadius: 8, padding: '0.6rem 1.2rem', fontWeight: 700, fontSize: '1.05rem', boxShadow: '0 2px 8px 0 #4a6bff33', cursor: 'pointer' }}>Book Now</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results" style={{ textAlign: 'center', marginTop: 48 }}>
              <h3 style={{ color: '#2d3748', fontWeight: 700, fontSize: '1.3rem' }}>No tours match your search criteria</h3>
              <p style={{ color: '#4a5568', fontSize: '1.1rem' }}>Try adjusting your filters or search term</p>
            </div>
          )}
        </div>
      </section>

      <section className="tour-benefits">
        <div className="container">
          <h2>Why Choose Our Guided Tours?</h2>
          <div className="benefits-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: 24, marginTop: 24 }}>
            {[
              {
                title: 'Local Experts',
                description: 'Our guides are knowledgeable locals who provide authentic insights',
                icon: '🧑‍🏫'
              },
              {
                title: 'Small Groups',
                description: 'Intimate group sizes for a more personalized experience',
                icon: '👥'
              },
              {
                title: 'Handpicked Accommodations',
                description: 'We select unique, quality places that reflect the local character',
                icon: '🏨'
              },
              {
                title: 'Sustainable Travel',
                description: 'We prioritize eco-friendly practices and support local communities',
                icon: '🌱'
              },
              {
                title: 'All-Inclusive Pricing',
                description: 'No hidden costs - most meals, activities, and transport included',
                icon: '💵'
              },
              {
                title: '24/7 Support',
                description: 'Dedicated support team available throughout your journey',
                icon: '📞'
              }
            ].map((benefit, index) => (
              <div key={index} className="benefit-card" style={{ background: '#f7fafc', borderRadius: 12, padding: 24, flex: '1 1 220px', textAlign: 'center' }}>
                <span className="benefit-icon" style={{ fontSize: 32, marginBottom: 12, display: 'block' }}>{benefit.icon}</span>
                <h3 style={{ marginBottom: 8 }}>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tours;
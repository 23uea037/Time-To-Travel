

import React from "react";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import DestinationCard from "../components/DestinationCard";

const categories = [
  { id: 1, name: "Beach", image: "https://img.icons8.com/color/96/000000/beach.png" },
  { id: 2, name: "Mountain", image: "https://img.icons8.com/color/96/000000/mountain.png" },
  { id: 3, name: "City", image: "https://img.icons8.com/color/96/000000/city.png" },
  { id: 4, name: "Adventure", image: "https://img.icons8.com/color/96/000000/trekking.png" },
  { id: 5, name: "Culture", image: "https://img.icons8.com/color/96/000000/theatre-mask.png" },
  { id: 6, name: "Wildlife", image: "https://img.icons8.com/color/96/000000/lion.png" },
];

const destinations = [
  {
    name: "Bali",
    location: "Indonesia",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    price: 799,
    rating: 4.8,
    reviews: 1245,
    description: "Sunset beaches, jungle villas, and slow island energy.",
    category: "Beach",
  },
  {
    name: "Swiss Alps",
    location: "Switzerland",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
    price: 1299,
    rating: 4.9,
    reviews: 980,
    description: "Snowy peaks and crisp alpine mornings unlimited.",
    category: "Mountain",
  },
  {
    name: "Paris",
    location: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80",
    price: 999,
    rating: 4.7,
    reviews: 2100,
    description: "Café culture, iconic light, and timeless city charm.",
    category: "City",
  },
  {
    name: "Safari",
    location: "Kenya",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    price: 1499,
    rating: 4.6,
    reviews: 670,
    description: "Golden plains, wildlife, and stories under the stars.",
    category: "Wildlife",
  },
];

const Home = () => {
  return (
    <div className="page-shell">
      <section className="hero">
        <div className="hero-grid container">
          <div className="hero-copy">
            <span className="eyebrow">Curated journeys • 2026</span>
            <h1>Travel deeper. Feel more.</h1>
            <p>
              Craft your next escape with immersive stays, hidden gems, and unforgettable
              experiences shaped for the way you love to explore.
            </p>

            <div className="cta-row">
              <button className="primary-btn">Plan my trip</button>
              <button className="secondary-btn">View experiences</button>
            </div>

            <div className="hero-stats">
              <div className="stat-box">
                <strong>120K+</strong>
                <span>happy travelers</span>
              </div>
              <div className="stat-box">
                <strong>48</strong>
                <span>countries explored</span>
              </div>
              <div className="stat-box">
                <strong>4.9/5</strong>
                <span>average rating</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-label="Travel collage">
            <div className="hero-photo main-photo">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"
                alt="Travel destination"
              />
            </div>

            <div className="floating-card floating-card-top">
              <span className="chip">Summer escape</span>
              <strong>Bali • 5 nights</strong>
              <small>From $799</small>
            </div>

            <div className="floating-card floating-card-bottom">
              <span className="mini-label">Best seller</span>
              <strong>Kyoto Trails</strong>
              <small>4.9 rating</small>
            </div>
          </div>
        </div>
      </section>

      <div className="search-panel container">
        <SearchBar />
      </div>

      <section className="categories container">
        <div className="section-heading">
          <div>
            <span className="mini-label">Choose your vibe</span>
            <h2>Travel styles for every kind of explorer</h2>
          </div>
          <a href="#" className="text-link">
            View all
          </a>
        </div>
        <CategoryFilter categories={categories} />
      </section>

      <section className="popular-destinations container">
        <div className="section-heading">
          <div>
            <span className="mini-label">Featured escapes</span>
            <h2>Popular destinations</h2>
          </div>
          <a href="#" className="text-link">
            Discover more
          </a>
        </div>

        <div className="destinations-grid">
          {destinations.map((dest, idx) => (
            <DestinationCard key={idx} destination={dest} />
          ))}
        </div>
      </section>

      <section className="story-panel container">
        <div className="story-copy">
          <span className="mini-label">Why travelers choose us</span>
          <h2>Every itinerary feels like a story worth telling.</h2>
          <ul className="feature-list">
            <li>Handpicked stays with local character and comfort.</li>
            <li>Flexible planning for spontaneous detours and deep dives.</li>
            <li>Real experiences that balance adventure, wellness, and wonder.</li>
          </ul>
        </div>

        <div className="story-visual">
          <div className="story-card large-card">
            <p>Next chapter</p>
            <h3>Patagonia • 7-day journey</h3>
            <span>Glacial trails • lodges • sunrise hikes</span>
          </div>
          <div className="story-card small-card">
            <p>Custom route</p>
            <h3>Morocco</h3>
            <span>Deserts, riads, and rooftop dinners</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
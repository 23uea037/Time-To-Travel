

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
    description: "A tropical paradise with beautiful beaches and vibrant culture.",
    category: "Beach",
  },
  {
    name: "Swiss Alps",
    location: "Switzerland",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
    price: 1299,
    rating: 4.9,
    reviews: 980,
    description: "Stunning mountain views and world-class skiing.",
    category: "Mountain",
  },
  {
    name: "Paris",
    location: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80",
    price: 999,
    rating: 4.7,
    reviews: 2100,
    description: "The city of lights, romance, and art.",
    category: "City",
  },
  {
    name: "Safari",
    location: "Kenya",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    price: 1499,
    rating: 4.6,
    reviews: 670,
    description: "Experience the wild like never before.",
    category: "Wildlife",
  },
];

const Home = () => {
  return (
    <div>
      <div className="hero">
        <h1>Explore the World with TimeToTravel</h1>
        <p>Find your next adventure, discover new destinations, and book unforgettable experiences—all in one place.</p>
        <div style={{ marginTop: "2rem" }}>
          <SearchBar />
        </div>
      </div>
      <div className="container categories">
        <h2>Categories</h2>
        <CategoryFilter categories={categories} />
      </div>
      <div className="container popular-destinations">
        <h2>Popular Destinations</h2>
        <div className="destinations-grid">
          {destinations.map((dest, idx) => (
            <DestinationCard key={idx} destination={dest} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
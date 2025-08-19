import React, { useState } from 'react';
import { FiSearch, FiCalendar, FiUsers, FiMapPin } from 'react-icons/fi';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [date, setDate] = useState('');
  const [travelers, setTravelers] = useState(1);

  return (
    <div className="search-bar">
      <div className="search-input">
  <FiMapPin className="icon" style={{ color: '#fff', stroke: '#fff' }} />
        <input 
          type="text" 
          placeholder="Where to?" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="search-input">
  <FiCalendar className="icon" style={{ color: '#fff', stroke: '#fff' }} />
        <input 
          type="date" 
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      
      <div className="search-input">
  <FiUsers className="icon" style={{ color: '#fff', stroke: '#fff' }} />
        <select 
          value={travelers}
          onChange={(e) => setTravelers(e.target.value)}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
            <option key={num} value={num}>{num} {num === 1 ? 'Traveler' : 'Travelers'}</option>
          ))}
        </select>
      </div>
      
      <button className="search-button">
  <FiSearch className="icon" style={{ color: '#fff', stroke: '#fff' }} />
        Search
      </button>
    </div>
  );
};

export default SearchBar;

import React, { useState } from 'react';
import './SearchBox.css';

// SearchBox component for searching movies and TV series
const SearchBox = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

   // Handle search action
  const handleSearch = () => {
    onSearch(searchQuery);
  };

  // Handle search on Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for Movies and TV Series"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBox;
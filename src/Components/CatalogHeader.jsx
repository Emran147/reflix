import React from 'react';

export default function CatalogHeader({ budget, searchTerm, onSearchChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <h3>{budget}$</h3>
    </div>
  );
}

import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation

export default function MovieDetail() {
  const location = useLocation(); // Access location object
  const { movie } = location.state || {}; // Destructure movie from state, providing a fallback if state is undefined

  return (
    <div>
      {movie ? (
        <div>
          <h2>{movie.title}</h2>
          <img src={movie.img} alt={movie.title} height='200px' width='200px'  />
          <p>Year: {movie.year}</p>
          <p>Descreption: {movie.descrShort}</p>

        </div>
      ) : (
        <p>Movie not found</p>
      )}
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
export default function Movie({ movie, reverseRent }) {
  return (
    <div>
      <Link to={`/movies/${movie.id}`} state={{ movie: movie }} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className='movie-info'>{movie.title} {movie.id} {movie.year}</div>
      </Link>
      <button onClick={(e) => {
        reverseRent(movie.id);
      }}>
        {movie.isRented ? '-' : '+'}
      </button>
    </div>
  );
}

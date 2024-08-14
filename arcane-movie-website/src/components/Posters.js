import React from 'react';
import './Posters.css';

function Posters({ title, imageUrl }) {
  return (
    <div className="movie-poster">
      <img src={imageUrl} alt={`${title} poster`} />
      <h2>{title}</h2>
    </div>
  );
}

export default Posters;
import React from 'react';
import './Posters.css';

function Posters({ title, imageUrl }) {
  const ticketClick = () => {
    alert(`You have succesfully purchased a ticket for ${title}!`)
  };

  return (
    <div className="movie-poster">
      <img src={imageUrl} alt={`${title} poster`} />
      <h2>{title}</h2>
      <button onClick={ticketClick} className='ticket-button'>
        Ticket
      </button>
    </div>
  );
}

export default Posters;
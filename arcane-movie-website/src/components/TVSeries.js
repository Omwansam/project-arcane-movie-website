import React, { useState, useEffect } from 'react';
import SeriesCard from './SeriesCard';
import './TVSeries.css'; // Add this line

function TVSeries() {
  // ... (rest of the component remains the same)

  return (
    <div className="tv-series">
      <h1>TV Series</h1>
      <div className="series-grid"> {/* Change this className */}
        {series.map(s => (
          <SeriesCard 
            key={s.id} 
            series={s} 
            onBuyTicket={() => handleBuyTicket(s.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default TVSeries;
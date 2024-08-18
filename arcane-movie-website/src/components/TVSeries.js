import React, { useState, useEffect } from 'react';
import SeriesCard from './SeriesCard';
import './TVSeries.css';

function TVSeries() {
  const [series, setSeries] = useState([]);
   useEffect(() => {
    const mockSeries = [
        { id: 1, title: "Stranger Things", image: "https://i.pinimg.com/236x/11/a2/23/11a223db66e5c55284693ae776664eef.jpg", price: 10, totalTickets: 100, availableTickets: 100 },
        { id: 2, title: "The Witcher", image: "https://i.pinimg.com/236x/8e/1a/1a/8e1a1a3913fd44a2188dac98602a7a81.jpg", price: 12, totalTickets: 80, availableTickets: 80 },
        { id: 3, title: "The Boys", image: "https://i.pinimg.com/236x/72/bc/de/72bcde46112c4b1ae9f0929598e3c472.jpg", price: 15, totalTickets: 142, availableTickets: 142},
        { id: 4, title: "House Of Dragon", image: "https://i.pinimg.com/236x/57/a5/6e/57a56e2dc6ccf6c00554c5d1c0c3a4c7.jpg", price: 13, totalTickets: 87, availableTickets: 87},
        { id: 5, title: "Supacell", image: "https://i.pinimg.com/236x/5b/f8/61/5bf861972f9f748e18bcbe88df4132ea.jpg", price: 11, totalTickets: 100, availableTickets: 100},
        { id: 6, title: "Dark Matter", image: "https://i.pinimg.com/236x/76/05/da/7605da2fb1f84933143c5255d8a5884f.jpg", price: 14, totalTickets: 110, availableTickets: 110},
        { id: 7, title: "Ozark", image: "https://i.pinimg.com/236x/d2/1d/81/d21d81e4021a66596f064d5f23b7dd5d.jpg", price: 12, totalTickets: 90, availableTickets: 90},
        { id: 8, title: "Riverdale", image: "https://i.pinimg.com/236x/5e/53/ff/5e53ff806c764f93a11407211be0572f.jpg", price: 10, totalTickets: 45, availableTickets: 45},
        { id: 9, title: "Mirror", image: "https://i.pinimg.com/236x/31/43/1c/31431c926bf90b59ef5fd2b542df87b5.jpg", price: 10, totalTickets: 100, availableTickets: 100 },
        { id: 10, title: "Ginny n'Georgia", image: "https://i.pinimg.com/236x/bc/c9/fb/bcc9fbbe4774b5bb2dc6e9f1e74b3a3d.jpg", price: 12, totalTickets: 80, availableTickets: 80 },
        { id: 11, title: "PainKiller", image: "https://i.pinimg.com/236x/e4/df/76/e4df767bad9fc56fadef0afc1827be42.jpg", price: 15, totalTickets: 142, availableTickets: 142},
        { id: 12, title: "3 Body Problem", image: "https://i.pinimg.com/474x/68/8f/12/688f1282fa66786865bba738c9779a23.jpg", price: 13, totalTickets: 87, availableTickets: 87},
        { id: 13, title: "Grownish", image: "https://i.pinimg.com/236x/eb/d5/2c/ebd52c050caeca12353d70522614bf51.jpg", price: 11, totalTickets: 100, availableTickets: 100},
        { id: 14, title: "Abbot Elementary", image: "https://i.pinimg.com/236x/ff/f5/10/fff510c60d17d8341fa28e3744044576.jpg", price: 14, totalTickets: 110, availableTickets: 110},
        { id: 15, title: "Who Is The Erin Carter", image: "https://i.pinimg.com/236x/48/02/24/4802244efe4f8fdf33f8c36187e1cf7a.jpg", price: 12, totalTickets: 90, availableTickets: 90},
        { id: 16, title: "The Signal", image: "https://i.pinimg.com/474x/2d/b5/ff/2db5ff6eea07fd3c340123b12bf9fb5a.jpg", price: 10, totalTickets: 45, availableTickets: 45},
      ];
    setSeries(mockSeries);
  }, []);

  const handleBuyTicket = (id) => {
    setSeries(series.map(s => 
      s.id === id && s.availableTickets > 0 
        ? {...s, availableTickets: s.availableTickets - 1} 
        : s
    ));
  };

  return (
    <div className="tv-series">
      <header className='header'></header>
        <h1>TV Series</h1>
      <div className="series-grid">
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
import React from 'react';
import './Movie.css';
import Posters from './Posters';

function Movie() {
  const movies = [
    {
      title: 'Fellowship Of The Ring',
      imageUrl: 'https://i.pinimg.com/564x/66/4f/b3/664fb36db5d95bb35a826328038d98c8.jpg',
    },
    {
      title: 'Baby Driver',
      imageUrl: 'https://i.pinimg.com/564x/1b/d4/fa/1bd4fa8d38095b735c3f65f4553fe434.jpg',
    },
    {
      title: 'The Godfather',
      imageUrl: 'https://i.pinimg.com/564x/9b/bc/ae/9bbcae6cb69bee8f0cb90f5b3d3f35a0.jpg',
    },
    {
      title: 'Kimetsu No Yaiba',
      imageUrl: 'https://i.pinimg.com/564x/fc/49/93/fc49938607e16ea63fcefbe68ebc0a53.jpg',
    },
    {
      title: 'O brother Where art thou?',
      imageUrl: 'https://i.pinimg.com/564x/f2/fa/9e/f2fa9e08689c1c23c50b7404576cfb11.jpg',
    },
    {
      title: 'Inception',
      imageUrl: 'https://i.pinimg.com/564x/38/75/ad/3875ada66223249fe88c680b1bddf443.jpg',
    },
    {
      title: 'The Story Of Aaron Swartz',
      imageUrl: 'https://i.pinimg.com/564x/e7/4f/ea/e74fead76db63711dafdb52fbe63c543.jpg',
    },
  ];

  return (
    <div className="Movie">
      <h1>Movies</h1>
      <div className="poster-container">
        {movies.map((movie, index) => (
          <Posters key={index} title={movie.title} imageUrl={movie.imageUrl} />
        ))}
      </div>
    </div>
  );
}

export default Movie;
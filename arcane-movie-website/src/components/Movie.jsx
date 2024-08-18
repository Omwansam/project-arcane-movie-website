import React from 'react';
import './Movie.css';
import Posters from './Posters';

function Movie() {
  const movies = [
    {
      title: 'Fellowship Of The Ring',
      imageUrl: 'https://i.pinimg.com/564x/66/4f/b3/664fb36db5d95bb35a826328038d98c8.jpg',
      price: 'KSH 860',
    },
    {
      title: 'Baby Driver',
      imageUrl: 'https://i.pinimg.com/564x/1b/d4/fa/1bd4fa8d38095b735c3f65f4553fe434.jpg',
      price: 'KSH 1,260',
    },
    {
      title: 'The Godfather',
      imageUrl: 'https://i.pinimg.com/564x/9b/bc/ae/9bbcae6cb69bee8f0cb90f5b3d3f35a0.jpg',
      price: 'KSH 560',
    },
    {
      title: 'Kimetsu No Yaiba',
      imageUrl: 'https://i.pinimg.com/564x/fc/49/93/fc49938607e16ea63fcefbe68ebc0a53.jpg',
      price: 'KSH 860',
    },
    {
      title: 'O brother Where art thou?',
      imageUrl: 'https://i.pinimg.com/564x/f2/fa/9e/f2fa9e08689c1c23c50b7404576cfb11.jpg',
      price: 'KSH 560',
    },
    {
      title: 'Tenet',
      imageUrl: 'https://i.pinimg.com/564x/e7/39/a5/e739a55410854fc19bfb39442b6cb4f7.jpg',
      price: 'KSH 1,260',
    },
    {
      title: 'The Story Of Aaron Swartz',
      imageUrl: 'https://i.pinimg.com/564x/e7/4f/ea/e74fead76db63711dafdb52fbe63c543.jpg',
      price: 'KSH 1,260',
    },
    
    {
      title: 'The Hobbit',
      imageUrl: 'https://i.pinimg.com/564x/51/ef/e2/51efe2bd3dffda28f69747812b95a573.jpg',
      price: 'KSH 860',
    },
    {
      title: 'Boy Kills World',
      imageUrl: 'https://i.pinimg.com/736x/8f/5a/af/8f5aaf87560290d5614e19854f9f9c01.jpg',
      price: 'KSH 1,260',
    },
    {
      title: 'Gotti',
      imageUrl: 'https://i.pinimg.com/564x/1f/52/d3/1f52d3d2006cf0314f47eea82595f72b.jpg',
      price: 'KSH 560',
    },
    {
      title: 'Spirited Away',
      imageUrl: 'https://i.pinimg.com/736x/93/6b/c2/936bc2c8a46385dddd69ecaa1fe1d2d5.jpg',
      price: 'KSH 860',
    },
    {
      title: 'Life',
      imageUrl: 'https://i.pinimg.com/564x/da/b9/f3/dab9f3a3b3e079e92b51d06aac724840.jpg',
      price: 'KSH 560',
    },
    {
      title: 'The Social Network',
      imageUrl: 'https://i.pinimg.com/564x/7e/37/b9/7e37b994b613e94cba64f307b1983e39.jpg',
      price: 'KSH 1,260',
    },
    {
      title: 'Jumanji',
      imageUrl: 'https://i.pinimg.com/564x/de/65/ee/de65eee52fc1d0b26fe3a36fc1a7badc.jpg',
      price: 'KSH 860',
    },
    {
      title: 'Ready Player One',
      imageUrl: 'https://i.pinimg.com/564x/9d/4e/a1/9d4ea14e2e0659ba1b5eec0bc9825f35.jpg',
      price: 'KSH 1,260',
    },
    {
      title: 'The Family',
      imageUrl: 'https://i.pinimg.com/564x/3d/95/42/3d954223d32efa1fe1ce7ce07a960b0e.jpg',
      price: 'KSH 560',
    },
    {
      title: 'Jujutsu Kaisen',
      imageUrl: 'https://i.pinimg.com/564x/4d/30/36/4d303692cebbf1421a3f6629c0d2c8eb.jpg',
      price: 'KSH 860',
    },
    {
      title: 'Love and Monsters',
      imageUrl: 'https://i.pinimg.com/564x/17/3c/26/173c26886e69955e6f100339aa8944ba.jpg',
      price: 'KSH 560',
    },
    {
      title: 'The Shawshank Redemption',
      imageUrl: 'https://i.pinimg.com/564x/bb/0e/f9/bb0ef99b7d71bb27e22f57d2156b7b5d.jpg',
      price: 'KSH 1,260',
    },
    {
      title: 'Tetris',
      imageUrl: 'https://i.pinimg.com/564x/1b/ae/e8/1baee82937035a47c6138df81c6ff9e6.jpg',
      price: 'KSH 1,260',
    },
    {
      title: 'The Highwaymen',
      imageUrl: 'https://i.pinimg.com/564x/b2/91/d6/b291d6888e91ac9c6d23da7069183f0b.jpg',
      price: 'KSH 860',
    },
    {
      title: 'Kong Skull Island',
      imageUrl: 'https://i.pinimg.com/564x/38/6a/85/386a85ee1b51e0704991fcedec8b429a.jpg',
      price: 'KSH 1,260',
    },
    {
      title: 'Hacksaw Ridge',
      imageUrl: 'https://i.pinimg.com/564x/5b/88/37/5b88377cda2498570010181badf352a2.jpg',
      price: 'KSH 560',
    },
    {
      title: "The Bob's Burgers Movie",
      imageUrl: 'https://i.pinimg.com/564x/84/5e/67/845e674212523806b825559d049c6860.jpg',
      price: 'KSH 860',
    },
    {
      title: 'Lilo & Stitch',
      imageUrl: 'https://i.pinimg.com/564x/b0/17/61/b017617d732b46882c3b03b0f4fba278.jpg',
      price: 'KSH 560',
    },
   
  ];

  return (
    <div className="Movie">
       <header className="header">
        <h1> Latest Movie shows</h1>
      </header>
      <div className="poster-container">
        {movies.map((movie, index) => (
          <Posters key={index} title={movie.title} imageUrl={movie.imageUrl} price={movie.price}/>
        ))}
      </div>
    </div>
  );
}

export default Movie;
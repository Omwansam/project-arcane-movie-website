import React from 'react';
import './LatestMovies.css'

// Movie data
const moviesData = {
  "movies": [
    {
      "Title": "Guardians of the Galaxy Vol. 2",
      "Year": "2017",
      "Rated": "PG-13",
      "Released": "05 May 2017",
      "Runtime": "136 min",
      "Genre": "Action, Adventure, Comedy",
      "Director": "James Gunn",
      "Writer": "James Gunn, Dan Abnett, Andy Lanning",
      "Actors": "Chris Pratt, Zoe Saldana, Dave Bautista",
      "Plot": "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.",
      "Language": "English",
      "Country": "United States",
      "Awards": "Nominated for 1 Oscar. 15 wins & 60 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "7.6/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "85%"
        },
        {
          "Source": "Metacritic",
          "Value": "67/100"
        }
      ],
      "Metascore": "67",
      "imdbRating": "7.6",
      "imdbVotes": "768,933",
      "imdbID": "tt3896198",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "$389,813,101",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
      "Plot": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English",
      "Country": "United States",
      "Awards": "Won 4 Oscars. 152 wins & 218 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjAxNzAzNTY3Ml5BMl5BanBnXkFtZTcwNTkzMjUyMw@@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "8.8/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "86%"
        },
        {
          "Source": "Metacritic",
          "Value": "74/100"
        }
      ],
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,710,621",
      "imdbID": "tt1375666",
      "Type": "movie",
      "DVD": "07 Dec 2010",
      "BoxOffice": "$292,576,195",
      "Production": "Warner Bros. Pictures",
      "Website": "N/A",
      "Response": "True"
    }
    // Add more movies as needed
  ]
};

const LatestMovies = () => {
  return (
    <div className='MoviesGrid'>
      {moviesData.movies.map((movie) => {
        const { Title, Runtime, Poster, imdbID } = movie;
        return (
          <div key={imdbID} className='MovieBox'>
            <div className='img'>
              <img src={Poster} alt={Title} />
            </div>
            <div className='text'>
              <h3>{Title}</h3>
              <span>{Runtime}</span>
              <button className='primary-btn'>
                <i className="fa fa-play"></i> PLAY NOW
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LatestMovies;

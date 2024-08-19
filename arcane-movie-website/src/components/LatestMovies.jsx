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
      "Poster": "https://i.pinimg.com/736x/fa/20/85/fa2085a086003ebe5cccafeeeaf9952e.jpg",
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
    },
   {
    "Title": "Harry Potter",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "169 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
    "Plot": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English",
    "Country": "United States",
    "Awards": "Won 4 Oscars. 152 wins & 218 nominations total",
    "Poster": "https://i.pinimg.com/564x/2b/14/da/2b14da6668dcc8e6456ab0ce9bcf1a5d.jpg",
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
  },
  {
    "Title": "Free Guy",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
    "Plot": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English",
    "Country": "United States",
    "Awards": "Won 4 Oscars. 152 wins & 218 nominations total",
    "Poster": "https://i.pinimg.com/564x/a8/09/1a/a8091accb13f85a7b87845618af1aa82.jpg",
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
  },
  {
    "Title": "The Matrix",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "180 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
    "Plot": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English",
    "Country": "United States",
    "Awards": "Won 4 Oscars. 152 wins & 218 nominations total",
    "Poster": "https://i.pinimg.com/564x/18/d7/4e/18d74ef46e722828f75cca91b009f4a5.jpg",
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
  },
  {
    "Title": "Top Gun",
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
    "Poster": "https://i.pinimg.com/564x/69/2c/ef/692cef006e6c6a2da2263a7b36d7db09.jpg",
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
  },
  {
    "Title": "Jungle Cruise",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "140 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
    "Plot": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English",
    "Country": "United States",
    "Awards": "Won 4 Oscars. 152 wins & 218 nominations total",
    "Poster": "https://i.pinimg.com/564x/e0/cc/67/e0cc670c8b292b6eb77d406388d50835.jpg",
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
  },
  {
    "Title": "The Witcher",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "150 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
    "Plot": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English",
    "Country": "United States",
    "Awards": "Won 4 Oscars. 152 wins & 218 nominations total",
    "Poster": "https://i.pinimg.com/564x/46/4e/2a/464e2a939dd1e56d509e80d0a3ed7d95.jpg",
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
  },
  {
    "Title": "Uncharted",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "120 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
    "Plot": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English",
    "Country": "United States",
    "Awards": "Won 4 Oscars. 152 wins & 218 nominations total",
    "Poster": "https://i.pinimg.com/564x/cf/c1/09/cfc109de26321ca02ca4e5316b83c4f3.jpg",
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
  },
  {
    "Title": "Ready Or Not",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "160 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
    "Plot": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English",
    "Country": "United States",
    "Awards": "Won 4 Oscars. 152 wins & 218 nominations total",
    "Poster": "https://i.pinimg.com/564x/78/6c/b8/786cb8b688270e0f2fff80da566c064b.jpg",
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
  },
  {
    "Title": "The 100",
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
    "Poster": "https://i.pinimg.com/564x/16/ae/9e/16ae9ef1f8e8e6405d9b9508d1e3232d.jpg",
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
  },{
    "Title": "Luca",
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
    "Poster": "https://i.pinimg.com/564x/06/8e/47/068e4700ce144ddfb8b5863b7b3eafd7.jpg",
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
  },
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

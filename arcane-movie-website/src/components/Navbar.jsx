import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img1 from '../Assets/Hitmans.jpeg'

import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // one can perform any additional logout logic in this function (e.g., clearing user session)
    navigate('/login'); // Redirect to the login/sign up page
  };

  return (
    <header>
      <div className='container'>
        <div className='logo'>
          <a href="https://github.com/">
            <h1>Arcane</h1>
          </a>
        </div>
        <nav className='navbar'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/tv-series">TV Series</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/about">Events</Link></li>
            <li><button className='logout-btn' onClick={handleLogout}>Logout</button></li>
          </ul>
        </nav>

        <div className='searchbox'>
          <i className="search-icon fa fa-search" aria-hidden="true"></i>
          <input type="text" name='search' placeholder="Search" />
        </div>

        <button className='btn'>Subscribe</button>
      </div>

      <div className='home ' id='home'>

< img src={img1} alt='' className='home-img' />
 <div className='home-text'>
    <h1 className='home-title'>Hitman's Wife's Bodyguard</h1>
    <p>Releasing 10 April</p>
    <a href='#' className='watch-btn'>
    <i class="fa fa-play " classname='fa fa-play ' aria-hidden="true"></i>
        <span>Watch the trailer</span>
    </a>
 </div>
</div>
    </header>
  );
}

export default Navbar;

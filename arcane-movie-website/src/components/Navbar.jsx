import React from 'react'
import './Navbar.css'
const Navbar = () => {
return (
    < header>
    <div className='container'>
        <div className='logo'>
    <a href="https://github.com/">
        <h1>Arcane</h1>
    </a>
    </div>
    <nav className='navbar' >
    <ul>
            <li><Link to="/" className='active'>Home</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/tv-series">Tv Series</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/login">Login</Link></li>
   </ul>
    </nav>

    <div className='searchbox'>
    <i class=" search-icon fa fa-search" aria-hidden="true"></i>
        <input type="text" name='search' placeholder="Search"/>
    </div>

   <button className='btn' >Subscribe</button>

        </div>
        </header>
)
}

export default Navbar;
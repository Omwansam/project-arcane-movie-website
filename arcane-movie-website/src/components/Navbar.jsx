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
                <li><a href='#' className='active'>Home</a></li>
                <li><a href='#'>Movies</a></li>
                <li><a href='#'>Tv Series</a></li>
                <li><a href='#'>Events</a></li>
                <li><a href='#'>Login</a></li>
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
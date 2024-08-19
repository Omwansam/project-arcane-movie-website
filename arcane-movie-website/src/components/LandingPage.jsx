import React from 'react'
import './LandingPage.css'
import img1 from '../Assets/Hitmans.jpeg'


const LandingPage = () => {
  return (
    <div className='HeroContainer id-hero'>
    <img src={img1} alt="" className='hero-img'/>
    <div className='Hero-text'>
        <h1 className='Hero-title'>Hitman's Wife's Bodyguard</h1>
        <p>Releasing 10 April</p>
        <a href="#s" className="watch-btn">
          <i class="fa fa-play " classname='fa fa-play ' aria-hidden="true"></i>
        <span>Watch the Trailer</span>
        </a>
        </div>
    </div>
    
    
  )
}

export default LandingPage

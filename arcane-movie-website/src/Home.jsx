import React from 'react'
import LandingPage from './components/LandingPage'
import  LatestMovies from "./components/LatestMovies";

function Home() {
  return (
    <div>
      <LandingPage />
      <LatestMovies/>
    </div>
  )
}

export default Home
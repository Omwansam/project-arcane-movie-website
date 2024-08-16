import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import TVSeries from './components/TVSeries';

// Create placeholder components for other pages
const Home = () => <div>Home Page</div>;
const Movies = () => <div>Movies Page</div>;
const Events = () => <div>Events Page</div>;
const Login = () => <div>Login Page</div>;

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv-series" element={<TVSeries />} />
          <Route path="/events" element={<Events />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
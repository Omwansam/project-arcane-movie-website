import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
// import TvSeries from "./components/TvSeries";
// import Movies from "./components/Movies";
// import About from "./components/About";
// import Contact from "./components/Contact";
import LoginAndSignUp from "./components/LoginAndSignUp";

const AppRoutes = () => {
   return (
     <Routes>
       {/* Route for the Login and Sign-Up page */}
       <Route path="/login" element={<LoginAndSignUp />} />
       
       {/* Route for the main app pages */}
       <Route path="/" element={<App />}>
         <Route path="home" element={<Home />} />
         {/* <Route path="tv-series" element={<TvSeries />} />
         <Route path="movies" element={<Movies />} />
         <Route path="about" element={<About />} />
         <Route path="contact" element={<Contact />} /> */}
       </Route>
     </Routes>
   );
 };
export default AppRoutes;

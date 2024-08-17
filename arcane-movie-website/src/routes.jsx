import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";

import  LatestMovies from "./components/LatestMovies";
import Movie from "./components/Movie";
import TVSeries from "./components/TVSeries";

import LoginAndSignUp from "./components/LoginAndSignUp";

const AppRoutes = () => {
   return (
     <Routes>
       {/* Route for the Login and Sign-Up page */}
       <Route path="/login" element={<LoginAndSignUp />} />
       
       {/* Route for the main app pages */}
        <Route path="/" element={<App />}>
         <Route path="/" element={< LatestMovies />} />
         <Route path="movie" element={<Movie />} />
         <Route path="tvSeries" element={<TVSeries />} />
         {/* <Route path="contact" element={<Contact />} /> */}
       </Route>
     </Routes>
   );
 };
export default AppRoutes;

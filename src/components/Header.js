import React, { useState, useEffect } from "react";
import "./Header.css";
import axios from "../services/axio";
import requests from "../services/requests";

const Header = () => {
  const [movie, setMovie] = useState([]);
  
  useEffect(() => {
    const fetchmoviedb = async () => {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    };
    fetchmoviedb();
  }, []);

  return (
    <header
      className="movie_header"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
       
      }}
    >
      <div className="movie__content">
      <h1 className="movie__title">{movie.title || movie.name}</h1>
      <div className="movie__description">{movie.overview}</div>
      </div>
    </header>
  );
};

export default Header;

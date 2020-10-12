import React, { useState, useEffect } from "react";
import "./MovieSection.css";
import axios from "../services/axio";

const MovieSection = ({ title, fetchgener }) => {
  const [movies, setMovies] = useState([]);
  const imageUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const fetchmoviedb = async () => {
      const request = await axios.get(fetchgener);
      //console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    };
    fetchmoviedb();
  }, [fetchgener]);

  return (
    <div className="movieSection">
      <h2 className="movieSection__title">{title}</h2>
      <div className="movieSection__row">
        {movies.map((movie) => (
          <img
            src={`${imageUrl}${movie.poster_path}`}
            className="movieSection__image"
          />
        ))}
      </div>
    </div>
  );
};

export default MovieSection;

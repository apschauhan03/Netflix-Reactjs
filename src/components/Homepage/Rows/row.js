import React, { useEffect, useState } from "react";
import "./row.css";
import axios from "../../../axios";

function Row({ fetchUrl, title, isLarge = false }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function generateMovies() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    generateMovies();
  }, [fetchUrl]);
  // console.log(movies);
  const base_url = "https://image.tmdb.org/t/p/original";
  return (
    <div className="row">
      <div>{title}</div>
      <div className="row_posters">
        {movies.map(
          (movie) =>
            ((isLarge && movie.poster_path) ||
              (!isLarge && movie.backdrop_path)) && (
              <img
                className={`row_poster ${isLarge && "OriginalsRow"}`}
                key={movie.id}
                src={`${base_url}${
                  isLarge ? movie.poster_path : movie.backdrop_path
                }`}
                alt="movie poster"
              ></img>
            )
        )}
      </div>
    </div>
  );
}

export default Row;

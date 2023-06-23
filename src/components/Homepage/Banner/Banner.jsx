import React, { useEffect, useState } from "react";
import "./Banner.css";
// import banner from "./713-KpFv1rL._AC_UF894,1000_QL80_.jpg";
import axios from "../../../axios.js";
import requests from "../../../request";

function Banner() {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    async function generateMovies() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setmovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    generateMovies();
  }, []);
  console.log(movie);
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="movie_title banner_content">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <button className="play_button banner_content">Play</button>
        <button className="add_tolist banner_content">Add to List</button>
        <h3 className="movie_description banner_content">
          {truncate(`${movie?.overview}`, 200)}
        </h3>
      </div>
      <div className="fade_out_design"></div>
    </header>
  );
}

export default Banner;

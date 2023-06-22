import React from "react";
import "./Banner.css";
import banner from "./713-KpFv1rL._AC_UF894,1000_QL80_.jpg";

function Banner() {
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${banner})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="movie_title banner_content">Movie title</h1>
        <button className="play_button banner_content">Play</button>
        <button className="add_tolist banner_content">Add to List</button>
        <h3 className="movie_description banner_content">
          {truncate(
            `this is a test movie_description this is a test movie_description this is a test movie_description this is a test movie_description this is a test movie_description this is a test movie_description this is a test movie_description this is a test movie_description this is a test movie_description this is a test movie_description
            this is a test movie_description this is a test movie_description this is a test movie_description this is a test movie_description this is a test movie_description this is a test movie_description this is a test movie_description 
            this is a test movie_description this is a test movie_description this is a test movie_description this is a test movie_description this is a test movie_description this is a test movie_description 
            this is a test movie_description this is a test movie_description this is a test movie_description this is a test movie_description this is a test movie_description this is a test movie_description 
            this is a test movie_description`,
            200
          )}
        </h3>
      </div>
      <div className="fade_out_design"></div>
    </header>
  );
}

export default Banner;

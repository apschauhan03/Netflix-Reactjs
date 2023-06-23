import React from "react";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import Row from "./Rows/row";
import requests from "../../request";

function Homepage() {
  return (
    <>
      <Navbar />
      <Banner />
      <Row
        fetchUrl={requests.fetchNetflixOriginals}
        title="NETFLIX ORIGINALS"
        isLarge="true"
      />
      <Row fetchUrl={requests.fetchRomanceMovies} title="Romantic Movies" />
      <Row fetchUrl={requests.fetchTrending} title="Trending" />
      {/* <Row fetchUrl={requests.fetchTopRated} title="Top Rated" /> */}
      <Row fetchUrl={requests.fetchActionMovies} title="Action Movies" />
      <Row fetchUrl={requests.fetchComedyMovies} title="Comedy Movies" />
      <Row fetchUrl={requests.fetchDocumentaries} title="Documentaries" />
      <Row fetchUrl={requests.fetchHorrorMovies} title="Horror Movies" />
    </>
  );
}

export default Homepage;

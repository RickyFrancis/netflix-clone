import React from "react";
import "../styles/HomeScreen.css";
import Nav from "./Nav";
import Banner from "./Banner";
import Row from "./Row";
import requests from "../Requests";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow
      />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow
      />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;

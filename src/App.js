import React from "react";
import "./App.css";
import Header from "./components/Header";
import MovieSection from "./components/MovieSection";
import requests from "./services/requests";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Header />
        <MovieSection
          title="Trending Now"
          fetchgener={requests.fetchTrending}
        />
        <MovieSection
          title="PopularNow"
          fetchgener={requests.fetchPopular}
        />
        <MovieSection
          title="Kids Favourite"
          fetchgener={requests.fetchKids}
        />
        <MovieSection
          title="Documentries"
          fetchgener={requests.fetchDocumentries}
        />
      
    </div>
  );
}

export default App;

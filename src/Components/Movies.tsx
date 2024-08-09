import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import MovieContext from "../context/MovieContext.ts";
import "./Movie.css";

const Movies = () => {
  const [searchText, setSearchText] = useState<string>("");
  const { movies, getMovies } = useContext(MovieContext);

  const handleSearch = () => {
    if (searchText.trim()) {
      getMovies(searchText.trim());
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="movieWrapper">
      <div className="searchBarContainer">
        <input
          type="text"
          className="searchInput"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search for movies..."
          onKeyDown={handleKeyDown}
        />
        <button className="searchButton" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="movieListWrapper">
        <ul>
          {movies?.map((movie) => (
            <li key={movie.imdbID}>
              <div className="movie-info">
                <Link className="link">
                  <img src={movie.Poster} alt={movie.Title} />
                  <div>
                    <h3>{movie.Title}</h3>
                  </div>
                </Link>
                <p className="white">{movie.Year}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Movies;

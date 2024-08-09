import React, { useState, useEffect } from "react";
import MovieContext from "./MovieContext.ts";

const MovieProvider = (props) => {
  const [movies, setMovies] = useState([]);

  const getMovies = async (searchText: string) => {
    const url = `https://www.omdbapi.com/?apikey=a48525c7&page=1&s=${searchText}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    setMovies(result.Search)
  } catch (error) {
    console.error(error.message);
  }
  };


  /*
  fetch(url, {
    method: post,
    Headers: headers,
    body: JSON.stringfy({ name: 'shailendr' })
  })
  */
  const contextValue = {
      movies,
      getMovies,
  };

  return (
    <MovieContext.Provider value={contextValue}>
      {props?.children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;

import React from "react";

import Movie from "../Movie/Movie";
import "./Movielist.css";

const MovieList = (props) => {
  return (
    <ul className="movies-list">
      {props.movies.map((movie, idx) => (
        <Movie
          key={idx}
          name={movie.name}
          rating={movie.rating}
          released={movie.released}
        />
      ))}
    </ul>
  );
};

export default MovieList;

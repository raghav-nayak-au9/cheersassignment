import React from "react";

import "./Movie.css";

const Movie = (props) => {
  return (
    <li className="movie">
      <h2>{props.name}</h2>
      <h3>{props.rating}</h3>
      <p>{props.released}</p>
    </li>
  );
};

export default Movie;

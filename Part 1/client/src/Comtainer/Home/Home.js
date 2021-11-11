import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "../../Component/Movielist/Movielist";
import "../../../src/app.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:8080/api/movies");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      console.log(data.data);

      const transformedMovies = data.data.map((movieData) => {
        return {
          name: movieData.name,
          rating: movieData.rating,
          released: movieData.released,
        };
      });

      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>{content}</section>
    </React.Fragment>
  );
};

export default Home;

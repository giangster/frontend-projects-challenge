import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <div className="movie-container">
      <h2>{movie.Title}</h2>
      <img alt={`The movie titled: ${movie.Title}`} src={poster} />
      <p>{movie.Year}</p>
    </div>
  );
};

export default Movie;

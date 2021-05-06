import React from "react";

function Movie({ title, year, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <h3 className="movie__genres">{genres}</h3>
        <h3 className="movie__year">{year}</h3>
        <h3 className="movie__summary">{summary}</h3>
      </div>
    </div>
  );
}

export default Movie;

import React from "react";

function Movie({ title, year, summary, poster, genres }) {
  return (
    <div class="movie">
      <img src={poster} alt={title} title={title} />
      <div class="movie__data">
        <h3 class="movie__title">{title}</h3>
        <ul class="movie__genres">
          {genres.map((genre, index) => (
            <li key={index} class="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <h3 class="movie__genres">{genres}</h3>
        <h3 class="movie__year">{year}</h3>
        <h3 class="movie__summary">{summary}</h3>
      </div>
    </div>
  );
}

export default Movie;

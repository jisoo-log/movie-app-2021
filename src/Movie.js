import React from "react";

function Movie({ title, year, summary, poster }) {
  return (
    <div class="movie">
      <img src={poster} alt={title} title={title} />
      <div class="movie__data">
        <h3 class="movie__title">{title}</h3>
        <h3 class="movie__year">{year}</h3>
        <h3 class="movie__summary">{summary}</h3>
      </div>
    </div>
  );
}

export default Movie;

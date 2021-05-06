import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const {
      data: {
        data: { movies: result },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    setMovies(result);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">"Loading..."</span>
        </div>
      ) : (
        <div className="movies">
          {movies.map((movie) => {
            return (
              <Movie
                key={movie.id}
                title={movie.title}
                year={movie.year}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}

export default App;

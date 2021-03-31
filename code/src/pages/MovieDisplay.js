import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BackLink from "../components/BackLink";
import { MOVIE_URL } from "../reusable/urls";
import MovieDetails from "../components/MovieDetails";
import LoadingSymbol from "../components/LoadingSymbol";

const MovieDisplay = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(MOVIE_URL(id))
      .then((res) => res.json())
      .then((movie) => setMovie(movie))
      .catch((error) => console.log(error));
  }, [id]);

  const onLoad = () => {
    if (movie.success === false) {
      return (window.location.href = "/fail");
    }
    return <MovieDetails {...movie} key={movie.id} />;
  };

  return (
    <article className="movie-details">
      <BackLink />
      {movie.length === 0 ? <LoadingSymbol /> : onLoad()}
    </article>
  );
};

export default MovieDisplay;

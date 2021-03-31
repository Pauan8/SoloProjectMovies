import React from "react";

const MovieDetails = (props) => {
  const {
    backdrop_path,
    original_title,
    poster_path,
    vote_average,
    overview,
  } = props;

  return (
    <div className="movie-details-wrapper">
      <picture className="movie-details__background">
        <source
          srcSet={`http://image.tmdb.org/t/p/original${backdrop_path}`}
          media="(min-width: 1024px)"
        />
        <img
          src={`http://image.tmdb.org/t/p/w1280${backdrop_path}`}
          alt={original_title}
        />
      </picture>
      <div className="movie-details-info">
        <div className="movie-details-info__image-container">
          <img
            src={`http://image.tmdb.org/t/p/w342${poster_path}`}
            alt={original_title}
          ></img>
        </div>
        <div className="movie-details-info__text-container">
          <h1 className="movie-details-info__title">
            {original_title}
            <span className="movie-details-info__votes">{vote_average}/10</span>
          </h1>
          <p className="movie-details-info__overview">{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

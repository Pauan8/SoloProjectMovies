import React, { useState, useEffect } from "react";

import MovieCard from "../components/MovieCard";
import { POPULAR_URL } from "../reusable/urls";

const PopularList = () => {
  const [popularList, setPopularList] = useState([]);

  useEffect(() => {
    fetch(POPULAR_URL)
      .then((res) => res.json())
      .then((movies) => setPopularList(movies.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="popular-list">
      <div className="popular-list-wrapper">
        {popularList.map((movie) => (
          <MovieCard {...movie} key={movie.id} />
        ))}
      </div>
    </section>
  );
};

export default PopularList;

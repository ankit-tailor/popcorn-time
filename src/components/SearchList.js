import React from "react";
import "./SearchList.css";
import { Link } from "react-router-dom";

function SearchList({ movieId, image, title, releaseDate, rating }) {
  return (
    <Link
      style={{ textDecoration: "none", color: "black" }}
      to={`movie/${movieId}`}
    >
      <div className="search-list">
        <img className="img-poster" src={image} alt="movie_image" />
        <div className="search-list__info">
          <h3 className="movie-title">{title}</h3>
          <p className="movie-release">{releaseDate}</p>
          <p>{rating}/10</p>
        </div>
      </div>
    </Link>
  );
}

export default SearchList;

import React from "react";
import "./SearchList.css";
function SearchList({ image, title, releaseDate, rating }) {
  return (
    <div className="search-list">
      <img src={image} alt="movie_image" />
      <div className="search-list__info">
        <h3>{title}</h3>
        <p>{releaseDate}</p>
        <p>{rating}/10</p>
      </div>
    </div>
  );
}

export default SearchList;

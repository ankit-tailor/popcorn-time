import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

function Banner({
  image,
  handelChange,
  searchTerm,
  title,
  releaseDate,
  movieId,
}) {
  return (
    <div className="banner">
      <img src={image} alt="banner_image" />
      <div className="container__banner">
        <div className="search__field">
          <input
            type="text"
            placeholder="start typing to search movies, tvshows..."
            onChange={handelChange}
            value={searchTerm}
          />
          {!searchTerm ? (
            <button disabled={true} className="disabled search-btn">
              Search
            </button>
          ) : (
            <Link to={`/search/${searchTerm}`}>
              <button className="search-btn">Search</button>
            </Link>
          )}
        </div>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={`/movie/${movieId}`}
        >
          <h1>{title}</h1>
          <h4>{releaseDate}</h4>
        </Link>
      </div>
    </div>
  );
}

export default Banner;

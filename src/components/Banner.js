import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

function Banner({ image, handelChange, searchTerm, title, releaseDate }) {
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
          <Link to={`/search/${searchTerm}`}>
            <button className="search-btn">Search</button>
          </Link>
        </div>
        <h1>{title}</h1>
        <h4>{releaseDate}</h4>
      </div>
    </div>
  );
}

export default Banner;

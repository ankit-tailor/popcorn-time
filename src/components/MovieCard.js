import React from "react";
import "./MovieCard.css";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorderRounded";
import { Link } from "react-router-dom";

function MovieCard({ movieId, posterUrl, title }) {
  return (
    <div className="movieCard">
      <div className="movieCard__details">
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={`/movie/${movieId}`}
        >
          <img src={posterUrl} alt="movie_image" />
        </Link>
        <div className="movieCard__bookmark">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/movie/${movieId}`}
          >
            <p style={{ cursor: "pointer" }}>
              {title.length > 30 ? `${title.substr(0, 25)}...` : title}
            </p>
          </Link>
          <BookmarkBorderIcon />
        </div>
      </div>
    </div>
  );
}

export default MovieCard;

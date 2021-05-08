import React from "react";
import "./MovieCard.css";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorderRounded";

function MovieCard({ posterUrl, title }) {
  return (
    <div className="movieCard">
      <div className="movieCard__details">
        <img src={posterUrl} alt="movie_image" />
        <div className="movieCard__bookmark">
          <p>{title}</p>
          <BookmarkBorderIcon />
        </div>
      </div>
    </div>
  );
}

export default MovieCard;

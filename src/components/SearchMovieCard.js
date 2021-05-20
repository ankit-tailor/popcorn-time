import React from "react";
import "./SearchMovieCard.css";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorderRounded";

const SearchMovieCard = ({ posterUrl, title }) => {
  return (
    <div className="searchMovieCard">
      <div className="searchMovieCard__details">
        <img src={posterUrl} alt="movie_image" />
        <div className="searchMovieCard__bookmark">
          <p>{title}</p>
          <BookmarkBorderIcon />
        </div>
      </div>
    </div>
  );
};

export default SearchMovieCard;

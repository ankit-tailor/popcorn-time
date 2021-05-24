import React from "react";
import "./SearchMovieCard.css";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorderRounded";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SearchMovieCard = ({ movieId, posterUrl, title }) => {
  return (
    <motion.div
      className="searchMovieCard"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="searchMovieCard__details">
        <Link
          style={{ textDecoration: "none", marginBottom: "-1.5rem" }}
          to={`/movie/${movieId}`}
        >
          <img className="posterImage" src={posterUrl} alt="movie_image" />
        </Link>
        <div className="searchMovieCard__bookmark">
          <Link style={{ textDecoration: "none" }} to={`/movie/${movieId}`}>
            <p className="movie__title">{title}</p>
          </Link>
          <BookmarkBorderIcon />
        </div>
      </div>
    </motion.div>
  );
};

export default SearchMovieCard;

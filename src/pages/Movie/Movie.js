import React, { useEffect } from "react";
import "./Movie.css";
import { useParams } from "react-router";
import useMovieFetch from "../../hooks/useMovieFetch";
import CircularProgress from "@material-ui/core/CircularProgress";
import { baseImageUrl } from "../../backend";
import { motion } from "framer-motion";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MoneyIcon from "@material-ui/icons/Money";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import Actor from "../../components/Actor";
import image_not_found from "../../assets/images/image_not_found.jpg";
import MovieCard from "../../components/MovieCard";

const Movie = () => {
  const { movieId } = useParams();
  const {
    data: movie,
    actor,
    recommendations,
    loading,
  } = useMovieFetch(movieId);
  // console.log(movie);
  // console.log(actor);
  // console.log(recommendations);
  useEffect(() => {
    window.scroll(0, 0);
  }, [movieId]);
  return (
    <div className="movie">
      {loading && (
        <div className="progressbar">
          <CircularProgress />
        </div>
      )}
      {!loading && movie && (
        <div>
          <div
            className="movie__poster"
            style={{
              backgroundImage: `url("${baseImageUrl}w1280/${movie.backdrop_path}")`,
            }}
          >
            <motion.div
              className="img-wrap"
              intial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              delay={{ delay: 1 }}
            >
              <img
                src={`${baseImageUrl}/w500/${movie.poster_path}`}
                alt="movie_poster"
              />
              <div className="movie__info">
                <h1>{movie.title}</h1>
                <p>
                  {movie.release_date} .{" "}
                  {movie.genres &&
                    movie.genres.map((_genre) => (
                      <span key={_genre.id} className="movie__genre">
                        #{_genre.name}
                      </span>
                    ))}
                </p>
                <h3 style={{ marginTop: "20px" }}>Tagline: </h3>
                <p>{movie.tagline}</p>
                <h3 style={{ marginTop: "20px" }}>Overview: </h3>
                <p>{movie.overview}</p>
                <div className="movie__public">
                  <div>
                    <h3>Rating</h3>
                    <div className="vote">
                      <p>{movie.vote_average}</p>
                    </div>
                  </div>
                  <div style={{ marginLeft: "40px" }}>
                    <h3>Popularity</h3>
                    <div className="vote">
                      <p>{Math.round(movie.popularity)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="movie__content">
            <div className="contentbar">
              <AccessTimeIcon className="contentbar__icon" />
              <p style={{ marginLeft: "5px" }}>
                Runtime: {Math.round(movie.runtime / 60)}h {movie.runtime % 60}m
              </p>
            </div>
            <div className="contentbar">
              <MoneyIcon className="contentbar__icon" />
              <p style={{ marginLeft: "5px" }}>Budget: ${movie.budget}</p>
            </div>
            <div className="contentbar">
              <MonetizationOnIcon className="contentbar__icon" />
              <p style={{ marginLeft: "5px" }}>Revenue: ${movie.revenue}</p>
            </div>
          </div>
          <h1 className="details">Actors</h1>
          <div className="actors">
            {actor &&
              actor.cast.map((_actor) => (
                <Actor
                  key={_actor.id}
                  title={_actor.name}
                  role={_actor.character}
                  image={
                    _actor.profile_path
                      ? `${baseImageUrl}/w500/${_actor.profile_path}`
                      : image_not_found
                  }
                />
              ))}
          </div>
        </div>
      )}
      <h1 className="details">Recommended Movies</h1>
      <div className="recommendations">
        {recommendations &&
          recommendations.results.map((movie) => (
            <MovieCard
              key={movie.id}
              movieId={movie.id}
              posterUrl={
                movie.poster_path
                  ? `${baseImageUrl}/w500/${movie.poster_path}`
                  : image_not_found
              }
              title={movie.title}
            />
          ))}
      </div>
    </div>
  );
};

export default Movie;

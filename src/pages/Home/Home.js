import React, { useState } from "react";
import { baseImageUrl } from "../../backend";
import useFetchHome from "../../hooks/useFetchHome";
import useSearch from "../../hooks/useSearch";
import Banner from "../../components/Banner";
import MovieCard from "../../components/MovieCard";
import SearchList from "../../components/SearchList";
import "./Home.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import image_not_found from "../../assets/images/image_not_found.jpg";
import { Link } from "react-router-dom";
import PlayCircleFilledRoundedIcon from "@material-ui/icons/PlayCircleFilledRounded";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const { data: upcoming, bannerInfo } = useFetchHome("/movie/upcoming");
  const { data: trending } = useFetchHome("/trending/movie/week");
  const { data: topRated } = useFetchHome("/movie/top_rated");
  const { data: searchList, loading } = useSearch(searchTerm);
  const { backdrop_path, title, release_date, id } = bannerInfo;

  const handelChange = (e) => {
    if (e.target.value === "") {
      searchList.length = 0;
    }
    setSearchTerm(e.target.value);
  };
  //   console.log("UPCOMING", upcoming);

  return (
    <div className="home">
      <Banner
        title={title}
        releaseDate={`Releases on ${release_date}`}
        image={`${baseImageUrl}w1280/${backdrop_path}`}
        handelChange={handelChange}
        searchTerm={searchTerm}
        movieId={id}
      />
      {loading && (
        <div className="home__category">
          <CircularProgress />
        </div>
      )}
      {searchList.length > 0 && !loading ? (
        <div className="home__category">
          <h1>Search Result</h1>
          {searchList.map((movie) => {
            return (
              <SearchList
                key={movie.id}
                movieId={movie.id}
                title={movie.title}
                image={
                  movie.poster_path
                    ? `${baseImageUrl}/w500/${movie.poster_path}`
                    : image_not_found
                }
                rating={movie.vote_average}
                releaseDate={movie.release_date}
              />
            );
          })}
          <div style={{ textAlign: "center" }}>
            <Link
              style={{ textDecoration: "none" }}
              to={`search/${searchTerm}`}
            >
              <Button
                style={{ marginBottom: "15px" }}
                variant="outlined"
                color="primary"
                startIcon={<ExpandMoreIcon />}
              >
                Show More
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="home__category">
            <h1>Up Coming</h1>
            <div className="movieCardss">
              {upcoming.map((movie) => {
                return (
                  <MovieCard
                    key={movie.id}
                    movieId={movie.id}
                    posterUrl={`${baseImageUrl}/w500/${movie.poster_path}`}
                    title={movie.title}
                  />
                );
              })}
              <Link to="/upcoming">
                <PlayCircleFilledRoundedIcon className="next-icon" />
              </Link>
            </div>
          </div>
          <div className="home__category">
            <h1>Trending</h1>
            <div className="movieCardss">
              {trending.map((movie) => {
                return (
                  <MovieCard
                    key={movie.id}
                    movieId={movie.id}
                    posterUrl={`${baseImageUrl}/w500/${movie.poster_path}`}
                    title={movie.title}
                  />
                );
              })}
              <Link to="/trending">
                <PlayCircleFilledRoundedIcon className="next-icon" />
              </Link>
            </div>
          </div>
          <div className="home__category">
            <h1>Top-Rated</h1>
            <div className="movieCardss">
              {topRated.map((movie) => {
                return (
                  <MovieCard
                    key={movie.id}
                    movieId={movie.id}
                    posterUrl={`${baseImageUrl}/w500/${movie.poster_path}`}
                    title={movie.title}
                  />
                );
              })}
              <Link to="/toprated">
                <PlayCircleFilledRoundedIcon className="next-icon" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;

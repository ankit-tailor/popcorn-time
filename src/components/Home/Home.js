import React, { useState } from "react";
import { baseImageUrl } from "../../backend";
import useFetchHome from "../../hooks/useFetchHome";
import useSearch from "../../hooks/useSearch";
import Banner from "../Banner";
import MovieCard from "../MovieCard";
import SearchList from "../SearchList";
import "./Home.css";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const { data: upcoming, bannerInfo } = useFetchHome("/movie/upcoming");
  const { data: trending } = useFetchHome("/trending/movie/week");
  const { data: topRated } = useFetchHome("/movie/top_rated");
  const { data: searchList, loading } = useSearch(searchTerm);
  const { backdrop_path, title, release_date } = bannerInfo;

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
      />
      {loading && (
        <div className="home__category">
          <h1>Search Result</h1>
          <h3>Loading...</h3>
        </div>
      )}
      {searchList.length > 0 && !loading ? (
        <div className="home__category">
          <h1>Search Result</h1>
          {searchList.map((movie) => {
            return (
              <SearchList
                title={movie.title}
                image={`${baseImageUrl}/w500/${movie.poster_path}`}
                rating={movie.vote_average}
                releaseDate={movie.release_date}
              />
            );
          })}
        </div>
      ) : (
        <div>
          <div className="home__category">
            <h1>Up Coming</h1>
            <div className="movieCards">
              {upcoming.map((movie) => {
                return (
                  <MovieCard
                    key={movie.id}
                    posterUrl={`${baseImageUrl}/w500/${movie.poster_path}`}
                    title={movie.title}
                  />
                );
              })}
            </div>
          </div>
          <div className="home__category">
            <h1>Trending</h1>
            <div className="movieCards">
              {trending.map((movie) => {
                return (
                  <MovieCard
                    key={movie.id}
                    posterUrl={`${baseImageUrl}/w500/${movie.poster_path}`}
                    title={movie.title}
                  />
                );
              })}
            </div>
          </div>
          <div className="home__category">
            <h1>Top-Rated</h1>
            <div className="movieCards">
              {topRated.map((movie) => {
                return (
                  <MovieCard
                    key={movie.id}
                    posterUrl={`${baseImageUrl}/w500/${movie.poster_path}`}
                    title={movie.title}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;

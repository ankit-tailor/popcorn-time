import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Trending.css";
import { baseImageUrl } from "../../backend";
import CustomPagination from "../../components/CustomPagination";
import SearchMovieCard from "../../components/SearchMovieCard";
import useFetchHome from "../../hooks/useFetchHome";
import image_not_found from "../../assets/images/image_not_found.jpg";

const Trending = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: trending,
    totalPages,
    loading,
  } = useFetchHome("/trending/movie/week", currentPage);

  useEffect(() => {
    window.scroll(0, 0);
    trending.length = 0;
  }, [currentPage]);

  return (
    <div className="trending">
      {loading && <CircularProgress className="spinner" />}
      <div className="grid">
        {trending &&
          trending.map((movie) => (
            <SearchMovieCard
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
      {!loading && (
        <CustomPagination
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      )}
    </div>
  );
};

export default Trending;

import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./TopRated.css";
import { baseImageUrl } from "../../backend";
import CustomPagination from "../../components/CustomPagination";
import SearchMovieCard from "../../components/SearchMovieCard";
import useFetchHome from "../../hooks/useFetchHome";
import image_not_found from "../../assets/images/image_not_found.jpg";

const TopRated = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: trending,
    totalPages,
    loading,
  } = useFetchHome("/movie/top_rated", currentPage);

  useEffect(() => {
    window.scroll(0, 0);
    trending.length = 0;
  }, [currentPage]);

  return (
    <div className="toprated">
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

export default TopRated;

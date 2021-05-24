import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./SearchPage.css";
import SearchIcon from "@material-ui/icons/Search";
import useSearch from "../../hooks/useSearch";
import { baseImageUrl } from "../../backend";
import CircularProgress from "@material-ui/core/CircularProgress";
import SearchMovieCard from "../../components/SearchMovieCard";
import { motion } from "framer-motion";
import image_not_found from "../../assets/images/image_not_found.jpg";
import CustomPagination from "../../components/CustomPagination";

function SearchPage() {
  const { searchTerm } = useParams();
  const [inputTerm, setInputTerm] = useState(searchTerm);
  const [currentPage, setCurrentPage] = useState(1);
  //   console.log(inputTerm);
  const {
    data: searchList,
    loading,
    totalPages,
  } = useSearch(inputTerm, currentPage);

  if (inputTerm === "") {
    searchList.length = 0;
  }

  useEffect(() => {
    window.scroll(0, 0);
  }, [searchList, setCurrentPage]);

  const handelSearch = (event) => {
    const searchItem = event.target.value;
    setInputTerm(searchItem);
  };

  return (
    <div className="search-page">
      <div className="search-page__input">
        <SearchIcon />
        <input
          type="text"
          placeholder="search your favourite movie, tv shows..."
          onChange={handelSearch}
          value={inputTerm}
        />
      </div>
      {loading && <CircularProgress className="spinner" />}
      {!loading && searchList.length === 0 && <h1>search item not found</h1>}
      {!loading && (
        <>
          {" "}
          <motion.div
            className="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {searchList.map((movie) => (
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
          </motion.div>
          {!loading && searchList.length > 0 && (
            <CustomPagination
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          )}
        </>
      )}
    </div>
  );
}

export default SearchPage;

import React, { useState } from "react";
import { useParams } from "react-router";
import "./SearchPage.css";
import SearchIcon from "@material-ui/icons/Search";
import useSearch from "../../hooks/useSearch";
import { baseImageUrl } from "../../backend";
import CircularProgress from "@material-ui/core/CircularProgress";
import SearchMovieCard from "../../components/SearchMovieCard";

function SearchPage() {
  const { searchTerm } = useParams();
  const [inputTerm, setInputTerm] = useState(searchTerm);
  //   console.log(inputTerm);
  const { data: searchList, loading, error } = useSearch(inputTerm, 1);

  if (inputTerm === "") {
    searchList.length = 0;
  }

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
      {searchList.length === 0 && <h1>search item not found</h1>}
      <div className="grid">
        {searchList.map((movie) => (
          <SearchMovieCard
            key={movie.id}
            posterUrl={
              movie.poster_path
                ? `${baseImageUrl}/w500/${movie.poster_path}`
                : "https://previews.123rf.com/images/vectorknight/vectorknight1807/vectorknight180700074/105231216-upset-magnifying-glass-cute-not-found-symbol-and-unsuccessful-search-zoom-for-404-icon-no-suitable-r.jpg"
            }
            title={movie.title}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;

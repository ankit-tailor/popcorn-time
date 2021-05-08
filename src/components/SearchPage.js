import React, { useState } from "react";
import { useParams } from "react-router";
import "./SearchPage.css";
import SearchIcon from "@material-ui/icons/Search";
import useSearch from "../hooks/useSearch";
import MovieCard from "./MovieCard";
import { baseImageUrl } from "../backend";

function SearchPage() {
  const { searchTerm } = useParams();
  const [inputTerm, setInputTerm] = useState(searchTerm);
  //   console.log(inputTerm);
  const { data: searchList, loading } = useSearch(inputTerm, 1);

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
      {loading && <h1>Loading...</h1>}
      {searchList.length === 0 && <h1>search item not found</h1>}
      <div className="grid">
        {searchList.map((movie) => (
          <MovieCard
            key={movie.id}
            posterUrl={`${baseImageUrl}/w500/${movie.poster_path}`}
            title={movie.title}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;

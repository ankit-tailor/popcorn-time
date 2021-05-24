import React, { useState } from "react";
import "./Header.css";
import HighlightRoundedIcon from "@material-ui/icons/HighlightRounded";
import MenuOpenRoundedIcon from "@material-ui/icons/MenuOpenRounded";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorderRounded";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";

function Header({ className, handelSearch }) {
  const [clicked, setClicked] = useState(false);
  const openNavigationbar = () => {
    setClicked(!clicked);
  };

  const closeNavigationbar = () => {
    // console.log("Close clicked");
    setClicked(false);
  };

  return (
    <div>
      <div className="header">
        <div className="mobile__option">
          {clicked ? (
            <CloseIcon className="menu__logo" onClick={closeNavigationbar} />
          ) : (
            <MenuOpenRoundedIcon
              className="menu__logo"
              onClick={openNavigationbar}
            />
          )}
        </div>
        <div className={clicked ? "header__brand collapse" : "header__brand"}>
          <Link to="/">
            <HighlightRoundedIcon
              className="header__logo"
              onClick={closeNavigationbar}
            />
          </Link>
          <Link className="link" to="/">
            <h4 className="brand__heading" onClick={closeNavigationbar}>
              PopCorn Time
            </h4>
          </Link>
        </div>
        <div
          className={clicked ? "header__category active" : "header__category"}
        >
          <Link className="link" to="/trending">
            <p onClick={closeNavigationbar}>Trending</p>
          </Link>
          <Link className="link" to="/upcoming">
            <p onClick={closeNavigationbar}>Up Coming</p>
          </Link>
          <Link className="link" to="/toprated">
            <p onClick={closeNavigationbar}>Top Rated</p>
          </Link>
          <Link className="link" to="/movies">
            <p onClick={closeNavigationbar}>Movies</p>
          </Link>
          <Link className="link" to="/tvshows">
            <p onClick={closeNavigationbar}>Tv Shows</p>
          </Link>
        </div>
        <div className="header__personal">
          <Link className="link" to="/bookmark">
            <BookmarkBorderIcon className="bookmark" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;

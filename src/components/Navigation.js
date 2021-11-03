import React, { Component, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navigation = () => {
  const saved = useSelector((state) => state.saved.value);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="data:image/webp;base64,UklGRjYEAABXRUJQVlA4TCoEAAAvooAJEM+htpHUaHhC99+pQ6ANRW0bSZ7jufyhLLvdqm0kNRqe0P136hBgIwCAkc7OO0e7/v+M3qDdAUsAAEW882Rvq6jQqKGjwsCGgywqduTosUDPGzV34PVhsZ2LABTHB6LCARBuVLzwAS7nACgOAFwQcYXwlB+e+BX33I8fj0DKuW/rnaXZGUbF8/uvuA2l3RYgTUBEhKlr2962bZ7sHQ8WYSW61B7U04myRXv+hwZQpjrwO6L/E8AwkqQoU4VwfLJi/tkeoCFE9H8CeGZYA5tAxca1ArqOtZKW6gkY9LJMVdJeVFugVT1/q4+wVT2N5OGkug11EXvVoWW6G1T7WA9peVHtEpD6c5+AtFK9LGuhOavuIvlO3ZKPO9VzUwVpr54ayuYFaE/qPtYANF3L9F7dT0C7WVChozpeUYvb37P0fd8UWLmi2KyXKWu313y6K3/NHu4mDZqOF1dukkZ9Dh4t88GsXVLLl2vamrtyk9TrdP70HbBXm0JjKDTqEeh0jrs3wIfZujPtW9iUVd/Err19y9rfEfQAQfVcCI6Fk+oIw0yPwOfZGlB0eofVWCku4tCpfSk6HQH9acJFhilbOOFMn+D13WwFXp2XxdQ2L6qOx4eo8xf1b9hnLoHGBdCZ75nvDh5nSOyHG4nwurGou76QL4HYJSkBzRlgbiSCueb+grTomm7ncez1sgzHYdU23SLd4i0fb5HkH4DcWmsXECRpOMWDDCQzs+uPCzAzm+5PJuPG8ioyPceX7D1fsy/XbRO2SO5wunK77LrTqG9iezCddOfnwqtcuy+suHaO99mXN3d3d3cfP93ItE5AdTO77myxrOlLGAvfLbifr9oUuhvdZ3fvs8d/UJAPySkClANpfiCOnXQH9Jdr0rrQ34hC8fU/aLobFtkx7wNdH7jK2KmgTsX+snoaHJ5Wp2W6yaepzzwjsd0BbVOdQXV9AeHJ98q+APGtYyH3EprjeXt0aCDZQhjcbo/Hca7HqQ+zpcXj+iroY2RKkgHX+KFLEkA+eEG6qO4jgABpr3qZ683U/WwMNxIUreaXTHI9QvqjOQuEsvsVguoQAUZHgJQZZuLrxKvnbAuYO03UL50wdB5p2hrmDivaQ8xW5MGQscoibGb5UPrCTA24vwT5ABCdHt6zxlnoZ4kff/gDaPUUCwsXhbjXFkirOR5K7+bqQKib8Q4pTVdZdlfgPanhA9d9MB74jWIKFNPZcwFCohhneFV6M5fwqQ7ptkCRUnNzld0ArrcNSS1H+AJPuSX1OgM/PqldqSqbo+dvU+ZT7dljUwXxpHoMpUEdSuGouos1AN2g2qesVdss9aqnllpMK9XLEiCGCNBdVLtERY471XNDuTmrbiKV2Z5UtwlIa9VToD5TN6gbYKUOC+o0rlRAXSWqNewHYNiNVG0AArUJ"
            alt=""
            width="170"
            height="40"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/programming" className="nav-link">
                Programming
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/covid" className="nav-link">
                Covid-19
              </Link>
            </li>
            <li className="nav-item position-relative">
              <Link to="/saved" className="nav-link">
                Saved
                <span class="position-absolute mt-1 ml-1 start-100 translate-middle badge rounded-pill bg-warning">
                  {saved.length == 0
                    ? null
                    : saved.length > 99
                    ? "99+"
                    : saved.length}
                </span>
              </Link>
            </li>
          </ul>

          <div className="search-box">
            <Link
              to={{
                pathname: `/search/${searchValue}`,
              }}
            >
              <button className="btn-search" onSubmit={handleSubmit}>
                <i className="fas fa-search" style={{ color: "black" }}></i>
              </button>
              <input
                type="text"
                className="input-search"
                placeholder="Type to Search..."
                onChange={handleSearch}
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

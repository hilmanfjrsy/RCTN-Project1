import React, { Component, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { GlobalVar } from "../config/GlobalVar";

const Navigation = () => {
  const history = useHistory();
  const saved = useSelector((state) => state.saved.value);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchValue === "") {
      history.push(`/`);
    } else {
      history.push(`/search/${searchValue}`);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <h4 style={{color:GlobalVar.baseColor,fontWeight:'bold'}}>Kelompok 2</h4>
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
                <span className="position-absolute mt-1 ml-1 start-100 translate-middle badge rounded-pill bg-warning">
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
            <form className="form-input-search" onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-on-typing"
                placeholder="Type to Search..."
                onChange={handleSearch}
                value={searchValue}
              />
              <button className="btn-search">
                <i className="fas fa-search" style={{ color: "black" }}></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

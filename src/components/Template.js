import React, { Component, useState } from "react";
import Navigation from './Navigation'
import "../Global-styles.css";

export default function Template({ children }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Navigation />
      {children}
    </>
  );
}

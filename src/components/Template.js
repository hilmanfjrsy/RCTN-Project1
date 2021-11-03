import React, { Component, useState } from "react";
import Navigation from "./Navigation";
import "../Global-styles.css";

export default function Template({ children }) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}

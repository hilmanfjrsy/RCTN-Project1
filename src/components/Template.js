import React from "react";
import "../Global-styles.css";
import Navigation from "./Navigation";

export default function Template({children}) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}

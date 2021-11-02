import React, { Component, useEffect } from "react";
import CardNews from "../components/CardNews";
import { useSelector } from "react-redux";
import EmptyPages from "../components/EmptyPages";

export default function Saved() {
  const saved = useSelector((state) => state.saved.value)

  return (
    <div className="wrap container">
      {saved.length > 0 ?
        saved.map((item, index) => (
          <CardNews item={item} index={index} key={index} />
        ))
        :
        <EmptyPages />
      }
    </div>
  );
}

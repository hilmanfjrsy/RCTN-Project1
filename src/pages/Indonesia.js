import React, { Component, useEffect, useState } from "react";
import CardNews from "../components/CardNews";
import { getRequest } from "../config/GlobalFunc";

export default function Indonesia() {
  const [indonesia, setIndonesia] = useState([]);
  async function indonesianNews() {
    let res = await getRequest("v2/top-headlines?country=id");
    setIndonesia(res.data.articles);
    console.log(res.data.articles);
  }

  useEffect(() => {
    indonesianNews();
  }, []);
  return (
    <div className="wrap container">
      {indonesia.map((item, index) => (
        <CardNews item={item} index={index} key={index} />
      ))}
    </div>
  );
}

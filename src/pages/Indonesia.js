import React, { Component, useEffect, useState } from "react";
import CardNews from "../components/CardNews";
import CardLoader from "../components/CardLoader";
import EmptyPages from "../components/EmptyPages";
import { getRequest } from "../config/GlobalFunc";

export default function Indonesia() {
  const loadData = [1, 2, 3, 4, 5, 6, 7, 8]
  const [page, setPage] = useState(1);
  const [indonesia, setIndonesia] = useState([]);
  const [checkData, setCheckData] = useState(1);
  const [isLoading, setIsLoading] = useState(false)

  async function indonesianNews() {
    setIsLoading(true)
    if (checkData > 0) {
      let res = await getRequest(`top-headlines?country=id&page=${page}`);
      setCheckData(res.data.articles.length)
      if (res.data.articles.length > 0) {
        setIndonesia([...indonesia, ...res.data.articles]);
      }
    }
    setIsLoading(false)
  }

  const isScrolling = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }
    setPage((v) => v + 1)
  };

  useEffect(() => {
    window.addEventListener("scroll", isScrolling);
    return () => window.removeEventListener("scroll", isScrolling);
  }, []);

  useEffect(() => {
    indonesianNews();
  }, [page]);

  return (
    <div className="wrap container">
      {indonesia.length == 0 && !isLoading ? <EmptyPages /> : null}
      {indonesia.map((item, index) => (
        <CardNews item={item} index={index} key={index} />
      ))}
      {isLoading ? loadData.map((item) => <CardLoader key={item} />) : null}
    </div>
  );
}

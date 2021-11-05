import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router";
import CardLoader from "../components/CardLoader";
import CardNews from "../components/CardNews";
import EmptyPages from "../components/EmptyPages";

import { getRequest } from "../config/GlobalFunc";

export default function Search() {
  let { searchParams } = useParams();
  const loadData = [1, 2, 3, 4, 5, 6, 7, 8]
  const [search, setSearch] = useState([]);
  const [pages, setPages] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  const [checkData, setCheckData] = useState(1);

  async function searchNews() {
    setIsFetching(true);
    if (checkData > 0) {
      let res = await getRequest(`everything?q=${searchParams}&page=${pages}`);
      setCheckData(res.data.articles.length)
      if (res.data.articles.length > 0) {
        setSearch(res.data.articles);
        console.log(res.data.articles);
      }
    }
    setIsFetching(false);
  }

  const isScrolling = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }
    setPages((v) => v + 1)
  };

  useEffect(() => {
    window.addEventListener("scroll", isScrolling);
    return () => window.removeEventListener("scroll", isScrolling);
  }, []);

  useEffect(() => {
    searchNews();
  }, [searchParams,pages]);

  return (
    <div className="wrap container">
      {search.length == 0 && !isFetching ? <EmptyPages /> : null}
      {search.map((item, index) => (
        <CardNews item={item} index={index} key={index} />
      ))}
      {isFetching ? loadData.map((item) => <CardLoader key={item} />) : null}
    </div>
  );
}

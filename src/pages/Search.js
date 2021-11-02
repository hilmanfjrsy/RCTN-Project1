import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router";
import CardNews from "../components/CardNews";

// import { Container } from "react-bootstrap";

import { getRequest } from "../config/GlobalFunc";

export default function Search() {
  let { searchParams } = useParams();
  const [search, setSearch] = useState([]);

  async function searchNews() {
    let res = await getRequest(`v2/everything?q=${searchParams}`);
    setSearch(res.data.articles);
    console.log(res.data.articles);
  }

  useEffect(() => {
    searchNews();
  }, [searchParams]);
  return (
    <div className="wrap container">
      {search.map((item, index) => (
        <CardNews item={item} index={index} key={index} />
      ))}
    </div>
  );
}

import React, { useState, useEffect } from "react";
import moment from "moment";
import { getRequest } from "../config/GlobalFunc";
import CardNews from "../components/CardNews";
import CardLoader from "../components/CardLoader";
import EmptyPages from "../components/EmptyPages";

const Covid = () => {
  const loadData = [1, 2, 3, 4, 5, 6, 7, 8]
  const [pages, setPages] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  const [checkData, setCheckData] = useState(1);
  const [lastCovid, setLastCovid] = useState([]);
  var lastOneMonth = moment().subtract(1, "months").format("YYYY-MM-DD");

  async function lastOneMonthCovid() {
    setIsFetching(true);
    if (checkData > 0) {
      let res = await getRequest(
        `everything?q=COVID-19&from=${lastOneMonth}&sortBy=publishedAt&page=${pages}`
      );
      setCheckData(res.data.articles.length)
      if (res.data.articles.length > 0) {
        setLastCovid([...lastCovid, ...res.data.articles]);
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
    lastOneMonthCovid();
  }, [pages]);

  return (
    <div className="container mt-5">
      <h4 className="mt-5 text-center">Covid-19 Last One Month</h4>
      <div className="wrap container">
        {lastCovid.length == 0 && !isFetching ? <EmptyPages /> : null}
        {lastCovid.map((item, index) => {
          return <CardNews key={index} item={item} index={index} />;
        })}
        {isFetching ? loadData.map((item) => <CardLoader key={item} />) : null}
      </div>
    </div>
  );
};

export default Covid;

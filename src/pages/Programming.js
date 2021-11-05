import React, { useState, useEffect } from "react";
import moment from "moment";
import { getRequest } from "../config/GlobalFunc";
import CardNews from "../components/CardNews";
import EmptyPages from "../components/EmptyPages";
import CardLoader from "../components/CardLoader";

const Programming = () => {
  const loadData = [1, 2, 3, 4, 5, 6, 7, 8]
  const [pages, setPages] = useState(1)
  const [lastProgramming, setLastProgramming] = useState([]);
  const [checkData, setCheckData] = useState([1]);
  const [isFetching, setIsFetching] = useState(false)
  var lastOneMonth = moment().subtract(1, "months").format("YYYY-MM-DD");

  async function lastOneMonthProgramming() {
    setIsFetching(true)
    if (checkData > 0) {
      let res = await getRequest(
        `everything?q=programming&from=${lastOneMonth}&sortBy=publishedAt&page=${pages}`
      );
      setCheckData(res.data.articles.length)
      if (res.data.articles.length > 0) {
        setLastProgramming([...lastProgramming, ...res.data.articles])
      }
    }
    setIsFetching(false)
  }
  const isScrolling = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
      return;
    }
    setPages((v) => v + 1)
  }

  useEffect(() => {
    window.addEventListener("scroll", isScrolling);
    return () => window.removeEventListener("scroll", isScrolling);
  }, [])

  useEffect(() => {
    lastOneMonthProgramming()
  }, [pages])


  return (
    <div className="container mt-5">
      <h4 className="mt-5 text-center">Programming Last One Month</h4>
      <div className="wrap container">
        {lastProgramming.length == 0 && !isFetching ? <EmptyPages /> : null}
        {lastProgramming.map((item, index) => {
          return <CardNews key={index} item={item} index={index} />;
        })}
        {isFetching ? loadData.map((item) => <CardLoader key={item} />) : null}
      </div>
    </div>
  );
};

export default Programming;

import React, { useState, useEffect } from "react";
import moment from "moment";
import { getRequest } from "../config/GlobalFunc";
import CardNews from "../components/CardNews";

const Covid = () => {
  const [pages, setPages] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  const [lastCovid, setLastCovid] = useState([]);
  var lastOneMonth = moment().subtract(1, "months").format("YYYY-MM-DD");

  async function lastOneMonthCovid() {
    let res = await getRequest(
      `everything?q=corona-virus&from=${lastOneMonth}&sortBy=publishedAt&lenguage=en`
    );
    setLastCovid([...lastCovid, ...res.data.articles]);
    setPages(pages + 1);
    setIsFetching(false);
  }

  const isScrolling = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }
    setIsFetching(true);
  };

  useEffect(() => {
    lastOneMonthCovid();
    window.addEventListener("scroll", isScrolling);
    return () => window.removeEventListener("scroll", isScrolling);
  }, []);

  useEffect(() => {
    if (isFetching) {
      lastOneMonthCovid();
    }
  }, [isFetching]);
  return (
    <div className="container mt-5">
      <h4 className="mt-5 text-center">Covid-19 Last One Month</h4>
      <div className="wrap">
        {lastCovid.map((item, index) => {
          return <CardNews key={index} item={item} index={index} />;
        })}
      </div>
      <hr className="hr" />
    </div>
  );
};

export default Covid;

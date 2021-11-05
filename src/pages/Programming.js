import React, { useState, useEffect } from "react";
import moment from "moment";
import { getRequest } from "../config/GlobalFunc";
import CardNews from "../components/CardNews";

const Programming = () => {
  const [pages, setPages] = useState(1)
  const [lastProgramming, setLastProgramming] = useState([]);
  const [isFetching, setIsFetching] = useState(false)
  var lastOneMonth = moment().subtract(1, "months").format("YYYY-MM-DD");

  async function lastOneMonthProgramming() {
    let res = await getRequest(
      `everything?q=programming&from=${lastOneMonth}&sortBy=publishedAt&lenguage=en&page=${pages}`
    );
    setLastProgramming([ ...lastProgramming ,...res.data.articles])
    setPages(pages+1)
    setIsFetching(false)
  }
  const isScrolling =()=>{
    if(window.innerHeight + document.documentElement.scrollTop!==document.documentElement.offsetHeight){
      return;
    }
    setIsFetching(true)
  }
  
  useEffect(() => {
    lastOneMonthProgramming()
    window.addEventListener("scroll", isScrolling);
    return () => window.removeEventListener("scroll", isScrolling);
  }, [])

  useEffect(() => {
  if(isFetching){
    lastOneMonthProgramming()
  }
  }, [isFetching])

  
  return (
    <div className="container mt-5">
      <h4 className="mt-5 text-center">Programming Last One Month</h4>
      <div className="wrap">
        {lastProgramming.map((item, index) => {
          return <CardNews key={index} item={item} index={index} />;
        })}
      </div>
      <hr className="hr" />
    </div>
  );
};

export default Programming;

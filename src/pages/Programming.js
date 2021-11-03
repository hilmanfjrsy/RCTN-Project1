import React, { useState, useEffect } from "react";
import BigCard from "../components/BigCard";
import HorizontalCard from "../components/HorizontalCard";
import moment from "moment";
import { getRequest } from "../config/GlobalFunc";
import CardNews from "../components/CardNews";

const Programming = () => {
  const pages = 1
  const [lastProgramming, setLastProgramming] = useState([]);
  const [oneMonthProgram, setOneMonthProgram] = useState([]);
  var LastOneMonth = moment().subtract(1, "months").format("YYYY-MM-DD");

  async function lastOneMonthProgramming() {
    let res = await getRequest(
      `everything?q=programming&from=${LastOneMonth}&sortBy=publishedAt&lenguage=en&page=${pages}`
    );
    setLastProgramming(res.data.articles);
    
  }
  async function oneMonthProgramming({newPages}) {
    console.log(newPages)
    let res = await getRequest(
      `v2/everything?q=programming&from=${LastOneMonth}&sortBy=publishedAt&lenguage=en&page=${newPages}`
    );
    setOneMonthProgram(res.data.articles);
    
  }

  // useEffect(() => {
  //   lastOneMonthProgramming();
  // }, []);

  useEffect(() => {
    lastOneMonthProgramming();
    window.addEventListener("scroll", () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      console.log({ scrollTop, scrollHeight, clientHeight });

      if (clientHeight + scrollTop === scrollHeight) {
        const newPages = pages + 1
        oneMonthProgramming({newPages});
       console.log("Load more pages")
      }
    });
  }, []);
  
  return (
    <div className="container mt-5">
      <h4 className="mt-5">Programming Last One Month</h4>
      <div className="wrap">
        {lastProgramming.map((item, index) => {
          return <CardNews key={index} item={item} index={index} />;
        })}
        {oneMonthProgram.map((item, index) => {
          return <CardNews key={index} item={item} index={index} />;
        })}
      </div>
      <hr className="hr" />
    </div>
  );
};

export default Programming;

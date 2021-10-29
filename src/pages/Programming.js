import React, { useState, useEffect } from "react";
import BigCard from "../components/BigCard";
import HorizontalCard from "../components/HorizontalCard";
import moment from "moment";
import { getRequest } from "../config/GlobalFunc";
import DefaultCard from "../components/DefaultCard";

const Programming = () => {
  const [programming, setProramming] = useState([]);
  const [trendings, setTrendings] = useState([]);
  const [lastProgramming, setLastProgramming] = useState([]);
  var LastOneMonth = moment().subtract(1, "months").format("YYYY-MM-DD");
  async function newsProgramming() {
    let res = await getRequest(
      `v2/everything?q=programming&from=${LastOneMonth}&sortBy=trending&lenguage=en&pageSize=1`
    );
    setProramming(res.data.articles);
  }
  async function newsTrendings(){
    let res = await getRequest(`v2/everything?q=programming&from=${LastOneMonth}&sortBy=trendings&lenguage=en&pageSize=3`)
    console.log(res.data.articles)
    setTrendings(res.data.articles)
}
async function lastOneMonthProgramming(){
  let res = await getRequest(`v2/everything?q=programming&from=${LastOneMonth}&sortBy=publishedAt&lenguage=en`)
  setLastProgramming(res.data.articles)
}

  useEffect(() => {
    newsProgramming();
    newsTrendings();
    lastOneMonthProgramming();
  }, []);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-7">
        <div>
          {programming.map((item, index) => {
           return <BigCard
           Url={item.url}
            key={index}
            urlImage={item.urlToImage}
            Title={item.title}
            Desc={item.description}
            Date={item.publishedAt}
            />;
          })}
        </div>
        </div>
        <div className="col-sm-5">
          
          {trendings.map((item,index)=>{
              return <HorizontalCard key={index} Url={item.url} urlImage={item.urlToImage} Title={item.title} Date={moment(item.publishedAt).format('DD MMM YYYY')}/>
          })}
        </div>
      </div>
      <hr className="hr" />
      <h4 className="mt-5">Programming Last One Month</h4>
      <div className="wrap">
        {lastProgramming.map((item,index)=>{
          return <DefaultCard key={index} Url={item.url} urlImage={item.urlToImage} Title={item.title} Date={moment(item.publishedAt).format('DD MMM YYYY')} Description={item.description}/>
        })}
        <DefaultCard />  
      </div>
      <hr className="hr" />  
    </div>
  );
};

export default Programming;

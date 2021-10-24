import React, { Component, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import CardNews from "../components/CardNews";
import { getRequest } from "../config/GlobalFunc";
import moment from 'moment';
export default function Programming() {
  const [programming, setProramming] = useState([]);
  var LastOneMonth = moment().subtract(1, 'months').format('YYYY-MM-DD');
  async function newsProgramming() {
    let res = await getRequest(`v2/everything?q=programming&from=${LastOneMonth}&sortBy=publishedAt&lenguage=en`);
    setProramming(res.data.articles);
    console.log(res.data.articles);
  }

  useEffect(() => {
    newsProgramming();
  }, []);
  return (
    <div>
      {programming.map((item, index) => (
        <CardNews item={item} index={index} key={index} />
      ))}
    </div>
  );
}

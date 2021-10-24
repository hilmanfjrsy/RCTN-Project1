import React, { Component, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import CardNews from "../components/CardNews";
import { getRequest } from "../config/GlobalFunc";
import moment from 'moment';

export default function Covid() {
  const [covid, setCovid] = useState([]);
  var LastOneMonth = moment().subtract(1, 'months').format('YYYY-MM-DD');
  async function newsCovid() {
    let res = await getRequest(`v2/everything?q=covid-19&from=${LastOneMonth}&sortBy=publishedAt&lenguage=en`);
    setCovid(res.data.articles);
    console.log(res.data.articles);
  }

  useEffect(() => {
    newsCovid();
  }, []);
  return (
    <div>
      {covid.map((item, index) => (
        <CardNews item={item} index={index} key={index} />
      ))}
    </div>
  );
}

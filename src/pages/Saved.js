import React, { Component, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import CardNews from '../components/CardNews';
import { getRequest } from '../config/GlobalFunc';
import data from '../dummy.json'

export default function Saved() {
  async function getDummy() {
    let res = await getRequest('v2/everything?q=bitcoin')
    console.log(res)
  }

  useEffect(()=>{
    getDummy()
  },[])
  return(
    <div>
      {data.articles.map((item,index)=><CardNews item={item} index={index} key={index} />)}
    </div>
  )
}
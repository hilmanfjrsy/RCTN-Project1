import React, { Component } from 'react';
import EmptyImage from "../assets/empty.png"

export default function EmptyPages() {
  return(
    <div className="align-self-center text-center" style={{width:'inherit'}}>
      <img src={EmptyImage} style={{objectFit:'contain',width:300,height:300}} />
      <br/>
      <small>Data tidak ditemukan</small>
    </div>
  )
}
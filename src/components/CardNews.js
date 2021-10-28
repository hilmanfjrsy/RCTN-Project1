import moment from 'moment';
import React, { Component, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { GlobalVar } from '../config/GlobalVar';
import imageEmpty from '../assets/noimage.png'

export default function CardNews({ item, index }) {
  const [bookmark, setBookmark] = useState(false)
  const [imageError, setImageError] = useState(false)
  return (
    <div className="card-container">
      <img setImageError={() => setImageError(true)} src={imageError || !item.urlToImage ? imageEmpty : item.urlToImage} className="card-image" />
      <div className="card-text">
        <Row>
          <Col xs={8} md={10}>
            <p className="name" style={{ color: GlobalVar.baseColor }}>{item.source?.name}</p>
            {item.author ? <p className="author mb-3">by {item.author}</p> : null}
          </Col>
          <Col xs={4} md={2}>
            <button
              onClick={() => { bookmarkAction() }}
              className="btn-bookmark">
              <i className="fas fa-bookmark" style={{ fontSize: 20, color: bookmark ? GlobalVar.baseColor : GlobalVar.greyColor }} ></i>
            </button>
          </Col>
        </Row>
        <a href={item.url} target="_blank">
          <h6 className="title" style={{ color: GlobalVar.baseColor }}>{item.title}</h6>
        </a>
        <p className="description">{item.description}</p>
        <p className="author mt-3">Published {moment(item.publishedAt).format('DD MMM YYYY')}</p>
      </div>
    </div>
  )

  function bookmarkAction() {
    if (bookmark) {
      toast.error("Deleted Bookmark", GlobalVar.toastOption)
    } else {
      toast.success("Saved Bookmark", GlobalVar.toastOption)
    }
    setBookmark(!bookmark)
  }
}
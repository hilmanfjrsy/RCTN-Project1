import moment from 'moment';
import React, { Component, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { removeSaved, addSaved } from '../redux/slice/savedSlice'
import { toast } from 'react-toastify';
import { GlobalVar } from '../config/GlobalVar';
import imageEmpty from '../assets/noimage.png'

export default function CardNews({ item, index }) {
  const dispatch = useDispatch()
  const saved = useSelector((state) => state.saved.value)
  const [bookmark, setBookmark] = useState(false)

  useEffect(() => {
    let checkBookmark = saved.find(save => JSON.stringify(save) === JSON.stringify(item))
    if (checkBookmark) {
      setBookmark(true)
    } else {
      setBookmark(false)
    }
  }, [item])


  return (
    <div className="card-container">
      <img src={!item.urlToImage ? imageEmpty : item.urlToImage} onError={(e) => (e.target.onerror = null, e.target.src = imageEmpty)} className="card-image" />
      <div className="card-text">
        <div className="d-flex row justify-content-between align-items-center mb-1">
          <div className="col-md-10">
            <p className="name" style={{ color: GlobalVar.baseColor }}>{item.source?.name}</p>
            {item.author ? <p className="author">by {item.author}</p> : null}
          </div>
          <div className="col-md-2 p-0">
            <button
              onClick={() => { bookmarkAction(item) }}
              className="btn-bookmark m-0">
              <i className="fas fa-bookmark" style={{ fontSize: 20, color: bookmark ? GlobalVar.baseColor : GlobalVar.greyColor }} ></i>
            </button>
          </div>
        </div>
        <a href={item.url} target="_blank">
          <h6 className="title clamp">{item.title}</h6>
        </a>
        <p className="description">{item.description}</p>
        <p className="author mt-3">Published {moment(item.publishedAt).format('DD MMM YYYY')}</p>
      </div>
    </div>
  )

  function bookmarkAction(item) {
    if (bookmark) {
      dispatch(removeSaved(item))
      toast.error("Deleted Bookmark", GlobalVar.toastOption)
    } else {
      dispatch(addSaved(item))
      toast.success("Saved Bookmark", GlobalVar.toastOption)
    }
    setBookmark(!bookmark)
  }
}
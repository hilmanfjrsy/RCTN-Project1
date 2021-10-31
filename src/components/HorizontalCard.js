import { BookmarkIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { GlobalVar } from "../config/GlobalVar";

const HorizontalCard = ({ Title, urlImage, Date , Url}) => {
  const [bookmark, setBookmark] = useState(false);
  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-6 d-flex align-items-center">
          <img src={urlImage} className="img-fluid rounded-start" alt="..." style={{Height: '100px'}}/>
        </div>
        <div className="col-md-1">
        <button
              onClick={() => {
                bookmarkAction();
              }}
              className="btn-bookmark"
            >
              <BookmarkIcon
                style={{
                  color: bookmark ? GlobalVar.baseColor : GlobalVar.greyColor,
                }}
              />
            </button>
        </div>
        <div className="col-md-5">
          <div className="card-body">
            <a href={Url}><h5 className="card-title-horizontal fs-6 clamp">{Title}</h5></a>
            <p className="fs-6">
              <small className="text-muted">Published {Date}</small>
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
  function bookmarkAction() {
    if (bookmark) {
      toast.error("Deleted Bookmark", GlobalVar.toastOption);
    } else {
      toast.success("Saved Bookmark", GlobalVar.toastOption);
    }
    setBookmark(!bookmark);
  }
};

export default HorizontalCard;

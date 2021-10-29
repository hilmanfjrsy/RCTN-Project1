import { BookmarkIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { GlobalVar } from "../config/GlobalVar";

const DefaultCard = ({Title, urlImage, Description, Date, Url}) => {
    const [bookmark, setBookmark] = useState(false);
  return (
    <div className="card mt-4 mb-4" style={{width:'18rem'}}>
      <img src={urlImage} className="card-img-top" alt="..." style={{maxHeight: '150px'}}/>
      <div className="mt-2">
        <div className="d-flex justify-content-between">
        <a href={Url}><h5 className="card-title fs-6 clamp" style={{maxWidth: '230px'}}>{Title}</h5></a>
        <button
              onClick={() => {
                bookmarkAction();
              }}
              className="bookmark"
            >
              <BookmarkIcon
                style={{
                  color: bookmark ? GlobalVar.baseColor : GlobalVar.greyColor,
                }}
              />
            </button>
        </div>
        <p className="fs-7">
          {Description}
        </p>
        <p className="fs-7 mt-2">Published {Date}</p>
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

export default DefaultCard;

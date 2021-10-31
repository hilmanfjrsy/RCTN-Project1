import React from "react";

const BigCard = ({urlImage, Title, Url, Date}) => {
  return (
    <div className="card mb-3">
      <img src={urlImage} className="card-img-top" alt="..."/>
      <div className="card-body">
        <a href={Url}><h5 className="card-title">{Title}</h5></a>
        <p className="fs-4">
          <small className="text-muted">Published {Date}</small>
        </p>
      </div>
    </div>
  );
};

export default BigCard;

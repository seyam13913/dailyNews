import React from "react";

const NewsItem = (props) => {
  const { title, description, urlToImage, publishedAt, source, url } = props;
  return (
    <div className=" container my-3">
      <div className="card">
        <img src={urlToImage} className="card-img-top" alt="urlToImage" />
        <div className="card-body">
          <h5 className="card-title">
            {title.slice(0, 35)}...
            <span className="position-absolute top-0 start-50 translate-middle rounded-pill badge bg-info text-dark">
              {source.name}
              <span className="visually-hidden">unread messages</span>
            </span>
          </h5>
          <p className="card-text">{description.slice(0, 70)}...</p>
          <p className="card-text">
            <small className="text-muted">
              Last updated {new Date(publishedAt).toGMTString()} mins ago
            </small>
          </p>
          <a href={url} className="btn btn-sm btn-dark">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;

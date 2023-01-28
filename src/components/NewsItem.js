import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    const { title, description, urlToImage, publishedAt, url } = this.props;
    return (
      <div className=" container my-3  ">
        <div className="card">
          <img src={urlToImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title.slice(0, 35)}...</h5>
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
  }
}

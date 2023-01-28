import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner/Spinner";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      inLoading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8f91f6d22e4c4597bb189ebc0c208191";
    this.setState({ inLoading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      inLoading: false,
    });
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8f91f6d22e4c4597bb189ebc0c208191&page=${
      this.state.page - 1
    }&pageSize=20`;
    this.setState({ inLoading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state - 1,
      articles: parseData.articles,
      inLoading: false,
    });
  };
  handleNextClick = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 20))) {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8f91f6d22e4c4597bb189ebc0c208191&page=${
        this.state.page + 1
      }&pageSize=20`;
      this.setState({ inLoading: true });
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        page: this.state + 1,
        articles: parseData.articles,
        inLoading: false,
      });
    }
  };

  render() {
    return (
      <div className="container my-3 ">
        <h2 className="text-center">Daily News - Top Headlines</h2>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            onClick={this.handlePrevClick}
            type="button"
            className="btn btn-dark"
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.floor(this.state.totalResults / 20)
            }
            onClick={this.handleNextClick}
            type="button"
            className="btn btn-dark"
          >
            Next &rarr;
          </button>
        </div>
        {this.state.inLoading && <Spinner />}
        <div className="row">
          {this.state.articles?.map((news) => {
            console.log(this.state.articles);
            const { title, description, urlToImage, url } = news;
            return (
              <div className="col-md-4" key={url}>
                <NewsItem
                  title={title ? title : ""}
                  description={description ? description : "  "}
                  urlToImage={
                    !urlToImage
                      ? "https://media.gettyimages.com/id/1183370267/photo/man-war-journalist-with-camera.jpg?s=612x612&w=0&k=20&c=sPijDuHBJjl41OevpToIA8S0N2WsXA-S3TR7LLnyQrE="
                      : urlToImage
                  }
                  url={url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

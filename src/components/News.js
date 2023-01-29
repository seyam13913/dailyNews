import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner/Spinner";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      inLoading: false,
      page: 1,
    };
    document.title = `${this.props.category}-Daily News`;
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=8f91f6d22e4c4597bb189ebc0c208191&page=${this.state.page}&pageSize=20`;
    this.setState({ inLoading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      inLoading: false,
    });
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
      this.props.category
    }&apiKey=8f91f6d22e4c4597bb189ebc0c208191&page=${
      this.state.page - 1
    }&pageSize=20`;
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
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };
  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  render() {
    return (
      <div className="container my-3 ">
        <h2 className="text-center m-3">Daily News {this.props.category}</h2>
        <div className="container d-flex justify-content-between my-3">
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
            const { title, description, urlToImage, publishedAt, source, url } =
              news;
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
                  publishedAt={publishedAt}
                  source={source}
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

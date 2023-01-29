import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.props.category}-Daily News`;
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=336f068034984ac6a23bb33e144a0f9a&page=${this.state.page}&pageSize=20`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=336f068034984ac6a23bb33e144a0f9a&page=${this.state.page}&pageSize=20`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
      loading: false,
    });
  };

  render() {
    return (
      <div className="container my-3 ">
        <h2 className="text-center m-3">Daily News {this.props.category}</h2>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={this.state.loading ? <Spinner /> : ""}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((news) => {
                const {
                  title,
                  description,
                  urlToImage,
                  publishedAt,
                  source,
                  url,
                } = news;
                return (
                  <div className="col-md-4" key={url}>
                    <NewsItem
                      title={title ? title : ""}
                      description={description ? description : ""}
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
        </InfiniteScroll>
      </div>
    );
  }
}

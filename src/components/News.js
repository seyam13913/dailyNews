import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
// import Spinner from "./spinner/Spinner";
// import InfiniteScroll from "react-infinite-scroll-component";
import { useGetDailyNewsQuery } from "./api/apiCall";

const News = (props) => {
  const { category } = props;

  const fetchData = useGetDailyNewsQuery({
    category: `${category}`,
    country: "in",
  });
  const fetchStatusData = fetchData.currentData;
  console.log(fetchStatusData);
  const [articlesData, setArticlesData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [page, setPage] = useState(1);
  // const [totalResults, setTotalResults] = useState(0);

  // const updateNews = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=ar&category=${props.category}&apiKey=336f068034984ac6a23bb33e144a0f9a&page=${page}&pageSize=20`;
  //   setLoading(true);
  //   let data = await fetch(url);
  //   let parseData = await data.json();
  //   setArticles(parseData.articles);
  //   setTotalResults(parseData.totalResults);
  //   setLoading(false);
  // };

  useEffect(() => {
    //   setLoading(true);
    setArticlesData(fetchData?.currentData?.articles);
    //   setLoading(false);
    //   setTotalResults(currentData.totalResults);
    //   document.title = `${props.category}-Daily News`;
    // eslint-disable-next-line
  }, [fetchData]);

  // const fetchMoreData = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=ar&category=${
  //     props.category
  //   }&apiKey=336f068034984ac6a23bb33e144a0f9a&page=${page + 1}&pageSize=20`;
  //   setPage(page + 1);
  //   setLoading(true);
  //   let data = await fetch(url);
  //   let parseData = await data.json();
  //   setArticles(articles.concat(parseData.articles));
  //   setTotalResults(parseData.totalResults);
  //   setLoading(false);
  // };

  return (
    <div className="container mt-5 pt-5">
      {/* <h2 className="text-center">Daily News {category}</h2> */}
      {/* {loading && <Spinner />} */}
      {/* <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={loading ? <Spinner /> : ""}
      > */}
      <div className="container">
        <div className="row">
          {articlesData?.map((news) => {
            const { title, description, urlToImage, publishedAt, source, url } =
              news;
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
      {/* </InfiniteScroll> */}
    </div>
  );
};

export default News;

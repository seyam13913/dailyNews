import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner/Spinner";
import { useGetDailyNewsQuery } from "./api/apiCall";

const News = (props) => {
  const { category } = props;

  const fetchData = useGetDailyNewsQuery({
    category: `${category}`,
    country: "it",
  });

  const [articlesData, setArticlesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setArticlesData(fetchData?.currentData?.articles);
    setLoading(false);
    document.title = `${category}-Daily News`;
    // eslint-disable-next-line
  }, [fetchData]);

  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-center">Daily News {category}</h2>
      {loading && <Spinner />}
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
    </div>
  );
};

export default News;

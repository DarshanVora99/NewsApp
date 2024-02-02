import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalArticles, setTotalArticles] = useState(0)


  document.title = new String(props.category).toLocaleUpperCase() + " News"

  // useEffect
  useEffect(() => {
    updateNews();
  }, [])


  const updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5b1cc141fd0645109311ff99ce3718a8&page=${page}&pagesize=${props.pageSize}`;

    setLoading(true)

    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles((prevArticles) => [...prevArticles, ...parsedData.articles]);
      setTotalArticles(parsedData.totalResults)

    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false)
    }
  }



  const fetchMoreData = async () => {

    
    setPage(page + 1);
    updateNews();

  };

  console.log("I am render");

  return (
    <div className="container my-3">
      <h3 className="text-center" style={{ margin: "30px 0px" }}>News App Top   {new String(props.category).toUpperCase()} Headlines </h3>




      <div className="row">

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalArticles}
          loader={<h4>Loading...</h4>}
        >
          {articles.map((element) => (
            <div className="col md-4" key={element.url}>
              <NewsItem
                title={element.title}
                desc={element.description ? element.description : ""}
                imgurl={
                  element.urlToImage
                    ? element.urlToImage
                    : "https://images.hindustantimes.com/tech/img/2023/10/25/1600x900/Aditya-L1_ANI_1_1698222016761_1698222067264.jpg"
                }
                newsurl={element.url}
                author={element.author ? element.author : "Unknown"}
                date={element.publishedAt}
                source={element.source.name}
              />
            </div>
          ))}
        </InfiniteScroll>


      </div>





    </div>

  );
}

export default News;


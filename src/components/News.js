import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";


const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalArticles, setTotalArticles] = useState(0)


  document.title = new String(props.category).toLocaleUpperCase()+" News"

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
      setArticles(parsedData.articles)
      setTotalArticles(parsedData.totalResults)

    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false)
    }
  }

  const handlePreviousClick = async () => {

    console.log("Prev");
    setPage(page-1);
    
  updateNews();

  };

  const handleNextClick = async () => {
    
    setPage(page+1);
    console.log("Next");
    updateNews();
  };

  console.log("I am render");

  return (
    <div className="container my-3">
      <h3 className="text-center" style={{ margin: "30px 0px" }}>News App Top   {new String(props.category).toUpperCase()} Headlines </h3>

      {loading && <Spinner />}



      <div className="row">
        {articles.map((element) => {

          return (
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
          );
        })}
      </div>
      <div className="container my-2 d-flex justify-content-between">
        <button
          disabled={page <= 1}
          onClick={handlePreviousClick}
          type="button"
          className="btn btn-primary btn-sm"
        >
          {" "}
          &larr; Previous
        </button>
        <button
          disabled={page >= Math.ceil(totalArticles / props.pageSize)}
          onClick={handleNextClick}
          type="button"
          className="btn btn-primary btn-sm"
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}

export default News;


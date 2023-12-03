import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default class News extends Component {

  constructor(props) {

    super(props);
    console.log("I am constructor of News component");
    this.state = {
      articles: [],
      loading: false,

      page: 1,
      totalArticles: 0
    };

    document.title = new String(this.props.category).toLocaleUpperCase()+" News"
  }

  async componentDidMount() {
    console.log("I am cdm");

    this.updateNews();


  }
  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5b1cc141fd0645109311ff99ce3718a8&page=${this.state.page}&pagesize=${this.props.pageSize}`;

    this.setState({ loading: true });

    try {
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        articles: parsedData.articles,
        totalArticles: parsedData.totalResults, // Update totalArticles with the total number of articles
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      this.setState({ loading: false });
    }
  }

  handlePreviousClick = async () => {

    console.log("Prev");
    this.setState({ page: this.state.page - 1 });
    this.updateNews();

  };

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });

    console.log("Next");
    this.updateNews();
  };
  render() {
    console.log("I am render");

    return (
      <div className="container my-3">
        <h3 className="text-center" style={{ margin: "30px 0px" }}>News App Top   {new String(this.props.category).toUpperCase()} Headlines </h3>
        
        {this.state.loading && <Spinner />}



        <div className="row">
          {this.state.articles.map((element) => {

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
            disabled={this.state.page <= 1}
            onClick={this.handlePreviousClick}
            type="button"
            className="btn btn-primary btn-sm"
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={this.state.page >= Math.ceil(this.state.totalArticles / this.props.pageSize)}
            onClick={this.handleNextClick}
            type="button"
            className="btn btn-primary btn-sm"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

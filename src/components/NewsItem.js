import React from "react";

const NewsItem = ({ title, desc, imgurl, newsurl, author, date, source })=> {


 
   
    return (
      <div >

        <div className="card my-4"  >
          <img
            src={imgurl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success"
            style={{zIndex:1, left:"71%!important"}}
            >
             { source }
              
            </span>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <p className="card-text"><small className="text-body-secondary">By {author} on  {new Date(date).toGMTString()}</small></p>
            <a href={newsurl} target="_blank" className="btn btn-primary btn-sm">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;

// API key
// 5b1cc141fd0645109311ff99ce3718a8

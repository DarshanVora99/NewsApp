import React from "react";

const NewsItem = ({ title, desc, imgurl, newsurl, author, date, source }) => {
  return (
    <div className="col-md-4 my-4">
      <div className="card h-100">
        <img
          src={imgurl}
          className="card-img-top"
          alt="News Thumbnail"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success"
            style={{ zIndex: 1, left: "71%!important" }}
          >
            {source}
          </span>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <p className="card-text">
            <small className="text-muted">
              By {author} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={newsurl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;

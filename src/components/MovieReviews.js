// Presentational Component: Lists a series of movie reviews on the page

import React from "react";

const review = ({ headline, byline, link, summary_short }) => {
  return (
    <div key={headline} className="review">
      <header>
        <a className="review-link" href={link.url}>
          {headline}
        </a>
        <br></br>
        <span className="author">{byline}</span>
      </header>
      <blockquote>{summary_short}</blockquote>
    </div>
  );
};

const MovieReviews = ({ reviews }) => (
  <div className="review-list">{reviews.map(review)}</div>
);

MovieReviews.defaultProps = {
  reviews: [],
};

export default MovieReviews;

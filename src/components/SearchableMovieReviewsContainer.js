import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: "",
  };

  handleSeachInputChange = (event) =>
    this.setState({
      searchTerm: event.target.value,
    });

  handleSubmit = (event) => {
    event.preventDefault();

    fetch(URL.concat(this.state.searchTerm))
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          reviews: data.results,
        })
      );
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search-input">Search Moview Reviews</label>
          <input
            id="search-input"
            type="text"
            style={{ width: 300 }}
            onChange={this.handleSearchInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        {typeof this.state.reviews === "object" &&
          this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;

//Provide a searchable interface allow the user to enter a search term and
//then receive a list of reviews that match the search term(s)

import React, { Component } from "react";
import ApiMovies from "../services/ApiMovies";

export default class Cast extends Component {
  state = {
    reviews: [],
    error: null,
  };

  fetchReviews = () => {
    const { movieId } = this.props.match.params;

    ApiMovies.fetchFilmsReviews(movieId)
      .then((reviews) => this.setState({ reviews }))
      .catch((error) => this.setState({ error: error }));
  };

  componentDidMount() {
    this.fetchReviews();
  }

  render() {
    const { error, reviews } = this.state;

    return (
      <>
        {error && <p>Упс, что-то пошло не так: {error.message}</p>}
        {reviews.length > 0 ? (
          <ul>
            {reviews.map((review) => (
              <li key={review.id} className="reviews">
                <strong>{review.author}</strong>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>У нас нет никаких отзывов об этом фильме</p>
        )}
      </>
    );
  }
}

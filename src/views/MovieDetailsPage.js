import React, { Component } from "react";
import ApiMovies from "../services/ApiMovies";
import { Link, Route } from "react-router-dom";
import routes from "../routes";
import Cast from "./Cast";
import Reviews from "./Reviews";

export default class ShowDetails extends Component {
  state = {
    movie: null,
    error: null,
  };

  componentDidMount() {
    const { match } = this.props;
    ApiMovies.fetchFilmsDetails(match.params.movieId)
      .then((movie) => {
        console.log(movie);
        this.setState({ movie });
      })
      .catch((error) => this.setState({ error }));
  }

  render() {
    const { movie, error } = this.state;
    const { match } = this.props;
    const imgURL = `https://image.tmdb.org/t/p/w500`;

    return (
      <>
        {error && (
          <p>
            Ой, что-то пошло не так: {error.message}{" "}
            <Link to={routes.home}>На главную</Link>
          </p>
        )}
        {movie && (
          <div className="movie-details">
            <div className="image">
              <img src={`${imgURL}${movie.poster_path}`} alt="" />
            </div>
            <div className="content">
              <h1>{movie.title}</h1>
              <p>Оценка пользователей: {movie.vote_average}</p>
              <h3>Описание</h3>
              <p>{movie.overview}</p>
              <h3>Жанры</h3>
              <ul>
                {movie.genres.map(({ id, name }) => (
                  <li key={id}>{name}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <hr />
        <ul>
          <li>
            <Link to={`/movies/${match.params.movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${match.params.movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
        <hr />
        <Route path={routes.cast} component={Cast} />
        <Route path={routes.reviews} component={Reviews} />
      </>
    );
  }
}

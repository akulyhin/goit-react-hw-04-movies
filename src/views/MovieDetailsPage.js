import React, { Component } from "react";
import ApiMovies from "../services/ApiMovies";
import { Link, Route } from "react-router-dom";
import routes from "../routes";
import Cast from "./Cast";
import Reviews from "./Reviews";
import Loader from "../Components/Loader";

export default class MovieDetailsPage extends Component {
  state = {
    movie: null,
    error: null,
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });

    const { match } = this.props;

    ApiMovies.fetchFilmsDetails(match.params.movieId)
      .then((movie) => this.setState({ movie }))
      .catch((error) => this.setState({ error: error }))
      .finally(() => this.setState({ loading: false }));
  }

  handleGoBack = () => {
    const { state } = this.props.location;
    const { history } = this.props;

    if (state && state.from) {
      return history.push(this.props.location.state.from);
    }

    history.push(routes.home);
  };

  render() {
    const { movie, error, loading } = this.state;
    const { match } = this.props;
    const { from } = this.props.location.state;
    const imgURL = `https://image.tmdb.org/t/p/w500`;

    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          Назад к списку фильмов
        </button>
        <br />
        <br />
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {loading ? (
          <Loader />
        ) : (
          <>
            {movie && (
              <>
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

                <hr />
                <ul>
                  <li>
                    <Link
                      to={{
                        pathname: `/movies/${match.params.movieId}/cast`,
                        state: { from: this.props.location.state.from },
                      }}
                    >
                      Cast
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: `/movies/${match.params.movieId}/reviews`,
                        state: { from: this.props.location.state.from },
                      }}
                    >
                      Reviews
                    </Link>
                  </li>
                </ul>
                <hr />
                <Route path={routes.cast} component={Cast} />
                <Route path={routes.reviews} component={Reviews} />
              </>
            )}
          </>
        )}
      </>
    );
  }
}

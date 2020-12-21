import React, { Component } from "react";
import Loader from "../Components/Loader";
import { Link } from "react-router-dom";
import ApiMovies from "../services/ApiMovies";

export default class Home extends Component {
  state = {
    movies: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    this.setState({ loading: true });
    ApiMovies.fetchFilmsTrending()
      .then((movies) => this.setState({ movies }))
      .catch((error) => this.setState({ error: error }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { movies, loading, error } = this.state;

    return (
      <div>
        <h1>В тренде сегодня</h1>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {loading ? (
          <Loader />
        ) : (
          <>
            {movies.length > 0 && (
              <ul>
                {movies.map((movie) => (
                  <li key={movie.id}>
                    <Link
                      to={{
                        pathname: `/movies/${movie.id}`,
                        state: { from: this.props.location },
                      }}
                    >
                      {movie.name}
                      {movie.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    );
  }
}

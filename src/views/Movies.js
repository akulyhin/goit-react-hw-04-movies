import React, { Component } from "react";
import ApiMovies from "../services/ApiMovies";
import { Link } from "react-router-dom";
import Loaders from "../Components/Loader";
import SearchBox from "../Components/SearchBox";
import paseQueryString from "../utils/parseQueryString";

export default class Movies extends Component {
  state = {
    movies: [],
    error: null,
    loading: false,
  };

  componentDidMount() {
    const { query } = paseQueryString(this.props.location.search);

    if (query) {
      this.fetchMovies(query);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = paseQueryString(prevProps.location.search);
    const { query: nextQuery } = paseQueryString(this.props.location.search);

    if (prevQuery !== nextQuery) {
      this.fetchMovies(nextQuery);
    }
  }

  fetchMovies = (query) => {
    ApiMovies.fetchFilmsWithQuery(query)
      .then((movies) => this.setState({ movies }))
      .catch((error) => this.setState({ error: error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleChangeQuery = (query) => {
    this.setState({ loading: true });
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies, loading, error } = this.state;

    return (
      <>
        <SearchBox onSubmit={this.handleChangeQuery} />

        {error && <p>Упс, что-то пошло не так: {error.message}</p>}
        {loading ? (
          <Loaders />
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
      </>
    );
  }
}

import React, { Component } from "react";
import ApiMovies from "../services/ApiMovies";
import { Link } from "react-router-dom";

export default class Movies extends Component {
  state = {
    query: "",
    movies: [],
  };

  handleInput = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { query } = this.state;

    ApiMovies.fetchFilmsWithQuery(query).then((movies) => {
      this.setState({ movies });
      console.log(movies);
    });
  };

  render() {
    const { query, movies } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={query} onChange={this.handleInput} />
          <button type="submit">Поиск</button>
        </form>
        <div>
          {movies.length > 0 && (
            <ul>
              {movies.map((movie) => (
                <li key={movie.id}>
                  <Link to={`/movies/${movie.id}`}>
                    {movie.name}
                    {movie.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

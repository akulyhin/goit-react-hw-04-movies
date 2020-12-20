import React, { Component } from "react";
import { Link } from "react-router-dom";
import ApiMovies from "../services/ApiMovies";

export default class Home extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    ApiMovies.fetchFilmsTrending().then((movies) => {
      this.setState({ movies });
      console.log(movies);
    });
  }

  render() {
    const { movies } = this.state;

    return (
      <div>
        <h1>В тренде сегодня</h1>
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
    );
  }
}

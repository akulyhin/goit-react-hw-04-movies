import React, { Component } from "react";
import ApiMovies from "../services/ApiMovies";

export default class ShowDetails extends Component {
  state = {
    movie: null,
  };

  componentDidMount() {
    const { match } = this.props;
    ApiMovies.fetchFilmsDetails(match.params.movieId).then((movie) => {
      console.log(movie);
      this.setState({ movie });
    });
  }

  render() {
    const { movie } = this.state;
    // const genres = movie.genres;
    return (
      <>
        {movie && (
          <>
            <div className="image">
              <img src={movie.poster_path} alt="" />
            </div>
            <div className="content">
              <h1>{movie.title}</h1>
              <p>User Score: {movie.vote_average}</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <ul>
                {movie.genres.map(({ id, name }) => (
                  <li key={id}>{name}</li>
                ))}
              </ul>
            </div>
          </>
        )}
      </>
    );
  }
}

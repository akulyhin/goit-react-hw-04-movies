import React, { Component } from "react";
import ApiMovies from "../services/ApiMovies";

export default class Cast extends Component {
  state = {
    casts: [],
    error: null,
  };

  fetchCast = () => {
    const { movieId } = this.props.match.params;

    ApiMovies.fetchFilmsCast(movieId)
      .then((casts) => this.setState({ casts }))
      .catch((error) => this.setState({ error: error }));
  };

  componentDidMount() {
    this.fetchCast();
  }

  render() {
    const { error, casts } = this.state;

    return (
      <>
        {error && <p>Упс, что-то пошло не так: {error.message}</p>}
        {casts.length > 0 && (
          <ul>
            {casts.map((cast) => (
              <li key={cast.cast_id} className="cast">
                <img
                  src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                  alt={cast.name}
                />
                {error && <p>Упс, что-то пошло не так: {error.message}</p>}
                <p>{cast.name}</p>
                <p>Character: {cast.character}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

import axios from "axios";

const baseURL = "https://api.themoviedb.org";
const apiKey = "e2f5ff5d5a4a17a609c4c13a58bd2186";

const fetchFilmsTrending = () => {
  return axios
    .get(`${baseURL}/3/trending/all/day?api_key=${apiKey}&language=ru`)
    .then((res) => res.data.results);
};

const fetchFilmsDetails = (movieId) => {
  return axios
    .get(`${baseURL}/3/movie/${movieId}?api_key=${apiKey}&language=ru`)
    .then((res) => res.data);
};

const fetchFilmsWithQuery = (query) => {
  return axios
    .get(
      `${baseURL}/3/search/movie?api_key=${apiKey}&query=${query}&language=ru&page=1&include_adult=false`
    )
    .then((res) => res.data.results);
};

export default { fetchFilmsTrending, fetchFilmsWithQuery, fetchFilmsDetails };

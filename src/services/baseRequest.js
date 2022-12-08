import axios from "axios";

const baseRequest = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.REACT_APP_API_MOVIE_KEY,
  },
});

export default baseRequest;
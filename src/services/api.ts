import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_THEMOVIEDB_API_URL,
});

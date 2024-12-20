import axios from "axios";

const baseURL = "https://api.flunty.xyz/";

export const api = axios.create({
  baseURL: baseURL,
});

import axios from "axios";

const BASE_URL = "http://localhost:3001";

export const apiDefault = () => {
  const TOKEN = localStorage.getItem("JWT");

  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: TOKEN,
    },
  });
  return instance;
};

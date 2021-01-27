import axios from "axios";

const BASE_URL = "http://121.184.45.242:3001";
const JWT_TOKEN = "JWT";

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

export const saveJWT = (token: string): void => {
  localStorage.setItem(JWT_TOKEN, token);
};

export const getJWT = (): string => {
  return localStorage.getItem(JWT_TOKEN);
};

export const removeJWT = (): void => {
  localStorage.removeItem(JWT_TOKEN);
};

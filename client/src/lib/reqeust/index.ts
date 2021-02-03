import axios from "axios";
import { User } from "../payloads/header";

const BASE_URL = "http://121.184.45.242:3001";
const JWT_TOKEN = "JWT";
const USER_DATA = "USER_DATA";

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

export const saveUserData = (userData: User): void => {
  const userDataStr: string = JSON.stringify(userData);
  localStorage.setItem(USER_DATA, userDataStr);
};

export const removeUserData = (): void => {
  localStorage.removeItem(USER_DATA);
};

export const logOut = () => {
  removeJWT();
  removeUserData();
  window.location.reload();
};

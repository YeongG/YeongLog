import { User } from "../../../lib/payloads/header";

export const SET_USER = "header/SET_USER" as const;

export const setUser = (userData: User) => ({
  type: SET_USER,
  payload: userData,
});

type HeaderAction = ReturnType<typeof setUser>;

export default HeaderAction;

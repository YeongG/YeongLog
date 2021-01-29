import { AxiosResponse } from "axios";
import { User } from "../../payloads/header";
import { apiDefault } from "../../reqeust";

export const getMyData = (): Promise<AxiosResponse<User>> => {
  return apiDefault().get<User>("/user");
};

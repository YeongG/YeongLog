import { AxiosResponse } from "axios";
import { ReqRegister } from "../../payloads/auth";
import { apiDefault } from "../../reqeust";

export const sendEmail = (email: string) => {
  return apiDefault().post("/auth/sendemail", {
    email,
  });
};

export const checkEmail = (
  token: string
): Promise<AxiosResponse<{ email: string }>> => {
  return apiDefault().get("/auth/check-email", {
    headers: {
      Authorization: token,
    },
  });
};

export const reqRegister = (registerData: ReqRegister) => {
  return apiDefault().post("/auth/register", registerData);
};

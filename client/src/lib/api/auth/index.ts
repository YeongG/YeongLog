import { apiDefault } from "../../reqeust";

export const sendEmail = (email: string) => {
  return apiDefault().post("/auth/sendemail", {
    email,
  });
};

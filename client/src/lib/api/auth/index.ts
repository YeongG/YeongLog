import { apiDefault } from "../../reqeust";

export const sendEmail = (email: string) => {
  return apiDefault().post("/sendemail", {
    email,
  });
};

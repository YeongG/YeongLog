import React, { FC, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import qs from "querystring";
import { removeJWT, saveJWT } from "../../lib/reqeust";

const LoginPage: FC = () => {
  const history = useHistory();

  const query: string = useLocation().search;
  useEffect(() => {
    const token: string = (qs.parse(query.split("?")[1]).token as string) || "";
    if (!token) {
      toast.dark("잘못된 접근 입니다");
      removeJWT();
      history.push("/");
      return;
    }
    saveJWT(token);
    history.push("/");
  }, []);
  return <div></div>;
};

export default LoginPage;

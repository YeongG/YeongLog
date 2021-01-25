import React, { FC, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { GlobalDiv } from "../../GlobalStyle";
import qs from "querystring";

const RegisterPage: FC = () => {
  const query: string = useLocation().search;
  useEffect(() => {
    const data = qs.parse(query.split("?")[1]);
  }, []);
  return <GlobalDiv>회원가입</GlobalDiv>;
};

export default RegisterPage;

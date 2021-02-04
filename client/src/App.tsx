import React, { FC, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header, LoginModal } from "./components";
import {
  LoginContainer,
  RegisterContainer,
  SettingContainer,
} from "./containers";
import { GlobalStyle } from "./GlobalStyle";
import { getMyData } from "./lib/api/user";
import { getJWT, logOut } from "./lib/reqeust";
import { IndexPage } from "./pages";

const App: FC<{}> = () => {
  return (
    <BrowserRouter>
      <ToastContainer autoClose={2000} />
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/register" component={RegisterContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/setting" component={SettingContainer} />
        <Redirect to="/" />
      </Switch>
      <LoginModal />
    </BrowserRouter>
  );
};

export default App;

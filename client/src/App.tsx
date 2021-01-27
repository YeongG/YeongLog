import React, { FC } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header, LoginModal } from "./components";
import { LoginContainer, RegisterContainer } from "./containers";
import { GlobalStyle } from "./GlobalStyle";
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
        <Redirect to="/" />
      </Switch>
      <LoginModal />
    </BrowserRouter>
  );
};

export default App;

import React, { FC } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Header, LoginModal } from "./components";
import { RegisterContainer } from "./containers";
import { GlobalStyle } from "./GlobalStyle";
import { IndexPage } from "./pages";

const App: FC<{}> = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/register" component={RegisterContainer} />
        <Redirect to="/" />
      </Switch>
      <LoginModal />
    </BrowserRouter>
  );
};

export default App;

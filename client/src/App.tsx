import React, { FC } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header, LoginModal } from "./components";
import { GlobalStyle } from "./GlobalStyle";
import { IndexPage } from "./pages";

const App: FC<{}> = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={IndexPage} />
      </Switch>
      <LoginModal />
    </BrowserRouter>
  );
};

export default App;

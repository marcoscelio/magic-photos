import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  AdaptablePortfolio,
  LoginPage,
  Main,
  PortfolioAdmin,
} from "./pages/index";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={LoginPage} />
        <Route path="/port-admin" component={PortfolioAdmin} />
        <Route path="/portfolio/:category" component={AdaptablePortfolio} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

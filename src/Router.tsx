import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Expenses from "./containers/expenses/Expenses.container";
import Income from "./containers/Income.container";
import Home from "./containers/Home.container";

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/income" component={Income} />
      <Route path="/expenses" component={Expenses} />
      <Redirect to="/" />
    </Switch>
  );
};
export default Router;

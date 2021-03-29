import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../containers/Home";
import NotFound from "../containers/NotFound";
import Search from "../containers/Search";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/search" component={Search} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;

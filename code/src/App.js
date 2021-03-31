import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PopularList from "./pages/PopularList";
import MovieDisplay from "./pages/MovieDisplay";
import FailedToLoad from "./pages/FailedToLoad"

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <PopularList />
        </Route>
        <Route path="/movies/:id" exact>
          <MovieDisplay />
        </Route>
        <Route path="/fail" exact>
          <FailedToLoad />
        </Route>
      </Switch>
    </Router>
  );
};

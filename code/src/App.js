import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PopularList from "./pages/PopularList";
import MovieDisplay from "./pages/MovieDisplay";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <PopularList />
        </Route>
        <Route path="/movies/:id">
          <MovieDisplay />
        </Route>
      </Switch>
    </Router>
  );
};

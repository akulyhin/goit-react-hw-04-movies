import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import MovieDetailsPage from "./views/MovieDetailsPage";
import Movies from "./views/Movies";
import routes from "./routes";

const App = () => (
  <>
    <Navigation />
    <div className="container">
      <Switch>
        <Route path={routes.home} exact component={Home} />
        <Route path={routes.movies} exact component={Movies} />
        <Route path={routes.movieDetailsPage} component={MovieDetailsPage} />
        <Route path={routes.cast} component={MovieDetailsPage} />
        <Route path={routes.reviews} component={MovieDetailsPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </>
);

export default App;

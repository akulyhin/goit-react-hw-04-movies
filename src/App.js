import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import ShowDetails from "./views/ShowDetails";
import Movies from "./views/Movies";
import routes from "./routes";

const App = () => (
  <>
    <Navigation />
    <div className="container">
      <Switch>
        <Route path={routes.home} exact component={Home} />
        <Route path={routes.movies} exact component={Movies} />
        <Route path={routes.showDetails} component={ShowDetails} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </>
);

export default App;

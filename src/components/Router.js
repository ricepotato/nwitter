import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = ({ isLoggedin }) => {
  return (
    <Router>
      <Switch>
        {isLoggedin ? (
          <>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </>
        ) : (
          <Route exact path="/">
            <Auth></Auth>
          </Route>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;

import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Items from "../pages/Items";
import Home from "../pages/Home";
import Share from "../pages/Share";
import Profile from "../pages/Profile";
import Nav from "../components/Nav";

export default () => (
  <Fragment>
    {/* @TODO: Add your menu component here */}
    {/* {window.location.pathname !== "/welcome" && <Nav />} */}
    <Switch>
      <Route exact path="/items" component={Items} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/profile/:id" component={Profile} />
      <Route exact path="/share" component={Share} />
      <Route exact path="/home" component={Home} />
      <Redirect from="*" to="/items" />

      {/**
       * @TODO: Define routes here for: /items, /profile, /profile/:userid, and /share
       *
       * Provide a wildcard redirect to /items for any undefined route using <Redirect />.
       *
       * Later, we'll add logic to send users to one set of routes if they're logged in,
       * or only view the /welcome page if they are not.
       */}
    </Switch>
  </Fragment>
);

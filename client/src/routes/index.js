import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Items from "../pages/Items";
import Home from "../pages/Home";
import Share from "../pages/Share";
import Profile from "../pages/Profile";
import NavBar from "../components/NavBar";
import PRoute from "../components/PrivateRoute";
import { ViewerContext } from "../context/ViewerProvider";
import FullScreenLoader from "../components/FullScreenLoader";

export default () => (
  <ViewerContext.Consumer>
    {({ viewer, loading }) => {
      //if (loading) return <div>loading...</div>;
      if(loading) return <FullScreenLoader />;
      if (!viewer) {
        return (
          <Switch>
            <Route exact path="/welcome" name="home" component={Home} />
            <Redirect from="*" to="/welcome" />
          </Switch>
        );
      }
      return (
        <Fragment>
          <NavBar />
          <Switch>
            <PRoute exact path="/items" component={Items} />
            <PRoute exact path="/profile" component={Profile} />
            <PRoute exact path="/profile/:id" component={Profile} />
            <PRoute exact path="/share" component={Share} />
            <Redirect from="*" to="/items" />
          </Switch>
        </Fragment>
      );
    }}
  </ViewerContext.Consumer>
);

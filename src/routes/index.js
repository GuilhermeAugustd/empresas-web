import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch } from "react-router-dom";

import history from "./history";

import Private from "./private";
import Guest from "./guest";

import SignIn from "../pages/Auth";
import ListEnterprises from "../pages/Enterprises/ListEnterprises";
import InfoEnterprises from "../pages/Enterprises/InfoEnterprises";

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Guest path="/" exact component={SignIn} />
      <Guest path="/signIn" component={SignIn} />

      <Private path="/enterprises" exact component={ListEnterprises} />
      <Private path="/enterpriseinfo" exact component={InfoEnterprises} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;

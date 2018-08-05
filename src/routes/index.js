import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "../components/Header";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import User from "../components/User";

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/user/:id" component={User} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "../components/Header";
import MyComponent from "../components/MyComponent";
import User from "../components/User";
import PushMatch from "../components/PushMatch";

export default class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={MyComponent} />
                        <Route path="/user/:id" component={User} />
                        <Route path="/match/:id" component={PushMatch} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

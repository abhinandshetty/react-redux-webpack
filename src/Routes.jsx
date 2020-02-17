import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import UserGrid from './views/containers/user-grid/UserGrid';

export default function Routes () {
    return (
        <Router>
            <Switch>
                <Route  path="/users" exact component={UserGrid} />
                <Redirect exact from="/" to="users" />
            </Switch>
        </Router>
    );
}
    
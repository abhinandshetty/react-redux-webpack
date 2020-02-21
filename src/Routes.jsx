import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";
import Landing from './views/containers/Landing';
import Login from './views/containers/login/Login'

export default function Routes () {
    return (
        <Router>
            <Route  path="/login" exact component={Login} />
            <Route  path="/users" exact component={Landing} />
            
            {/* <Redirect from="" to="/login" /> */}

        </Router>
    );
}
    
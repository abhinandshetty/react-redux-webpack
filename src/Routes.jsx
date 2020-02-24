import React from 'react';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Landing from './views/containers/Landing';
import Login from './views/containers/Login/Form/LoginForm'

export default function Routes () {
    return (
        <Router>
            <Route  path="/login" exact component={Login} />
            <Route  path="/users" exact component={Landing} />
            
            {/* <Redirect from="" to="/login" /> */}

        </Router>
    );
}
    
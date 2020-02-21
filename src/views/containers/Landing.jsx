import React from 'react';
import { Link, Route } from "react-router-dom";
import Sidebar from '../components/Sidebar';
import UserGrid from './user-grid/UserGrid';


const  Landing = ({children}) => {
    return (
        <div>
        <Sidebar />
        <Route  path="/users" exact component={UserGrid} />        </div>
    )
}

export default Landing;
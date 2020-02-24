import React from 'react';
import Sidebar from '../components/Sidebar';
import UserGrid from './Users/List/UserList';

const  Landing = ({children}) => {
    return (
        <div>
            <Sidebar />
            <UserGrid />
        </div>
    )
}

export default Landing;
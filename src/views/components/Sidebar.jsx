import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

export default class Sidebar extends React.Component {
 
  render () {
    return (
        <div style={{height:1}}>
            <Menu >
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </Menu>
        </div>
      
    );
  }
}

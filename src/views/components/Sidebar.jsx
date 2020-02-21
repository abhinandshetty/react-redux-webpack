import React from 'react';
import { bubble as Menu } from 'react-burger-menu'
import { Link } from "react-router-dom";

export default class Sidebar extends React.Component {
 
  render () {
    return (
        <div>
            <Menu>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </Menu>
        </div>
      
    );
  }
}

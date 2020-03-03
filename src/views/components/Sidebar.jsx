import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

export default class Sidebar extends React.Component {
 
  render () {
    return (
        <div style={{height:1}}>
            <Menu disableAutoFocus>
            <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
            </Menu>
        </div>
      
    );
  }
}

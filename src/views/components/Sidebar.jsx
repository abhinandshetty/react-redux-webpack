import React from 'react';
import { bubble as Menu } from 'react-burger-menu'
 
export default class Sidebar extends React.Component {

 
  render () {
    return (
        <div>
            <Menu style={{backgoundColor : 'black'}}>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
            </Menu>
        </div>
      
    );
  }
}

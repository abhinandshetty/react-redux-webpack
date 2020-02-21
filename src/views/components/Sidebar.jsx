import React from 'react';
import { bubble as Menu } from 'react-burger-menu'

export default class Sidebar extends React.Component {
 
  render () {
    return (
        <div style={{height:1}}>
            <Menu >
              <li>
                hi
              </li>
              <li>
hello              </li>
              <li>
welcom              </li>
            </Menu>
        </div>
      
    );
  }
}

import React from 'react';
import ReactDOM from "react-dom";
import './Index.scss';
import  Routes   from './Routes';

export default class Index extends React.Component {
    render(){
        return(
            
                <Routes />
            
        )
    }
}

ReactDOM.render(<Index />, document.getElementById("root"));
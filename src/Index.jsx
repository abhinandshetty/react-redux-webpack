import React from 'react';
import ReactDOM from "react-dom";
import './Index.scss';
import  Routes   from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Index extends React.Component {
    render(){
        return(
            
                <Routes />
            
        )
    }
}

ReactDOM.render(<Index />, document.getElementById("root"));
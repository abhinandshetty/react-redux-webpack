import React from 'react';
import ReactDOM from "react-dom";
import './Index.scss';

export default class Index extends React.Component {
    render(){
        return(
            <div>
            <h1>Hi</h1>

            </div>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById("root"));
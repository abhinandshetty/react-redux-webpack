import React from 'react';
import ReactDOM from "react-dom";
import './App.scss';

export default class App extends React.Component {
    render(){
        return(
            <div>
            <h1>Hi</h1>

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
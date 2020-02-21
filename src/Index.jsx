import React from 'react';
import ReactDOM from "react-dom";
import './Index.scss';
import  Routes   from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import store from './redux/store';

export default class Index extends React.Component {
    render(){
        return(
            <Provider store={store}>
                <Routes />
            </Provider>

        )
    }
}

ReactDOM.render(<Index />, document.getElementById("root"));
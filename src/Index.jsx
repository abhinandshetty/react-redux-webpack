import React from 'react';
import ReactDOM from "react-dom";
import Routes from './Routes';
import {Provider} from 'react-redux';
import store from './redux/store';

import './Index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastProvider } from 'react-toast-notifications'



export default class Index extends React.Component {
    render(){
        return(
            <Provider store={store}>
                <ToastProvider>
                    <Routes />
                </ToastProvider>
            </Provider>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById("root"));
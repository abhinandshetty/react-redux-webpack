import React, { Component } from 'react';
import TableRow from './TableRow';
import TableHeader from './TableHeader';

export default class Table extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        const {headers, rows} = this.props;
        return (
            <div className="container">
                <table className="table">
                    <TableHeader headers={headers} />  
                    <TableRow rows={rows} />
                </table>
            </div>
            
        )
    }
}
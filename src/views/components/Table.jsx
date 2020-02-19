import React, { Component } from 'react';
import TableRow from './TableRow';
import TableHeader from './TableHeader';

export default class Table extends Component {
    render () {
        const {headers, rows} = this.props;
        return (
            <div className="container mt-5">
                <table className="table table-striped">
                    <TableHeader headers={headers} />  
                    <TableRow rows={rows} />
                </table>
            </div>
            
        )
    }
}
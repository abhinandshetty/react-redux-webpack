import React, { Component } from 'react';
import TableRow from './TableRow';
import TableHeader from './TableHeader';

export default class Table extends Component {
    render () {
        const {headers, rows, onClickDeleteUser} = this.props;
        return (
                <table className="table table-striped">
                    <TableHeader headers={headers}/>  
                    <TableRow rows={rows} onDelete={onClickDeleteUser}/>
                </table>    
        )
    }
}
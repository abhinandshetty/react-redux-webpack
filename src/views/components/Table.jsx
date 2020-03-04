import React, { Component } from 'react';
import TableRow from './TableRow';
import TableHeader from './TableHeader';

export default class Table extends Component {
    render () {
        const {headers, rows, onClickDeleteUser, isActionRequired} = this.props;
        return (
                <table className="table table-responsive table-striped mt-3">
                    <TableHeader headers={headers} isActionRequired={isActionRequired}/>  
                    <TableRow rows={rows} onDelete={onClickDeleteUser}/>
                </table>    
        )
    }
}
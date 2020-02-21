import React, { Component } from 'react';
import TableRow from './TableRow';
import TableHeader from './TableHeader';

export default class Table extends Component {
    render () {
        const {headers, rows} = this.props;
        return (
                <table className="table table-striped">
                    <TableHeader headers={headers} isActionRequired={true}/>  
                    <TableRow rows={rows} />
                </table>
            
        )
    }
}
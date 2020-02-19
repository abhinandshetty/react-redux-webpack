import React, { Component } from 'react';
import Table from '../../components/Table';
import Loader from '../../components/Loader';

export default class UserGrid extends Component {
    state = {
        headers : [
            {
                columnHeader: "Name",
                key: "name"
            }, 
            {
                columnHeader: "Age",
                key: "age"
            }
        ],
        dataRows : [
            {
                name: "Abhinand",
                age: "26"
            },
            {
                name: "George",
                age: "42"
            },
            {
                name: "Steve",
                age: "20"
            }
        ]
    }

    render() {
        const {headers, dataRows} = this.state;
        return (
            // <Loader />
            <Table headers={headers} rows={dataRows} isSortable={false} isSelectable={false}/>
        )
    }
}
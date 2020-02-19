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
            }, 
            {
                columnHeader: "Department",
                key: "department"
            }, 
            {
                columnHeader: "Skills",
                key: "skills"
            }
        ],
        dataRows : [
            {
                name: "Abhinand",
                age: "26",
                department: "Software Development",
                skills: ["Javascript", "Java", "Python"]
            },
            {
                name: "George",
                age: "42",
                department: "Software Development",
                skills: ["Javascript", "Java", "Python"]
                
            },
            {
                name: "Steve",
                age: "20",
                department: "Software Development",
                skills: ["Javascript", "Java", "Python"]
            },
            {
                name: "Abhinand",
                age: "26",
                department: "Software Development",
                skills: ["Javascript", "Java", "Python"]
            },
            {
                name: "George",
                age: "42",
                department: "Software Development",
                skills: ["Javascript", "Java", "Python"]
            },
            {
                name: "Steve",
                age: "20",
                department: "Software Development",
                skills: ["Javascript", "Java", "Python"]
            },
            {
                name: "Abhinand",
                age: "26",
                department: "Software Development",
                skills: ["Javascript", "Java", "Python"]
            },
            {
                name: "George",
                age: "42",
                department: "Software Development",
                skills: ["Javascript", "Java", "Python"]
            },
            {
                name: "Steve",
                age: "20",
                department: "Software Development",
                skills: ["Javascript", "Java", "Python"]
            },
            {
                name: "Abhinand",
                age: "26",
                department: "Software Development",
                skills: ["Javascript", "Java", "Python"]
            },
            {
                name: "George",
                age: "42",
                department: "Software Development",
                skills: ["Javascript", "Java", "Python"]
            },
            {
                name: "Steve",
                age: "20",
                department: "Software Development",
                skills: ["Javascript", "Java", "Python"]
            },
            {
                name: "Abhinand",
                age: "26",
                department: "Software Development",
                skills: ["Javascript", "Java", "Python"]
            },
            {
                name: "George",
                age: "42",
                department: "Software Development",
                skills: ["Javascript", "Java", "Python"]
            },
            {
                name: "Steve",
                age: "20",
                department: "Software Development",
                skills: ["Javascript", "Java", "Python"]
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
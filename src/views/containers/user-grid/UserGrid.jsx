import React, { Component } from 'react';
import Table from '../../components/Table';
import { addUser, getUsers } from '../../../redux/user/user'
import {connect} from 'react-redux';

class UserGrid extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
            ]
        }
    }

    componentDidMount(){
        this.props.getUsers();
    }

    render() {
        const {headers} = this.state;
        const {userList} = this.props;
        return (
            <Table headers={headers} rows={userList} isSortable={false} isSelectable={false}/>
        )
    }
}


const mapStateToProps = state => ({
    userList : state.users.userList
});
export default connect(mapStateToProps,{ addUser, getUsers })(UserGrid);


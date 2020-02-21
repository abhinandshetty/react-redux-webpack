import React, { Component } from 'react';
import Table from '../../components/Table';
import { connect } from 'react-redux';
import { getUsers } from '../../../redux/user/user';
import { getUserGridColumns } from '../../../redux/table/table';

class UserGrid extends Component {

    componentDidMount(){
        this.props.getUsers();
        this.props.getUserGridColumns();
    }

    render() {
        const {userList , columns} = this.props;
        return (
            <div className="container mt-5"> 
                <button className="btn btn-success float-right mb-3">Add User</button>
                <Table headers={columns} rows={userList}/>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    userList : state.users.userList,
    columns: state.tables.userGridColumns
});
export default connect(mapStateToProps,{ getUsers, getUserGridColumns })(UserGrid);


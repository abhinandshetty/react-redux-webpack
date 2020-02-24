import React, { Component } from 'react';
import Table from '../../../components/Table';
import { connect } from 'react-redux';
import { getUsers } from '../../../../redux/user/user';
import { getUserGridColumns } from '../../../../redux/table/table';
import MyModal  from '../../../components/Modal';
import { Button } from 'react-bootstrap';

class UserGrid extends Component {
    constructor(){
        super();
        this.state = {
            isOpen : false
        }
    }

    componentDidMount(){
        this.props.getUsers();
        this.props.getUserGridColumns();
    }

    onClose = () => {
        this.setState(()=>{
            return {...this.state, isOpen : false}
        });
    }

    onOpen = () => {
        this.setState(()=>{
            return {...this.state, isOpen : true}
        });
    }

    render() {
        const {userList , columns} = this.props;
        return (
            <div className="container mt-5"> 
                <Button className="btn btn-success float-right mb-3">Add User</Button>
                <Table headers={columns} rows={userList}/>
                <MyModal isOpen={this.state.isOpen} onCloseModal={this.onClose}>
                    
                </MyModal>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    userList : state.users.userList,
    columns: state.tables.userGridColumns
});
export default connect(mapStateToProps,{ getUsers, getUserGridColumns })(UserGrid);


import React, { Component } from 'react';
import Table from '../../../components/Table';
import MyModal  from '../../../components/Modal';
import AddUserForm from '../Form/AddUserForm';

import { connect } from 'react-redux';
import { getUsers, addUser } from '../../../../redux/user/user';
import { getUserGridColumns } from '../../../../redux/table/table';
import { Button } from 'react-bootstrap';

class UserGrid extends Component {
    constructor(){
        super();
        this.state = {
            isOpen : false,
            formFields : {}
        }
    }

    componentDidMount(){
        this.props.getUsers();
        this.props.getUserGridColumns();
    }

    onClose = () => this.setState({isOpen : false});

    openAddUserModal = () => this.setState({isOpen : true});

    onChangeFields = (fields) => this.setState({formFields: {...this.state.formFields, ...fields}}, () => console.log(this.state));

    onClickSaveUser = () => this.props.addUser(this.state.formFields, () => this.setState({isOpen : false, formFields: {}}));

    render() {
        const { userList, columns } = this.props;
        return (
            
            <div className="container mt-5 col-lg-9 col-md-9 col-sm-9 col-xs-9"> 
                <Button className="btn btn-success float-right mb-3" onClick={this.openAddUserModal}>Add User</Button>
                <Table headers={columns} rows={userList}/>
                <MyModal isOpen={this.state.isOpen} onCloseModal={this.onClose} onSave={this.onClickSaveUser}>
                    <AddUserForm onChangeFields={this.onChangeFields}/>
                </MyModal>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    userList : state.users.userList,
    columns: state.tables.userGridColumns
});
export default connect(mapStateToProps,{ getUsers, getUserGridColumns, addUser })(UserGrid);


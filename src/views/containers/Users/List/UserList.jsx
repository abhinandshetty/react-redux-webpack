import React, { Component } from 'react';
import Table from '../../../components/Table';
import MyModal  from '../../../components/Modal';
import AddUserForm from '../Form/AddUserForm';

import { connect } from 'react-redux';
import { getUsers, addUser, deleteUser } from '../../../../redux/user/user';
import { getUserGridColumns } from '../../../../redux/table/table';
import { Button } from 'react-bootstrap';

class UserGrid extends Component {
    constructor(){
        super();
        this.state = {
            isOpen : false,
            isBtnActive: false,
            formFields : {}
        }
    }

    componentDidMount(){
        this.props.getUsers();
        this.props.getUserGridColumns();
    }

    onClose = () => this.setState({isOpen : false, isBtnActive: false});

    openAddUserModal = () => this.setState({isOpen : true});

    onChangeFields = fields => this.setState({formFields: {...this.state.formFields, ...fields}});

    isFormValid = isValid => this.setState({...this.state, isBtnActive : isValid});

    onClickSaveUser = () => this.props.addUser({...this.state.formFields, id: new Date().getTime()}, () => this.setState({isOpen : false, formFields: {}}));

    onClickDeleteUser = userId => this.props.deleteUser(userId);

    render() {

        const { userList, columns } = this.props;

        return (
            <div className="container mt-5 col-lg-9 col-md-9 col-sm-9 col-xs-9"> 
                <Button className="btn btn-success float-right mb-3" onClick={this.openAddUserModal}>Add User</Button>
                <Button variant="secondary" className="float-right mb-3 mr-3" onClick={this.openAddUserModal}>Load Sample Data</Button>
                
                <Table headers={columns} rows={userList} onClickDeleteUser={this.onClickDeleteUser}/>
                <MyModal isOpen={this.state.isOpen} onCloseModal={this.onClose} onSave={this.onClickSaveUser} isBtnActive={this.state.isBtnActive}>
                    <AddUserForm onChangeFields={this.onChangeFields} isFormValid={this.isFormValid}/>
                </MyModal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    userList : state.users.userList,
    columns: state.tables.userGridColumns
});

export default connect(mapStateToProps,{ getUsers, getUserGridColumns, addUser, deleteUser })(UserGrid);


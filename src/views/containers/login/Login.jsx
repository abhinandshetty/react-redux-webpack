import React from 'react';
import { addUser } from '../../../redux/user/user'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { throws } from 'assert';

class Login extends React.Component {
    constructor(props){
        super(props)
    }
    createUser = () => {
        this.props.addUser({name: 'Abhinand Shetty', age: '26', department: 'Software Development', skills: 'React'});
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={this.createUser}>Create User</button>
                {this.props.userList}
                <Link to="/users">Go to users</Link>
            </div>
        )
    }

}

export default connect(state => ({
    userList : state.users.userList,
}),{ addUser })(Login);


import React, { Component } from "react";
import { connect } from "react-redux";
import { Spinner } from 'reactstrap'
import { getUsers } from '../redux/actions/userActions';
import UserList from '../Components/UserList/UserList';


class UserListContainer extends Component {
    componentDidMount() {
        this.props.getUsers()
    }

    render() {
        const { users } = this.props;
        if (!users) {
            return <div><Spinner type="grow" />Loading...</div>
        }
        return (< UserList users={this.props.users} />)

    }
}

const mapStateToProps = state => { //this is the STORE
    return {
        users: state.getUsersReducer.users //updated to our props
    };
};
const mapDispatchtoProps = { //it allows us get this method from props
    getUsers
}

export default connect(mapStateToProps, mapDispatchtoProps
)(UserListContainer);



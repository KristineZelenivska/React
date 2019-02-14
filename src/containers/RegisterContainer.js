import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from '../redux/actions/userActions';
import Register from '../Components/Register/Register';
import { Redirect } from 'react-router-dom'


class RegisterContainer extends Component {
    onRegister = (username, email, password) => { //name of varaible
        if (!username || !email || !password) {
            return;
        }
        this.props.register(username, email, password) //value of variable. we pass values
    }
    render() {
        const { isRegistered } = this.props;

        return (isRegistered ? (<Redirect to="/login" />) :
            (< Register onRegister={this.onRegister} />)
        ) //if is registered is true redirect to login if note stay on register page
    }
}

const mapStateToProps = state => {
    return {
        isRegistered: state.registerReducer.isRegistered
    };
}; const mapDispatchtoProps = {
    register
}

export default connect(
    mapStateToProps, mapDispatchtoProps
)(RegisterContainer);

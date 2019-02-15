import React, { Component } from "react";
import { connect } from "react-redux";
import { logIn } from "../redux/actions/userActions";
import Login from "../Components/Login/Login";

class LoginContainer extends Component {
    onLogin = (email, password) => {
        if (!email || !password) {
            return;
        }

        this.props.logIn(email, password).then(() => {
            this.props.history.push("/");
        });
    };

    render() {
        return <Login onLogin={this.onLogin} />;
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.loginReducer.isLoggedIn
    };
};

const mapDispatchToProps = {
    logIn
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);
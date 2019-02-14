import React, { Component } from "react";
import { connect } from "react-redux";
import { logIn } from '../redux/actions/userActions';
import Login from '../Components/Login/Login';
import { Redirect } from 'react-router-dom'


class LoginContainer extends Component {

    onLogin = (email, password) => {
        this.props.logIn(email, password) //value of variable. we pass values
    }
    render() {
        const { isLoggedin } = this.props; //we define isLoggedin here and take it from props

        return (isLoggedin ? (<Redirect to="/" />) :
            (< Login onLogin={this.onLogin} />)
        )
    }
}

const mapStateToProps = state => { //this is the STORE
    return {
        isLoggedin: state.loginReducer.isLoggedin //updated to our props
    };
}; const mapDispatchtoProps = {
    logIn
}

export default connect(
    mapStateToProps, mapDispatchtoProps
)(LoginContainer);


        //name of varaible (onLogin is a method, = to function with values email and password, 
        //that will call LogIn constant from Actons with passed values email and password. 
        //logIn looks like this: 
        // export const logIn = (email, password) => {
        //     return dispatch => {
        //         return BootcampAPI.post(API.LOGIN, {
        //             email,  //body part
        //             hashedPassword: CryptoJS.SHA256(password).toString()
        //         })
        //             .then((res) => {
        //                 const token = res.data.payload.token //we can cnsole.log response to see what we have in response
        //                 localStorage.setItem("jwtToken", token);

        //                 dispatch(loginSuccess())
        //             })
        //             .catch(() => dispatch(loginError()))
        //     }
        // }

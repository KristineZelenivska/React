import React, { Component } from 'react';
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import './Register.css'


class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
            password: '',
        }
    }
    onInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }


    render() {
        const { onRegister } = this.props;

        const { username, email, password } = this.state;
        return (
            <div className="Register">
                <div className="Register__content">
                    <h1 className="Register__title">Registration form</h1>
                    <form >
                        <div className="form-group">
                            <label>Username</label>
                            <input onChange={this.onInputChange} className="form-control" name="username" type="username" value={username} />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input onChange={this.onInputChange} className="form-control" name="email" type="email" value={email} />
                        </div>
                        <div className="form-group">
                            <label >Password</label>
                            <input onChange={this.onInputChange} className="form-control" name="password" type="password" value={password} />
                        </div>
                        <div className="Register__button">
                            <Button type="button" onClick={() => onRegister(username, email, password)} color="primary">Register</Button>

                        </div>
                        <div className="Register__link">
                            <Link to="/login" >I have an account!</Link></div>
                    </form>

                </div>
            </div>
        );
    }
}
export default Register;



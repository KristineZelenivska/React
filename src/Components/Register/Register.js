import React, { Component } from 'react';
import { Button } from 'reactstrap'
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
                        {username}
                        <div className="form-group">
                            <label>Email</label>
                            <input onChange={this.onInputChange} className="form-control" name="email" type="email" value={email} />
                        </div>
                        {email}
                        <div className="form-group">
                            <label >Password</label>
                            <input onChange={this.onInputChange} className="form-control" name="password" type="password" value={password} />
                        </div>
                        {password}
                        <div className="Register__button">
                            <Button color="primary">Register</Button></div>
                    </form>

                </div>
            </div>
        );
    }
}
export default Register;



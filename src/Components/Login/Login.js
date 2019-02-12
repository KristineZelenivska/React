import React, { Component } from 'react';
import { Button } from 'reactstrap'
import './Login.css'


class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: null,
            password: null,
        }
    }
    onInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value }) //e is event which is onInputChange and target is the stuff we give it inside(the info) 
    }

    render() {
        const { email, password } = this.state;

        return (
            <div className="Login">
                <div className="Login__content">
                    <h1 className="Login__title">Login</h1>
                    <form >
                        <div className="form-group">
                            <label>Email</label>
                            <input onChange={this.onInputChange} name="email" className="form-control" type="email" value={email} />
                        </div>
                        <div className="form-group">
                            <label >Password</label>
                            <input onChange={this.onInputChange} name="password" className="form-control" type="password" value={password} />
                        </div>
                        <div class="Login__button">
                            <Button color="primary">Login</Button></div>
                    </form>

                </div>
            </div>
        );
    }
}
export default Login;



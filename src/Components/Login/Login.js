import React, { Component } from 'react';
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import './Login.css'


class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        }
    }

    componentDidMount() {
        console.log("1) did mount")
    }

    static getDerivedStateFromProps(props, state) { //initial state of components
        console.log('2) get derived')

        return (state)
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("4) got snapshot")
        return (prevState)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('3) Should update?')
        return (nextState)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("5) Did update")
    }

    onInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value }) //e is event which is onInputChange and target is the stuff we give it inside(the info) 
    }

    // shouldComponentUpdate(){      //
    // console.log('should update')
    // return true;
    // }

    render() {
        const { onLogin } = this.props;

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
                        <div className="Login__button">
                            <Button type="button" onClick={() => onLogin(email, password)} color="primary">Login</Button></div>
                        <div className="Login__link" ><Link to="/register" >I don't have an account :(</Link></div>

                    </form>

                </div>
            </div>
        );
    }
}
export default Login;



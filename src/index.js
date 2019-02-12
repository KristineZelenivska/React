import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"

class Root extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />

                </Switch>
            </BrowserRouter>
        )
    }
}

//switch is switching between routes.we will have few routes inside it
//<Route path = "/" component={App} />  on the path / display app window


ReactDOM.render(<Root />, document.getElementById('root'));

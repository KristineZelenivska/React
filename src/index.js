import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk'; //for redux to understand that there is async function
import { Provider } from 'react-redux'
import dotenv from "dotenv"
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import rootReducer from './redux/reducers/index'
import App from './App';
import LoginContainer from "./containers/LoginContainer"
import RegisterContainer from "./containers/RegisterContainer"

dotenv.config()

const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk))

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={App} />
                        <Route exact path="/login" component={LoginContainer} />
                        <Route exact path="/register" component={RegisterContainer} />

                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}

//switch is switching between routes.we will have few routes inside it
//<Route path = "/" component={App} />  on the path / display app window

//now our provider will have acces to the store  <Provider store={store}> 

ReactDOM.render(<Root />, document.getElementById('root'));//root of the app

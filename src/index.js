import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk'; //for redux to understand that there is async function
import { Provider } from 'react-redux'
import dotenv from "dotenv"
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import rootReducer from './redux/reducers/index'
import App from './App';
import LoginContainer from "./containers/LoginContainer"
import RegisterContainer from "./containers/RegisterContainer"
import ProtectedRoute from './Components/ProtectedRoute/protectedRoute'

dotenv.config()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(reduxThunk)));



// const validateToken = () => {
//     const token = localStorage.getItem("jwtToken")
//     if (!token) {
//         return false
//     }
//     return true
// }

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <ProtectedRoute exact path="/" component={App} />
                        <Route exact path="/login" component={LoginContainer} />
                        <Route exact path="/register" component={RegisterContainer} />

                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }//if isAccesible is false t will redirect to login page
}

//switch is switching between routes.we will have few routes inside it
//<Route path = "/" component={App} />  on the path / display app window

//now our provider will have acces to the store  <Provider store={store}> 

ReactDOM.render(<Root />, document.getElementById('root'));//root of the app

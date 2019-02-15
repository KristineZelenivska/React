import React, { Component } from 'react';
import './App.css';
import Posts from './containers/PostsContainer';
import UserList from "./containers/UsersListContainer"
// import Header from './containers/OneUserContainer'
import Header from './containers/HeaderContainer'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">


          <div className="row">

            <div className="col-md-2">
            </div>

            <div className="col-md-6">
              < Posts />
            </div>
            <div className="col-md-4">
              < UserList />
            </div>
            {/* <PostModal /> */}
          </div>
        </div>

      </div>
    );
  }
}

export default App;

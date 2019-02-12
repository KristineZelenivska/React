import React, { Component } from 'react';
import './App.css';
import Posts from './Components/Posts/Posts';
import UserList from "./Components/UserList/UserList"
import Header from './Components/Header/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">


          <div className="row">

            <div className="col-md-2">
              something else
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

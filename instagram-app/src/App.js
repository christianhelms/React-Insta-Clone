import React, { Component } from 'react';
import './App.css';
import PostsPage from './compontents/PostContainer/PostContainer';
import Authenticate from './compontents/Authentication/Authentication';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}

export default Authenticate(App);
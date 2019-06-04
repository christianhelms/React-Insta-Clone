import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from '../src/dummy-data';
import SearchContainer from './compontents/SearchBar/SearchContainer'
import PostContainer from './compontents/PostContainer/PostContainer'
import CommentContainer from './compontents/CommentSection/CommentContainer'

export class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    this.setState({
      data: dummyData,
    });
  }

  render(){
    return (
      //mapping over data, sending to post container via props
      <div class="App">
      <SearchContainer />
      <PostContainer postcontainer={this.state.data}/>
      </div>
    );
  }
}

export default App;

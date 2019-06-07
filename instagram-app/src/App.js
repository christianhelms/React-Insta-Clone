import React from 'react';
import SearchContainer from './compontents/SearchBar/SearchContainer'
import PostContainer from './compontents/PostContainer/PostContainer'
import dummyData from './dummy-data'

import './App.css';

class App extends React.Component {
  state = { 
    data: [],
    // search: '',
    f: []
  };

  changeHandler = e => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  componentDidMount(){
    this.setState({data: dummyData})
  }

  s = e => {
    const filtered = this.state.data.filter(post => post.username.toLowerCase().includes(e.target.value.toLowerCase()))
    console.log(e);
    this.setState({ f: filtered})
  }

  render() {
    console.log('render',this.state.data);
    return ( 
      <div className="App">
        <SearchContainer newSearch={this.state.search} s={this.s} />

        <PostContainer data={this.state.data} f={this.state.f} />
    </div>
     );
   
  }
}
 
export default App;
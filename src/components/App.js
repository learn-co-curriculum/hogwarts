import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogTileContainer from './HogTileContainer'


class App extends Component {
  render() {
    console.log(hogs)
    return (
      <div className="App">
          < Nav />
          <HogTileContainer hogs={hogs}/> 
      </div>
    )
  }
}

export default App;

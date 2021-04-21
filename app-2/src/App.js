import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      array: ['hello', 'i', 'am', 'an', 'array']
    }
  }

  render(){
    return(
      <div className="App">
      {this.state.array.map((el) => {
        return(
          <h2>{el}</h2>
          )
        })}
    </div>
    );
  }
}

export default App;

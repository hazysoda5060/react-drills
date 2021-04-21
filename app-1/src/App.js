import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      inputVal: ''
    }
  }

  handleChange(value){
    this.setState({inputVal: value})
  }

  render(){
    return(
      <div class='App'>
        <input onChange={(ev) => this.handleChange(ev.target.value)} />
        <h2>{this.state.inputVal}</h2>
      </div>
    )
  }
}

export default App;

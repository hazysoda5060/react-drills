import React from 'react';
import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      inputValue: '',
      array: ['pizza', 'bubblegum', 'popcorn', 'boba', 'all night long']
    }
  }

  handleChange(value){
    this.setState({inputValue: value})
}
  
  render(){
    return (
      <div className="App">
        <input onChange={(ev) => this.handleChange(ev.target.value)}/>
        <div>
        {this.state.array.filter((el) => {
          return el.includes(this.state.inputValue)
        }).map((el) => {
          return <h2>{el}</h2>
          })}
        </div>
      </div>
    );
  }
}

export default App;

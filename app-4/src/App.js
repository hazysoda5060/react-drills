import React from 'react';
import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      userInput: '',
      passInput: ''
    }
    this.loginAlert = this.loginAlert.bind(this)
  }
  
  handleChange1(value){
    this.setState({userInput: value})
  }
  
  handleChange2(value){
    this.setState({passInput: value})
  }

  loginAlert(){
    alert(`Username: ${this.state.userInput} Password: ${this.state.passInput}`)
  }
  
  render(){
    return (
      <div className="App">
        {console.log(this.state.userInput)}
        <input onChange={(ev) => this.handleChange1(ev.target.value)}/>
        <input onChange={(ev) => this.handleChange2(ev.target.value)}/>
        <button onClick={this.loginAlert}>Login</button>
      </div>
    );
  }
}

export default App;

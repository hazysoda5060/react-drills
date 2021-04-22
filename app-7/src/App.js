import React, { Component } from 'react';
import './App.css';
import NewTask from './NewTask'
import List from './List'
import { render } from '@testing-library/react';

class App extends Component{
  constructor(){
    super()
    this.state = {
      list: []
    }
    this.arrayAdd = this.arrayAdd.bind(this)
  }

  arrayAdd(task){
    this.setState({
        list: [...this.state.list, task]
    })
  }

  render(){
    return(
      <div className='App'>
        <h1>Todo</h1>
        <NewTask add={this.arrayAdd} />
        <List tasks={this.state.list} />
      </div>
    )
  }
}
    

export default App;

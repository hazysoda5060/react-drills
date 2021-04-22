import React, {Component} from 'react';
import './App.css';
import Todo from './Todo'

class App extends Component {
  constructor(){
      super()
      this.state = {
          array: []
      }
      this.handleChange = this.handleChange.bind(this)
      this.arrayAttach = this.arrayAttach.bind(this)
  }

  handleChange(value){
      this.setState({todoInput: value})
  }

  arrayAttach(){
      this.setState({
          array: [...this.state.array, this.state.todoInput],
          todoInput: ''
      })
  }

  render(){
    let list = this.state.array.map((element, index) => {
      return <Todo key={index} task={element} />;
    });
      return(
          <div className='App'>
              <input value={this.state.todoInput} onChange={(ev) => this.handleChange(ev.target.value)}/>
              <button onClick={this.arrayAttach}>Add</button>
              {list}
          </div>
      )
  }
}

export default App;

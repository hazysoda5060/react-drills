import React, {Component} from 'react'

class Todo extends Component {
    constructor(){
        super()
        this.state = {
            todoInput: '',
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
        return(
            <div>
                <input onChange={(ev) => this.handleChange(ev.target.value)}/>
                <button>Add</button>
                {this.state.array.map((el) => {
                        return(
                            <h2>{el}</h2>
                        )
                    })}
            </div>
        )
    }
}

export default Todo
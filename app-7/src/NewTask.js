import { render } from 'react'
import React, {Component} from 'react'

class NewTask extends Component{
    constructor(){
        super()
        this.state = {
            userInput: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(value){
        this.setState({userInput: value})
    }

    handleAdd(){
        this.props.add(this.state.userInput)
        this.setState({input: ''})
    }

    render(){
        return(
            <div>
                <input
                value={this.state.userInput}
                onChange={(ev) => this.handleChange(ev.target.value)}/>
                <button onClick={this.handleAdd}>Add</button>
            </div>
        )
    }
}

export default NewTask
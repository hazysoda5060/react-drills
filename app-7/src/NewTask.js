import React, {Component} from 'react'

class NewTask extends Component{
    constructor(){
        super()
        this.state = {
            userInput: ''
        }
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleChange(value){
        this.setState({userInput: value})
    }

    handleAdd(){
        this.props.add(this.state.userInput)
        this.setState({userInput: ''})
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
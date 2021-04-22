import React, {Component} from 'react'

export default class ToDo extends Component {
  render() {
    return (
        <div>
            <h2>{this.props.task}</h2>
        </div>
                )
  }
}
import React, {Component} from 'react'

class Image extends Component {
    render(){
        return(
            <div>
                <img src={this.props.parentSrc} alt='ded'/>
            </div>
       )
    }
}

export default Image
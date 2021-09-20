import React, { Component } from 'react'
import WithCounter from './withCounter'
 class ClickCounter extends Component {

    render() {
        return (
            <div>
                {this.props.Count}
                 <input type="button" value="click"  onClick={this.props.handleCount}></input>
            </div>
        )
    }
}


export default WithCounter(ClickCounter)
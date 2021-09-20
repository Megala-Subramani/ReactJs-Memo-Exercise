import React, { Component } from 'react'
import WithCounter from './withCounter'


 class HoverCounter extends Component {

    render() {
        return (
            <div>
                 <div onMouseOver={this.props.handleCount}>
                     {this.props.Count}
                     asda
                     asdaad
                     asdasd
                     asdasdasd
                 </div>
            </div>
        )
    }
}


export default WithCounter(HoverCounter)
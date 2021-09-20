import React, { Component } from 'react'

export default class ChangeUserName extends Component {
    render() {
        return (

            <div>
                {this.props.Name}
                 <input type="text" onChange={this.props.ChangeUserName}></input>
            </div>
        )
    }
}

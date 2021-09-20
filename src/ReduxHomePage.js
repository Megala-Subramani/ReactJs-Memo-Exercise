import React, { Component } from 'react'
import {AcceptNameFromUser, GetUser} from './components/actions'
import {connect} from 'react-redux'

// Higher Order Component -->
// co
// Reusability 


 class ReduxHomePage extends Component {


    componentDidMount(){

    }
    render() {
        return (
            <div>
                {this.props.PropsName}
                 <input type="text" onChange={this.props.PropsUpdateName} ></input>
                 <input type="button" onClick={this.props.PropsCallUser}></input>
            </div>
        )
    }
}


const mapStateToProps = (state)=>{
    return{
        PropsName : state.Name
    }
  

}

const mapDispatchToProps = (dispatch)=>{
    return{
        PropsUpdateName : (e)=>dispatch(AcceptNameFromUser(e.target.value)),
        PropsCallUser : ()=>dispatch(GetUser)
        
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(ReduxHomePage)
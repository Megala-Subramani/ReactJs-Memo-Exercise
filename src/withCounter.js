import React from 'react'



const withCounter = (OldComponent) => {
 class NewComponent extends React.Component {
     
    constructor(props){
        super(props)
        this.state={
            Count : 0,
            Counter : 12 
        }
    }

    handleCount=(e)=>{
        this.setState({
            Count : this.state.Count + 1
        })
    }
        render() {
            return (
                <OldComponent handleCount = {this.handleCount} Count = {this.state.Count} />
            )
        }
    }
     

    return  NewComponent
}


export default withCounter
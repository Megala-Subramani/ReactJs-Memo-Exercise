import React from 'react'
import ChangeUserName from './ChangeUserName'



// props and state --> 
// props are read only 
// props are used to pass data from parent component to child component
// state is used for manipulating data 
// state value can be changed, you should not change state directly 
// state and props are objects




export default class MyFirstComp extends React.Component{

   constructor(props){


    // only once -->
    // initialization
    //
       super(props)

       this.ChangeUserName = this.ChangeUserName.bind(this)
       this.state={
           Name : "Naveen",
           Location : "USA"
       }
   }


   


   ChangeUserName(e){


    this.setState({
        Name : e.target.value
    })
   }


   handleChange = (e)=>{

   console.log(e.target.value)


   this.setState({
       Name  : e.target.value
   },()=>{
       alert(this.state.Name)
   })    

  //this.setState is async

  
       
   }

    render(){
        console.log(this.props)
       
        return(
            <div>
                <ChangeUserName Name={this.state.Name} ChangeUserName = {this.ChangeUserName}/>
            </div>
        )
    }

}


